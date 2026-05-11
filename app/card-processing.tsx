import BackIcon from '@/components/BackIcon';
import FetchingShieldIcon from '@/components/FetchingShieldIcon';
import FlippingCard from '@/components/FlippingCard';
import LoadingCircle from '@/components/LoadingCircle';
import PciDssBadge from '@/components/PciDssBadge';
import cardProcessingData from '@/data/cardProcessing.json';
import { cardProcessingStyles as styles } from '@/styles/cardProcessingStyles';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
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
            <FlippingCard size={80} />
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
