import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Platform, ActivityIndicator, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../../src/components/ThemedText';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { GovJiGou, GovJiGouService_GetGovJiGous } from '../../../src/services/auth';
import { request } from '../../../src/services/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getImageUrl } from '../../../src/utils/image';

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
      
      const getInstitutionsRequest = new GovJiGouService_GetGovJiGous();
      const response = await request.send(getInstitutionsRequest) as GovJiGou[];
      setInstitutions(response);
    } catch (err) {
      console.error('Error fetching institutions:', err);
      setError(err instanceof Error ? err.message : '获取机构列表失败');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectInstitution = async (institution: GovJiGou) => {
    try {
      await AsyncStorage.setItem('selectedInstitution', JSON.stringify(institution));
      router.replace('/(tabs)');
    } catch (err) {
      Alert.alert('错误', '保存机构信息失败');
    }
  };

  const getAvatarColor = (index: number) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    return colors[index % colors.length];
  };

  const renderInstitutionItem = ({ item, index }: { item: GovJiGou; index: number }) => {
    const imageUrl = item.TuPian?.[0]?.url ? getImageUrl(item.TuPian[0].url) : '';
    return (
      <TouchableOpacity 
        style={styles.institutionItem}
        onPress={() => handleSelectInstitution(item)}
      >
        <View style={[styles.avatar, !imageUrl && { backgroundColor: getAvatarColor(index) }]}>
          {imageUrl ? (
            <Image 
              source={{ uri: imageUrl }}
              style={styles.avatarImage}
              defaultSource={require('../../../assets/images/icon.png')}
            />
          ) : (
            <ThemedText style={styles.avatarText}>
              {item.JiGou_MingCheng?.charAt(0) || '机'}
            </ThemedText>
          )}
        </View>
        <View style={styles.institutionInfo}>
          <ThemedText style={styles.institutionName} numberOfLines={2}>
            {item.JiGou_MingCheng || '未知机构名称'}
          </ThemedText>
        </View>
        <ThemedText style={styles.arrowIcon}>›</ThemedText>
      </TouchableOpacity>
    );
  };

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
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={institutions}
        renderItem={renderInstitutionItem}
        keyExtractor={item => item.F_Id || ''}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  institutionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  institutionInfo: {
    flex: 1,
    marginRight: 8,
  },
  institutionName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#CCC',
    marginLeft: 4,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E5E5',
    marginLeft: 68,
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