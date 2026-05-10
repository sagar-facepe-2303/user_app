import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text?: string;
};

export default function PciDssBadge({ text = 'PCI/DSS certified for secure transactions.' }: Props) {
  return (
    <View style={styles.certBadge}>
      <Text style={styles.certText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  certBadge: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#5F15EE',
    backgroundColor: '#F3F3FF',
    marginBottom: 20,
    width: 239,
  },
  certText: {
    color: '#5F15EE',
    fontSize: 12,
    fontWeight: '500',
  },
});
