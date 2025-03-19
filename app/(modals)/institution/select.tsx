import { StyleSheet, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../src/components/ThemedText';
import { useState } from 'react';
import { router } from 'expo-router';

interface Institution {
  id: string;
  name: string;
  code: string;
  address: string;
}

export default function InstitutionSelectScreen() {
  const [searchText, setSearchText] = useState('');
  
  // 模拟机构数据，实际应该从API获取
  const institutions: Institution[] = [
    {
      id: '1',
      name: '示例托育机构1',
      code: '12345678',
      address: '某某市某某区某某街道1号',
    },
    {
      id: '2',
      name: '示例托育机构2',
      code: '87654321',
      address: '某某市某某区某某街道2号',
    },
    // 可以添加更多机构数据
  ];

  const filteredInstitutions = institutions.filter(
    inst => inst.name.includes(searchText) || inst.code.includes(searchText)
  );

  const handleSelectInstitution = (institution: Institution) => {
    // 这里应该保存选中的机构信息
    console.log('Selected institution:', institution);
    router.back(); // 返回首页
  };

  const renderInstitutionItem = ({ item }: { item: Institution }) => (
    <TouchableOpacity 
      style={styles.institutionItem}
      onPress={() => handleSelectInstitution(item)}
    >
      <View style={styles.institutionInfo}>
        <ThemedText style={styles.institutionName}>{item.name}</ThemedText>
        <ThemedText style={styles.institutionDetail}>机构代码：{item.code}</ThemedText>
        <ThemedText style={styles.institutionDetail}>地址：{item.address}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ThemedText style={styles.backButtonText}>返回</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.title}>选择机构</ThemedText>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="搜索机构名称或代码"
          value={searchText}
          onChangeText={setSearchText}
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        data={filteredInstitutions}
        renderItem={renderInstitutionItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
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
    padding: 16,
  },
  searchInput: {
    height: 40,
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
}); 