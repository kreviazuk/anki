import { Stack } from 'expo-router';

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'modal',  // 使用模态方式展示
        animation: 'slide_from_bottom',  // 从底部滑入
      }}
    >
      <Stack.Screen name="institution/select" />
    </Stack>
  );
} 