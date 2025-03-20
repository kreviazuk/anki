import { Stack } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "../../src/components/ThemedText";
import { router } from "expo-router";

import { Colors } from "../../src/constants/Colors";
import { useColorScheme } from "../../src/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: '600',
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "首页",
        }}
      />
      <Stack.Screen
        name="institution/edit"
        options={{
          title: "机构信息",
          headerRight: () => (
            <TouchableOpacity 
              style={{ paddingHorizontal: 16, paddingVertical: 8 }}
              onPress={() => console.log('编辑按钮被点击')}
            >
              <ThemedText style={{ fontSize: 16, color: '#4080FF', fontWeight: '600' }}>
                编辑
              </ThemedText>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
