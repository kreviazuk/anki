import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = () => {
    if (!phoneNumber || phoneNumber.length !== 11) {
      return;
    }

    // 开始倒计时
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
  };

  const handleLogin = () => {
    if (!phoneNumber || !code) {
      return;
    }
    
    // 临时：直接跳转到主页
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      {/* Logo */}
      <View className="items-center mb-8">
        <View className="w-20 h-20 bg-gray-200 rounded-full" />
      </View>

      {/* 手机号输入 */}
      <View className="mb-4">
        <Text className="text-gray-600 mb-2">手机号码</Text>
        <TextInput
          className="h-12 px-4 border border-gray-200 rounded-lg"
          placeholder="请输入手机号码"
          keyboardType="phone-pad"
          maxLength={11}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* 验证码输入 */}
      <View className="mb-6">
        <Text className="text-gray-600 mb-2">验证码</Text>
        <View className="flex-row">
          <TextInput
            className="flex-1 h-12 px-4 border border-gray-200 rounded-lg"
            placeholder="请输入验证码"
            keyboardType="number-pad"
            maxLength={6}
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity
            className={`ml-3 justify-center px-4 rounded-lg ${
              countdown > 0 ? 'bg-gray-200' : 'bg-blue-500'
            }`}
            onPress={handleSendCode}
            disabled={countdown > 0}
          >
            <Text className={countdown > 0 ? 'text-gray-500' : 'text-white'}>
              {countdown > 0 ? `${countdown}s` : '获取验证码'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 登录按钮 */}
      <TouchableOpacity
        className="h-12 bg-blue-500 rounded-lg items-center justify-center"
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-medium">登录</Text>
      </TouchableOpacity>

      {/* 用户协议 */}
      <View className="flex-row items-center justify-center mt-6">
        <TouchableOpacity className="w-4 h-4 border border-gray-300 rounded mr-2" />
        <Text className="text-gray-500">
          已阅读并同意
          <Text className="text-blue-500">《服务协议》</Text>
          和
          <Text className="text-blue-500">《隐私政策》</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen; 