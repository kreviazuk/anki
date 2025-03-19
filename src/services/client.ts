import type { IReturn } from "./auth";
import { GovScope } from "./auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import Constants from 'expo-constants';

interface ApiResponse<T = any> {
  Code: number;
  Message: string | null;
  Token?: string;
  UserId?: string;
  Data?: T;
}

export class JsonServiceClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    // 确保baseUrl末尾有斜杠
    const baseUrl = Constants.expoConfig?.extra?.apiUrl || 'http://gapitest.yban.co';
    this.baseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
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

    const finalUrl = `${this.baseUrl}${url}`;

    if (queryParams.length > 0) {
      return finalUrl + (finalUrl.includes('?') ? '&' : '?') + queryParams.join('&');
    }
    return finalUrl;
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
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token || ""
        },
        body: data ? JSON.stringify(data) : undefined
      });

      let responseData: ApiResponse<T>;
      try {
        responseData = await response.json();
      } catch (error) {
        console.error('Response parsing error:', error);
        console.error('Original response:', await response.text());
        throw new Error('服务器响应格式错误');
      }

      // 如果返回了新token，更新存储
      if (responseData.Token) {
        await AsyncStorage.setItem("token", responseData.Token);
      }

      // 检查业务状态码
      if (responseData.Code === 600) {
        await AsyncStorage.removeItem("token");
        Alert.alert('提示', responseData.Message || '登录已过期');
        setTimeout(() => {
          router.replace({ pathname: '/login' } as any);
        }, 2000);
        throw new Error(responseData.Message || "登录已过期");
      }

      if (responseData.Code !== 200) {
        console.error('Business Error Response:', {
          code: responseData.Code,
          message: responseData.Message,
          url,
          data
        });
        throw new Error(responseData.Message || "请求失败");
      }
      
      return responseData.Data || responseData as any;
    } catch (error) {
      console.error("请求失败", error);
      if (error instanceof Error) {
        Alert.alert('错误', error.message || '网络请求失败，请稍后重试');
      } else {
        Alert.alert('错误', '网络请求失败，请稍后重试');
      }
      throw error;
    }
  }
}

// 导出单例
export const request = new JsonServiceClient(); 