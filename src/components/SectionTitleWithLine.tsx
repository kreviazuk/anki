import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface SectionTitleWithLineProps {
  title: string;
  lineColor?: string;
}

export function SectionTitleWithLine({ title, lineColor = '#4080FF' }: SectionTitleWithLineProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.verticalLine, { backgroundColor: lineColor }]} />
      <ThemedText style={styles.title}>{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  verticalLine: {
    width: 3,
    height: 18,
    borderRadius: 1.5,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 