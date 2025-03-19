import { StyleSheet, TouchableOpacity, View,Alert } from 'react-native';
import { ThemedText } from '../../src/components/ThemedText';
import { ThemedView } from '../../src/components/ThemedView';
import { ScrollView } from 'react-native';
import { useColorScheme } from '../../src/hooks/useColorScheme';
import { Colors } from '../../src/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { GovJiGou } from '../../src/services/auth';

interface MenuItemProps {
  title: string;
  onPress?: () => void;
}

function MenuItem({ title, onPress }: MenuItemProps) {
  const colorScheme = useColorScheme();
  
  return (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {/* 图标占位符 */}
        <View style={[styles.iconPlaceholder, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]} />
      </View>
      <ThemedText style={styles.menuText}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

interface MenuSectionProps {
  title: string;
  items: string[];
}

function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <View style={styles.section}>
      <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <MenuItem key={index} title={item} />
        ))}
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const [institution, setInstitution] = useState<GovJiGou | null>(null);

  useEffect(() => {
    loadInstitution();
  }, []);

  const loadInstitution = async () => {
    try {
      const savedInstitution = await AsyncStorage.getItem('selectedInstitution');
      if (savedInstitution) {
        setInstitution(JSON.parse(savedInstitution));
      }
    } catch (err) {
      console.error('加载机构信息失败:', err);
    }
  };

  const institutionItems = ['机构信息2', '从业人员管理', '班级管理', '园所条约',
                          '卫生保健管理', '机构规章', '费用评价', '活动管理'];
  
  const enrollmentItems = ['幼儿入托', '幼儿管理', '入托约定'];
  
  const dailyItems = ['学期设置', '晨检记录', '一日生活', '一周食谱',
                     '健康与茶', '消防中心', '用药共识', '机构满意度'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <ThemedText style={styles.institutionName}>托育机构名称托托育机构名称</ThemedText>
          <TouchableOpacity 
            style={styles.switchButton}
            onPress={() => {
              router.push('/(modals)/institution/select');
            }}
          >
            <ThemedText style={styles.switchButtonText}>切换</ThemedText>
          </TouchableOpacity>
        </View>
        {institution ? (
          <View style={styles.institutionInfo}>
            <ThemedText style={styles.infoText}>机构代码：{institution.SheHui_XinYong_DaiMa}</ThemedText>
            <ThemedText style={styles.infoText}>地址：{institution.DiZhi}</ThemedText>
          </View>
        ) : (
          <ThemedText style={styles.noInstitution}>未选择机构</ThemedText>
        )}
      </View>
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <MenuSection title="机构管理" items={institutionItems} />
        <MenuSection title="入托管理" items={enrollmentItems} />
        <MenuSection title="日常管理" items={dailyItems} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  institutionName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  institutionInfo: {
    marginTop: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  menuItem: {
    width: '25%',
    padding: 8,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  menuText: {
    fontSize: 12,
    textAlign: 'center',
  },
  switchButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  switchButtonText: {
    fontSize: 14,
    color: '#4080FF',
  },
  noInstitution: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
}); 