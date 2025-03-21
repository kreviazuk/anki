import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';
import { ThemedText } from '../../../src/components/ThemedText';
import { Formik, FormikProps } from 'formik';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GovJiGou, FileControlsModel } from '../../../src/services/auth';
import { getImageUrl } from '../../../src/utils/image';
import * as ImagePicker from 'expo-image-picker';

export default function InstitutionEditScreen() {
  const [initialValues, setInitialValues] = useState<Partial<GovJiGou>>({});
  const formikRef = useRef<FormikProps<Partial<GovJiGou>>>(null);
  const [images, setImages] = useState<FileControlsModel[]>([]);

  useEffect(() => {
    loadInstitutionInfo();
  }, []);

  const loadInstitutionInfo = async () => {
    try {
      const data = await AsyncStorage.getItem('selectedInstitution');
      if (data) {
        const parsedData = JSON.parse(data);
        console.log('加载的机构信息:', parsedData);
        setInitialValues(parsedData);
        if (parsedData.TuPian) {
          setImages(parsedData.TuPian);
        }
      }
    } catch (error) {
      console.error('加载机构信息失败:', error);
    }
  };

  const handleSubmit = async (values: Partial<GovJiGou>) => {
    try {
      const dataToSave = {
        ...values,
        TuPian: images
      };
      await AsyncStorage.setItem('selectedInstitution', JSON.stringify(dataToSave));
      console.log('保存成功');
    } catch (error) {
      console.error('保存失败:', error);
    }
  };

  const handleAddImage = async () => {
    try {
      // 检查权限状态
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.status !== 'granted') {
        alert('需要访问相册权限才能选择图片');
        return;
      }

      // 打开图片选择器
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        allowsMultipleSelection: false,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        const newImage: FileControlsModel = {
          url: asset.uri,
          name: `image_${Date.now()}.${asset.uri.split('.').pop()}`
        };
        setImages(prev => [...prev, newImage]);
      }
    } catch (error) {
      console.error('选择图片失败:', error);
      alert('选择图片失败，请重试');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const FormField = ({ label, name, formik }: { label: string; name: keyof GovJiGou; formik: any }) => (
    <View style={styles.fieldContainer}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TextInput
        style={styles.input}
        value={String(formik.values[name] || '')}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen 
        options={{
          title: '编辑机构信息',
          headerRight: () => (
            <TouchableOpacity 
              style={{ paddingHorizontal: 16, paddingVertical: 8 }}
              onPress={() => {
                if (formikRef.current) {
                  formikRef.current.handleSubmit();
                }
              }}
            >
              <ThemedText style={{ fontSize: 16, color: '#4080FF', fontWeight: '600' }}>
                保存
              </ThemedText>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={styles.content}>
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              await handleSubmit(values);
              router.back();
            } catch (error) {
              console.error('保存失败:', error);
            }
          }}
          enableReinitialize
        >
          {(formik) => (
            <View style={styles.form}>
              <View style={styles.fieldContainer}>
                <ThemedText style={styles.label}>机构图片</ThemedText>
                <View style={styles.imageGrid}>
                  {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                      <Image 
                        source={{ uri: getImageUrl(image.url) }}
                        style={styles.image}
                        defaultSource={require('../../../assets/images/icon.png')}
                      />
                      <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => handleRemoveImage(index)}
                      >
                        <ThemedText style={styles.removeButtonText}>×</ThemedText>
                      </TouchableOpacity>
                    </View>
                  ))}
                  <TouchableOpacity 
                    style={styles.addButton}
                    onPress={handleAddImage}
                  >
                    <ThemedText style={styles.addButtonText}>+</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>

              <FormField label="机构名称" name="JiGou_MingCheng" formik={formik} />
              <FormField label="社会信用代码" name="SheHui_XinYong_DaiMa" formik={formik} />
              <FormField label="法人姓名" name="FaRen_XingMing" formik={formik} />
              <FormField label="法人证件号" name="FaRen_ZhengJianHao" formik={formik} />
              <FormField label="机构负责人" name="FuZeRen" formik={formik} />
              <FormField label="机构电话" name="DianHua" formik={formik} />
              <FormField label="机构成立时间" name="ChengLi_ShiJian" formik={formik} />
              <FormField label="机构分类" name="JiGou_FenLei" formik={formik} />
              <FormField label="托育机构服务类型" name="FuWu_LeiXing" formik={formik} />
              <FormField label="单位承办" name="DanWei_ChengBan" formik={formik} />
              <FormField label="事业单位" name="ShiYe_DanWei" formik={formik} />
              <FormField label="场所性质" name="ChangSuo_XingZhi" formik={formik} />
              <FormField label="机构登记部门" name="DengJi_BuMen" formik={formik} />
              <FormField label="机构备案情况" name="BeiAn_QingKuang" formik={formik} />
              <FormField label="机构地址" name="DiZhi" formik={formik} />
              <FormField label="机构建筑总面积" name="JianZhu_MianJi" formik={formik} />
              <FormField label="自有户外活动场地面积" name="HuWai_MianJi" formik={formik} />
              <FormField label="婴幼儿生活用房面积" name="ShengHuo_MianJi" formik={formik} />
              <FormField label="机构婴幼儿生活用房所在楼层" name="ShengHuo_LouCeng" formik={formik} />
              <FormField label="全职从业人员数" name="QuanZhi_RenShu" formik={formik} />
              <FormField label="保育人员数" name="BaoYu_RenShu" formik={formik} />
              <FormField label="保安人员数" name="BaoAn_RenShu" formik={formik} />
              <FormField label="托位总数" name="TuoWei_ZongShu" formik={formik} />
              <FormField label="托位剩余数" name="TuoWei_ShengYuShu" formik={formik} />
              <FormField label="3岁以下婴幼儿入托数" name="YingYouEr_RuTuoShu" formik={formik} />
              <FormField label="3岁以下普惠入托数" name="PuHui_RuTuoShu" formik={formik} />
              <FormField label="全日托保育费" name="QuanRi_BaoYuFei" formik={formik} />
              <FormField label="半日托保育费" name="BanRi_BaoYuFei" formik={formik} />
              <FormField label="计时托保育费" name="JiShi_BaoYuFei" formik={formik} />
              <FormField label="临时托保育费" name="LinShi_BaoYuFei" formik={formik} />
            </View>
          )}
        </Formik>
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
  },
  form: {
    padding: 16
  },
  fieldContainer: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff'
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8
  },
  imageContainer: {
    position: 'relative',
    marginRight: 8,
    marginBottom: 8
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  addButtonText: {
    fontSize: 24,
    color: '#999'
  }
});
