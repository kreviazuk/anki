import { StyleSheet, TouchableOpacity, View,Alert } from 'react-native';
import { ThemedText } from '../../src/components/ThemedText';
import { ThemedView } from '../../src/components/ThemedView';
import { ScrollView } from 'react-native';
import { useColorScheme } from '../../src/hooks/useColorScheme';
import { Colors } from '../../src/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import { GovJiGou } from '../../src/services/auth';
import { useFocusEffect } from 'expo-router';
import { getImageUrl } from '../../src/utils/image';
import { Image } from 'react-native';
import { SectionTitleWithLine } from '../../src/components/SectionTitleWithLine';
import { SvgProps } from 'react-native-svg';
import JgxxIcon from '../../assets/images/icon-jgxx.svg';

interface MenuItemProps {
  title: string;
  onPress?: () => void;
  Icon?: React.FC<SvgProps>;
}

function MenuItem({ title, onPress, Icon }: MenuItemProps) {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;
  
  return (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.menuItemContent}>
        <View style={styles.iconContainer}>
          {Icon ? (
            <Icon width={48} height={48} fill={tintColor} />
          ) : (
            <View style={[styles.iconPlaceholder, { backgroundColor: tintColor }]} />
          )}
        </View>
        <ThemedText style={styles.menuText}>{title}</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
  lineColor?: string;
}

function MenuSection({ title, items, lineColor }: MenuSectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionContent}>
        <SectionTitleWithLine title={title} lineColor={lineColor} />
        <View style={styles.grid}>
          {items.map((item, index) => (
            <MenuItem key={index} title={item.title} Icon={item.Icon} />
          ))}
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const [institution, setInstitution] = useState<GovJiGou | null>(null);

  const loadInstitution = useCallback(async () => {
    try {
      const storedInstitution = await AsyncStorage.getItem('selectedInstitution');
      if (storedInstitution) {
        setInstitution(JSON.parse(storedInstitution));
      }
    } catch (error) {
      console.error('Error loading institution:', error);
    }
  }, []);
 useEffect(() => {
  console.log('institution', institution);
 }, [institution]);
  useFocusEffect(
    useCallback(() => {
      loadInstitution();
    }, [loadInstitution])
  );

  const imageUrl = institution?.TuPian?.[0]?.url ? getImageUrl(institution.TuPian[0].url) : '';

  const institutionItems = [
    { title: '机构信息', Icon: JgxxIcon },
    { title: '从业人员管理' },
    { title: '班级管理' },
    { title: '园所条约' },
    { title: '卫生保健管理' },
    { title: '机构规章' },
    { title: '费用评价' },
    { title: '活动管理' }
  ];
  
  const enrollmentItems = ['幼儿入托', '幼儿管理', '入托约定'].map(title => ({ title }));
  const dailyItems = ['学期设置', '晨检记录', '一日生活', '一周食谱',
                     '健康与茶', '消防中心', '用药共识', '机构满意度'].map(title => ({ title }));

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // 清除所有本地存储的数据
      router.replace('/(auth)/login'); // 跳转到登录页
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('错误', '退出登录失败，请重试');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <View style={styles.sectionContent}>
              <View style={styles.headerContent}>
                <View style={styles.institutionContainer}>
                  <View style={styles.avatarContainer}>
                    {imageUrl ? (
                      <Image 
                        source={{ uri: imageUrl }}
                        style={styles.institutionImage}
                        defaultSource={require('../../assets/images/icon.png')}
                      />
                    ) : (
                      <View style={styles.avatarPlaceholder}>
                        <ThemedText style={styles.avatarText}>
                          {institution?.JiGou_MingCheng?.charAt(0) || '机'}
                        </ThemedText>
                      </View>
                    )}
                  </View>
                  <View style={styles.institutionInfo}>
                    <ThemedText style={styles.institutionName} numberOfLines={1}>
                      {institution?.JiGou_MingCheng || '未选择机构'}
                    </ThemedText>
                  </View>
                </View>
                <View style={styles.headerButtons}>
                  <TouchableOpacity 
                    style={styles.switchButton}
                    onPress={() => {
                      router.push('/(modals)/institution/select');
                    }}
                  >
                    <ThemedText style={styles.switchButtonText}>切换机构</ThemedText>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.switchButton, styles.logoutButton]}
                    onPress={handleLogout}
                  >
                    <ThemedText style={[styles.switchButtonText, styles.logoutText]}>退出登录</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <MenuSection title="机构管理" items={institutionItems} lineColor="#4080FF" />
          <MenuSection title="入托管理" items={enrollmentItems} lineColor="#00B578" />
          <MenuSection title="日常管理" items={dailyItems} lineColor="#FF7D00" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF3FC',
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    padding: 12,
  },
  section: {
    marginBottom: 12,
  },
  sectionContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  institutionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    marginRight: 12,
  },
  institutionImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4080FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  institutionInfo: {
    flex: 1,
    marginRight: 12,
  },
  institutionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  menuItem: {
    width: '25%',
    padding: 6,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EFF4F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuItemContent: {
    width: '100%',
    alignItems: 'center',
    padding: 8,
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
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoutButton: {
    backgroundColor: '#FFF0F0',
  },
  logoutText: {
    color: '#FF4D4F',
  },
}); 