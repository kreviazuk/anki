import { Image, StyleSheet, Platform, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleGetVerificationCode = () => {
    // 实现获取验证码的逻辑
    console.log('Getting verification code for:', phone);
  };

  const handleLogin = async () => {
    if (phone && verificationCode && isAgreed) {
      try {
        // 这里应该是实际的登录API调用
        // 模拟登录成功，保存token
        await AsyncStorage.setItem('userToken', 'dummy-token');
        // 登录成功后跳转到首页
        router.replace('/(tabs)');
      } catch (error) {
        console.error('Login failed:', error);
      }
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
                style={styles.getCodeButton}
                onPress={handleGetVerificationCode}
              >
                <Text style={styles.getCodeText}>获取验证码</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 登录按钮 */}
          <TouchableOpacity 
            style={[styles.loginButton, (!phone || !verificationCode || !isAgreed) && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={!phone || !verificationCode || !isAgreed}
          >
            <Text style={styles.loginButtonText}>登录</Text>
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
  getCodeText: {
    color: '#4080FF',
    fontSize: 14,
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