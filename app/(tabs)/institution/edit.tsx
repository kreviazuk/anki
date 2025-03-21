import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { ThemedText } from '../../../src/components/ThemedText';

export default function InstitutionEditScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen 
        options={{
          title: '编辑机构信息'
        }}
      />
      <ScrollView style={styles.content}>
        <ThemedText>编辑页面内容</ThemedText>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF3FC'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
