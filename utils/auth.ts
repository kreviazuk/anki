import { router } from 'expo-router';

export const logout = () => {
  // 清除登录状态
  // await clearToken();
  
  // 跳转到登录页
  router.replace('/(auth)/login');
}; 