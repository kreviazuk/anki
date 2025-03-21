import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../../../src/components/ThemedText';
import { Stack } from 'expo-router';
import { useState } from 'react';

interface Employee {
  id: string;
  name: string;
  position: string;
  status: '在职' | '离职' | '休假';
  phone: string;
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    name: '张三',
    position: '保育员',
    status: '在职',
    phone: '13800138000'
  },
  {
    id: '2',
    name: '李四',
    position: '保安',
    status: '在职',
    phone: '13800138001'
  },
  {
    id: '3',
    name: '王五',
    position: '保育员',
    status: '休假',
    phone: '13800138002'
  }
];

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <ThemedText style={styles.name}>{employee.name}</ThemedText>
        <View style={[
          styles.statusBadge,
          { backgroundColor: employee.status === '在职' ? '#52c41a' : 
                           employee.status === '休假' ? '#faad14' : '#ff4d4f' }
        ]}>
          <ThemedText style={styles.statusText}>{employee.status}</ThemedText>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>职位：</ThemedText>
          <ThemedText style={styles.value}>{employee.position}</ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>电话：</ThemedText>
          <ThemedText style={styles.value}>{employee.phone}</ThemedText>
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.actionButton}>
          <ThemedText style={styles.actionText}>编辑</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.actionButtonDanger]}>
          <ThemedText style={[styles.actionText, styles.actionTextDanger]}>离职</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function CongyeScreen() {
  const [employees] = useState<Employee[]>(mockEmployees);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <Stack.Screen 
        options={{ 
          title: '从业人员管理',
          headerRight: () => (
            <TouchableOpacity style={styles.addButton}>
              <ThemedText style={styles.addButtonText}>添加</ThemedText>
            </TouchableOpacity>
          ),
        }} 
      />
      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>{employees.filter(e => e.status === '在职').length}</ThemedText>
            <ThemedText style={styles.statLabel}>在职人数</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>{employees.filter(e => e.status === '休假').length}</ThemedText>
            <ThemedText style={styles.statLabel}>休假人数</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>{employees.filter(e => e.status === '离职').length}</ThemedText>
            <ThemedText style={styles.statLabel}>离职人数</ThemedText>
          </View>
        </View>
        <View style={styles.listContainer}>
          {employees.map(employee => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
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
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    margin: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4080FF',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  listContainer: {
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
  cardContent: {
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    color: '#666',
    width: 60,
  },
  value: {
    color: '#333',
    flex: 1,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
    gap: 12,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
  actionButtonDanger: {
    backgroundColor: '#fff1f0',
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },
  actionTextDanger: {
    color: '#ff4d4f',
  },
  addButton: {
    marginRight: 16,
    backgroundColor: '#4080FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
