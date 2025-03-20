import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../../src/components/ThemedText';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GovJiGou, FileControlsModel } from '../../../src/services/auth';
import { getImageUrl } from '../../../src/utils/image';

export default function InstitutionEditScreen() {
  const [institutionInfo, setInstitutionInfo] = useState<GovJiGou | null>(null);

  useEffect(() => {
    loadInstitutionInfo();
  }, []);

  const loadInstitutionInfo = async () => {
    try {
      const data = await AsyncStorage.getItem('selectedInstitution');
      if (data) {
        const parsedData = JSON.parse(data);
        console.log('加载的机构信息:', parsedData);
        setInstitutionInfo(parsedData);
      } else {
        console.log('未找到机构信息');
      }
    } catch (error) {
      console.error('加载机构信息失败:', error);
    }
  };

  const formatValue = (value: string | number | null | undefined): string | number | undefined => {
    if (value === null || value === undefined) {
      return undefined;
    }
    return value;
  };

  const InfoItem = ({ label, value }: { label: string; value?: string | number }) => (
    <View style={styles.infoItem}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <ThemedText style={styles.value}>{value || '所填内容'}</ThemedText>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left','right','bottom']}>
      <Stack.Screen options={{ title: '机构信息' }} />
      <ScrollView style={styles.content}>
        <InfoItem label="机构名称" value={formatValue(institutionInfo?.JiGou_MingCheng)} />
        <InfoItem label="社会信用代码" value={formatValue(institutionInfo?.SheHui_XinYong_DaiMa)} />
        <InfoItem label="法人姓名" value={formatValue(institutionInfo?.FaRen_XingMing)} />
        <InfoItem label="法人证件号" value={formatValue(institutionInfo?.FaRen_ZhengJianHao)} />
        <InfoItem label="机构负责人" value={formatValue(institutionInfo?.FuZeRen)} />
        <InfoItem label="机构电话" value={formatValue(institutionInfo?.DianHua)} />
        <InfoItem label="机构成立时间" value={formatValue(institutionInfo?.ChengLi_ShiJian)} />
        <InfoItem label="机构分类" value={formatValue(institutionInfo?.JiGou_FenLei)} />
        <InfoItem label="托育机构服务类型" value={formatValue(institutionInfo?.FuWu_LeiXing)} />
        <InfoItem label="单位承办" value={formatValue(institutionInfo?.DanWei_ChengBan)} />
        <InfoItem label="事业单位" value={formatValue(institutionInfo?.ShiYe_DanWei)} />
        <InfoItem label="场所性质" value={formatValue(institutionInfo?.ChangSuo_XingZhi)} />
        <InfoItem label="机构登记部门" value={formatValue(institutionInfo?.DengJi_BuMen)} />
        <InfoItem label="机构备案情况" value={formatValue(institutionInfo?.BeiAn_QingKuang)} />
        <InfoItem label="服务形式" value={institutionInfo?.FuWu_XingShi?.join(', ')} />
        
        {institutionInfo?.TuPian && institutionInfo.TuPian.length > 0 && (
          <View style={styles.imagesContainer}>
            <ThemedText style={styles.label}>机构图片</ThemedText>
            <View style={styles.imageGrid}>
              {institutionInfo.TuPian.map((image: FileControlsModel, index: number) => (
                <Image 
                  key={index}
                  source={{ uri: getImageUrl(image.url) }}
                  style={styles.image}
                  defaultSource={require('../../../assets/images/icon.png')}
                />
              ))}
            </View>
          </View>
        )}

        <InfoItem label="机构地址" value={formatValue(institutionInfo?.DiZhi)} />
        <InfoItem label="机构建筑总面积" value={`${formatValue(institutionInfo?.JianZhu_MianJi) || ''} 平方`} />
        <InfoItem label="自有户外活动场地面积" value={`${formatValue(institutionInfo?.HuWai_MianJi) || ''} 平方`} />
        <InfoItem label="婴幼儿生活用房面积" value={`${formatValue(institutionInfo?.ShengHuo_MianJi) || ''} 平方`} />
        <InfoItem label="机构婴幼儿生活用房所在楼层" value={formatValue(institutionInfo?.ShengHuo_LouCeng)} />
        <InfoItem label="全职从业人员数" value={`${formatValue(institutionInfo?.QuanZhi_RenShu) || ''} 人`} />
        <InfoItem label="保育人员数" value={`${formatValue(institutionInfo?.BaoYu_RenShu) || ''} 人`} />
        <InfoItem label="保安人员数" value={`${formatValue(institutionInfo?.BaoAn_RenShu) || ''} 人`} />
        <InfoItem label="托位总数" value={`${formatValue(institutionInfo?.TuoWei_ZongShu) || ''} 人`} />
        <InfoItem label="托位剩余数" value={`${formatValue(institutionInfo?.TuoWei_ShengYuShu) || ''} 人`} />
        <InfoItem label="3岁以下婴幼儿入托数" value={`${formatValue(institutionInfo?.YingYouEr_RuTuoShu) || ''} 人`} />
        <InfoItem label="3岁以下普惠入托数" value={`${formatValue(institutionInfo?.PuHui_RuTuoShu) || ''} 人`} />
        <InfoItem label="全日托保育费" value={`${formatValue(institutionInfo?.QuanRi_BaoYuFei) || ''} 元`} />
        <InfoItem label="半日托保育费" value={`${formatValue(institutionInfo?.BanRi_BaoYuFei) || ''} 元`} />
        <InfoItem label="计时托保育费" value={`${formatValue(institutionInfo?.JiShi_BaoYuFei) || ''} 元`} />
        <InfoItem label="临时托保育费" value={`${formatValue(institutionInfo?.LinShi_BaoYuFei) || ''} 元`} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF3FC',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  imagesContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
});
