import type { IReturn } from "./auth";
import { GovScope } from "./auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import Constants from 'expo-constants';

export class JsonServiceClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = Constants.expoConfig?.extra?.apiUrl || 'http://gapitest.yban.co/api';
    this.timeout = parseInt(Constants.expoConfig?.extra?.apiTimeout || '10000');
  }

  public send<T>(request: IReturn<T>): Promise<T> {
    return this.request<T>(request, this.getMethod(request));
  }

  public get<T>(request: IReturn<T>): Promise<T> {
    return this.request<T>(request, "GET");
  }

  public post<T>(request: IReturn<T>): Promise<T> {
    return this.request<T>(request, "POST");
  }

  private getMethod<T>(request: IReturn<T>): string {
    return typeof request.getMethod == "function"
      ? request.getMethod()
      : "POST";
  }

  private queryPaths = [] as string[];

  public toAbsoluteUrl<T>(request: IReturn<T>): string {
    this.queryPaths = [];
    const tmpl = request.getUrl();
    
    // 替换路径参数
    let url = tmpl;
    if (tmpl.includes("{")) {
      url = tmpl.replace(/\{([^}]+)\}/g, (_, key) => {
        this.queryPaths.push(key);
        return (request as any)[key];
      });
    }

    // 处理查询参数
    const queryParams: string[] = [];
    Object.keys(request).forEach((key) => {
      if (!this.queryPaths.includes(key) && key !== 'body') {
        const value = (request as any)[key];
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((v) => {
              queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
            });
          } else {
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
          }
        }
      }
    });

    if (queryParams.length > 0) {
      url += (url.includes('?') ? '&' : '?') + queryParams.join('&');
    }
    return `${this.baseUrl}${url}`;
  }

  private toData<T>(request: IReturn<T>) {
    // 如果是GET请求，不需要传递data
    if (this.getMethod(request) === "GET") {
      return undefined;
    }

    const obj = {} as any;
    Object.keys(request).forEach((key) => {
      if (!this.queryPaths.includes(key) && key !== 'body') {
        obj[key] = (request as any)[key];
      }
    });
    const data = this.getMethod(request) === "POST" ? (request as any).body : obj;
    // 添加默认的 scope
    if (data && typeof data === "object") {
      data.Scope = GovScope.JiGou;
    }
    return data;
  }

  private async request<T>(
    request: IReturn<T>,
    method: string
  ): Promise<T> {
    try {
      const token = await AsyncStorage.getItem("token");
      const url = this.toAbsoluteUrl(request);
      const data = this.toData(request);
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token || "",
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      const responseData = await response.json();
      
      // 检查业务状态码
      if (responseData.code === 600) {
        await AsyncStorage.removeItem("token");
        Alert.alert('提示', responseData.msg || '登录已过期');
        setTimeout(() => {
          router.replace('/login');
        }, 2000);
        throw new Error(responseData.msg || "登录已过期");
      }
      
      return responseData;
    } catch (error) {
      console.error("请求失败", error);
      Alert.alert('错误', '网络请求失败，请稍后重试');
      throw error;
    }
  }
}

// 导出单例
export const request = new JsonServiceClient(); 