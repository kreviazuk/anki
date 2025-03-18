import React, { createContext, useContext, useState } from 'react';
import { router } from 'expo-router';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token: string) => {
    // 保存 token
    setIsLoggedIn(true);
    router.replace('/(tabs)');
  };

  const logout = () => {
    // 清除 token
    setIsLoggedIn(false);
    router.replace('/(auth)/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 