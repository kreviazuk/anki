import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Redirect, Slot, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-console-time-polyfill';
import { useAuth } from '../src/hooks/useAuth';
import { useColorScheme } from '../src/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (!loaded) return;
    
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const institution = await AsyncStorage.getItem('selectedInstitution');
        
        if (!token) {
          setIsAuthenticated(false);
          if (segments[0] !== '(auth)') {
            router.replace('/(auth)/login');
          }
          return;
        }

        if (!institution) {
          setIsAuthenticated(true);
          if (segments[0] !== '(modals)') {
            router.replace('/(modals)/institution/select');
          }
          return;
        }

        setIsAuthenticated(true);
        if (segments[0] === '(auth)') {
          router.replace('/(tabs)');
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
        if (segments[0] !== '(auth)') {
          router.replace('/(auth)/login');
        }
      }
    };

    checkAuth();
  }, [loaded, router, segments, setIsAuthenticated]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="(auth)" 
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen 
          name="(tabs)"
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen 
          name="(modals)"
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
