import { Stack } from 'expo-router';

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: 'modal',  // 模态展示方式
        animation: 'slide_from_bottom',  // 从底部滑入动画
        headerStyle: {
          backgroundColor: '#fff',  // 导航栏背景色
        },
        headerTitleAlign: 'center',  // 标题居中
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: '600',
        },
        headerShadowVisible: false,  // 移除导航栏底部阴影
      }}
    >
      <Stack.Screen 
        name="institution/select" 
        options={{
          title: "选择机构",
        }}
      />
    </Stack>
  );
} 