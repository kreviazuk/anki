import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Platform, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../../src/components/ThemedText';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { GovJiGou, GovJiGouService_GetGovJiGous, ListResponse } from '../../../src/services/auth';
import { request } from '../../../src/services/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InstitutionSelectScreen() {
  const [searchText, setSearchText] = useState('');
  const [institutions, setInstitutions] = useState<GovJiGou[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchInstitutions();
  }, []);

  const fetchInstitutions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // 创建请求对象
      const getInstitutionsRequest = new GovJiGouService_GetGovJiGous();
      
      // 发送请求
      const response = await request.send(getInstitutionsRequest) as GovJiGou[];
      setInstitutions(response);
    } catch (err) {
      console.error('Error fetching institutions:', err);
      // Alert.alert('获取机构列表失败', err instanceof Error ? err.message : '获取机构列表失败2');
      setError(err instanceof Error ? err.message : '获取机构列表失败2');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectInstitution = async (institution: GovJiGou) => {
    try {
      await AsyncStorage.setItem('selectedInstitution', JSON.stringify(institution));
      router.back(); // 返回首页
    } catch (err) {
      Alert.alert('错误', '保存机构信息失败');
    }
  };

  const renderInstitutionItem = ({ item }: { item: GovJiGou }) => (
    <TouchableOpacity 
      style={styles.institutionItem}
      onPress={() => handleSelectInstitution(item)}
    >
      <View style={styles.institutionInfo}>
        <ThemedText style={styles.institutionName}>{item.JiGou_MingCheng}</ThemedText>
        <ThemedText style={styles.institutionDetail}>机构代码：{item.SheHui_XinYong_DaiMa}</ThemedText>
        <ThemedText style={styles.institutionDetail}>地址：{item.DiZhi}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4080FF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <ThemedText style={styles.errorText}>{error}</ThemedText>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={fetchInstitutions}
        >
          <ThemedText style={styles.retryButtonText}>重试</ThemedText>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={institutions}
        renderItem={renderInstitutionItem}
        keyExtractor={item => item.F_Id || ''}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : 8,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4080FF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 40,
  },
  searchContainer: {
    padding: 12,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 36,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  listContent: {
    padding: 16,
  },
  institutionItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  institutionInfo: {
    gap: 4,
  },
  institutionName: {
    fontSize: 16,
    fontWeight: '600',
  },
  institutionDetail: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  errorText: {
    fontSize: 16,
    color: '#FF4B4B',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#4080FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 