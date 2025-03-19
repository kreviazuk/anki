import { Image, StyleSheet, Platform, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { request } from '../../src/services/client';
import { GovService_LoginSendCode, GovService_Login, GovScope, BaseResponse, LoginResponse } from '../../src/services/auth';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    console.log('LoginScreen mounted');
    return () => {
      console.log('LoginScreen unmounted');
    };
  }, []);

  const handleGetVerificationCode = async () => {
    if (!phone || phone.length !== 11) {
      Alert.alert('提示', '请输入正确的手机号码');
      return;
    }

    if (loading) {
      return;
    }

    try {
      setLoading(true);
      console.log('Sending verification code request...');
      
      // 创建请求对象
      const sendCodeRequest = new GovService_LoginSendCode({
        body: {
          PhoneNumber: phone,
          Scope: GovScope.JiGou
        }
      });
      
      // 发送请求
      const response = await request.send(sendCodeRequest) as BaseResponse;
      
      console.log('Response received:', response);
      
      if (response.Code === 0) {
        Alert.alert('成功', '验证码已发送，请注意查收');
        setCountdown(60);
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        console.error('Failed to send code:', response.Message);
        Alert.alert('错误', response.Message || '发送验证码失败，请重试');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      Alert.alert('错误', '网络错误，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!phone || phone.length !== 11) {
      Alert.alert('提示', '请输入正确的手机号码');
      return;
    }

    if (!verificationCode) {
      Alert.alert('提示', '请输入验证码');
      return;
    }

    if (!isAgreed) {
      Alert.alert('提示', '请阅读并同意服务协议和隐私权政策');
      return;
    }

    try {
      setLoginLoading(true);
      console.log('Sending login request...');
      
      // 创建登录请求对象
      const loginRequest = new GovService_Login({
        body: {
          PhoneNumber: phone,
          Code: verificationCode,
          Scope: GovScope.JiGou
        }
      });
      
      // 发送请求
      const response = await request.send(loginRequest) as LoginResponse;
      
      console.log('Login response received:', response);
      
      if (response.Code === 200 && response.Token) {
        await AsyncStorage.setItem('token', response.Token);
        Alert.alert(
          '登录成功',
          '欢迎回来！',
          [
            {
              text: '确定',
              onPress: () => {
                router.replace('/(tabs)');
              },
            },
          ]
        );
      } else {
        console.error('Login failed:', response.Message);
        Alert.alert('错误', response.Message || '登录失败，请重试');
      }
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('错误', '网络错误，请稍后重试');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* 标题区域 */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>欢迎登录</Text>
            <Text style={styles.subtitle}>请使用手机号码登录</Text>
          </View>

          {/* 手机号输入 */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>手机号码</Text>
            <TextInput
              style={styles.input}
              placeholder="请输入手机号码"
              placeholderTextColor="#999"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              maxLength={11}
            />
          </View>

          {/* 验证码输入 */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>验证码</Text>
            <View style={styles.verificationContainer}>
              <TextInput
                style={[styles.input, styles.verificationInput]}
                placeholder="请输入验证码"
                placeholderTextColor="#999"
                value={verificationCode}
                onChangeText={setVerificationCode}
                keyboardType="number-pad"
                maxLength={6}
              />
              <TouchableOpacity 
                style={[
                  styles.getCodeButton,
                  (countdown > 0 || !phone || phone.length !== 11 || loading) && styles.getCodeButtonDisabled
                ]}
                onPress={handleGetVerificationCode}
                disabled={countdown > 0 || !phone || phone.length !== 11 || loading}
              >
                <Text style={[
                  styles.getCodeText,
                  (countdown > 0 || !phone || phone.length !== 11 || loading) && styles.getCodeTextDisabled
                ]}>
                  {countdown > 0 ? `${countdown}s后重试` : '获取验证码'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 登录按钮 */}
          <TouchableOpacity 
            style={[
              styles.loginButton, 
              (!phone || !verificationCode || !isAgreed || loginLoading) && styles.loginButtonDisabled
            ]}
            onPress={handleLogin}
            disabled={!phone || !verificationCode || !isAgreed || loginLoading}
          >
            <Text style={styles.loginButtonText}>
              {loginLoading ? '登录中...' : '登录'}
            </Text>
          </TouchableOpacity>

          {/* 协议区域 */}
          <View style={styles.agreementContainer}>
            <TouchableOpacity 
              style={styles.checkbox}
              onPress={() => setIsAgreed(!isAgreed)}
            >
              <View style={[styles.checkboxInner, isAgreed && styles.checkboxChecked]} />
            </TouchableOpacity>
            <Text style={styles.agreementText}>
              已阅读并同意
              <Text style={styles.linkText}>《服务协议》</Text>
              和
              <Text style={styles.linkText}>《隐私权政策》</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  verificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verificationInput: {
    flex: 1,
    marginRight: 12,
  },
  getCodeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  getCodeButtonDisabled: {
    opacity: 0.5,
  },
  getCodeText: {
    color: '#4080FF',
    fontSize: 14,
  },
  getCodeTextDisabled: {
    color: '#999',
  },
  loginButton: {
    backgroundColor: '#4080FF',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  loginButtonDisabled: {
    backgroundColor: '#B2CFFF',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: '#4080FF',
  },
  agreementText: {
    fontSize: 12,
    color: '#666',
  },
  linkText: {
    color: '#4080FF',
  },
}); 