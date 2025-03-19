import Constants from 'expo-constants';

export interface FileControlsModel {
  url?: string;
  [key: string]: any;
}

export const getImageUrl = (url: string | undefined | null): string => {
  if (!url) {
    return '';
  }

  // If absolute path (starts with http or https), return directly
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If relative path, add API URL prefix
  const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.31.99:8080';
  return url.startsWith('/') ? `${apiUrl}${url}` : `${apiUrl}/${url}`;
}; 