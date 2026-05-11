import BackIcon from '@/components/BackIcon';
import FetchingShieldIcon from '@/components/FetchingShieldIcon';
import LoadingCircle from '@/components/LoadingCircle';
import PciDssBadge from '@/components/PciDssBadge';
import ProcessingCardIcon from '@/components/ProcessingCardIcon';
import cardProcessingData from '@/data/cardProcessing.json';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CardProcessingScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <BackIcon />
        </Pressable>
      </View>

      <View style={styles.badgeWrap}>
        <PciDssBadge />
      </View>

      <View style={styles.shieldWrap}>
        <FetchingShieldIcon width={220} height={270} />
        <View style={styles.circleAbs}>
          <LoadingCircle size={140} strokeWidth={3.818} color="#5F15EE" trackColor="#E5E5E5">
            <ProcessingCardIcon size={80} />
          </LoadingCircle>
        </View>
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.fetchingText}>{cardProcessingData.status}</Text>
        <Text style={styles.title}>{cardProcessingData.title}</Text>
        <Text style={styles.subtitle}>{cardProcessingData.subtitle}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.securedBy}>{cardProcessingData.securedBy.label}</Text>
        <Text style={styles.stripe}>{cardProcessingData.securedBy.provider}</Text>
        <Text style={styles.footerNote}>{cardProcessingData.securedBy.note}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  badgeWrap: {
    alignItems: 'center',
  },
  shieldWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 220,
    height: 270,
    alignSelf: 'center',
  },
  circleAbs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3.818,
    borderColor: '#5F15EE',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
  },
  textBlock: {
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  fetchingText: {
    color: '#565656',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  title: {
    color: '#101828',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  subtitle: {
    color: '#505A7A',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,
    textAlign: 'center',
    marginTop: 6,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: 'center',
  },
  securedBy: {
    color: '#505A7A',
    fontSize: 12,
  },
  stripe: {
    color: '#101828',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  footerNote: {
    color: '#9CA3AF',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
  },
});
