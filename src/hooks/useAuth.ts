import { create } from 'zustand';
import { StateCreator } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuth = create<AuthState>((set: StateCreator<AuthState>['set']) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
})); 