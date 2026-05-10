import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../components/BackIcon';
import CardItem, { CardData } from '../components/CardItem';
import { CARD_GAP, CARD_WIDTH, yourCardsStyles as s } from '../styles/yourCardsStyles';
import { colors } from '../theme/colors';

const CARDS: CardData[] = [
  {
    id: '1',
    brand: 'Via Discover it',
    last4: '123',
    label: 'Default',
    date: '06 Feb 2026',
    amount: '$ 150.00',
    validThru: '15/02',
    message: "You've successfully made over ",
    messageBold: '1k+',
  },
  {
    id: '2',
    brand: 'Via Visa',
    last4: '456',
    label: 'Backup',
    date: '02 Jan 2026',
    amount: '$ 82.40',
    validThru: '09/27',
    message: "You've successfully made over ",
    messageBold: '500+',
  },
  {
    id: '3',
    brand: 'Via Master',
    last4: '789',
    label: 'Travel',
    date: '18 Dec 2025',
    amount: '$ 305.10',
    validThru: '11/28',
    message: "You've successfully made over ",
    messageBold: '2k+',
  },
];

export default function YourCardsScreen() {
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<CardData>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const i = Math.round(x / (CARD_WIDTH + CARD_GAP));
    if (i !== index) setIndex(i);
  };

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.container}>
        <ScrollView contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={s.header}>
            <View style={s.headerRow}>
              <Pressable style={s.backBtn} onPress={() => {}} hitSlop={12}>
                <BackIcon />
              </Pressable>
              <Text style={s.title}>Your cards</Text>
            </View>
            <Text style={[s.subtitle, { marginLeft: 44 }]}>Managing 3 active cards</Text>
          </View>

          {/* Card carousel */}
          <FlatList
            ref={listRef}
            data={CARDS}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + CARD_GAP}
            decelerationRate="fast"
            onScroll={onScroll}
            scrollEventThrottle={16}
            contentContainerStyle={s.carouselContent}
            ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
            renderItem={({ item }) => <CardItem data={item} />}
          />

          {/* Dots */}
          <View style={s.dots}>
            {CARDS.map((_, i) => (
              <View key={i} style={[s.dot, i === index && s.dotActive]} />
            ))}
          </View>

          {/* Action buttons */}
          <View style={s.actionsRow}>
            <Pressable style={s.actionBtn}>
              <View style={[s.actionIconWrap, { backgroundColor: colors.primarySoft }]}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>↻</Text>
              </View>
              <Text style={s.actionText}>Review Auto pay</Text>
            </Pressable>
            <Pressable style={s.actionBtn}>
              <View style={[s.actionIconWrap, { backgroundColor: colors.primarySoft }]}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>＋</Text>
              </View>
              <Text style={s.actionText}>Add new card</Text>
            </Pressable>
          </View>

          {/* Features */}
          <View style={s.featureList}>
            <View style={s.featureCard}>
              <View style={s.featureIconWrap}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>🛡</Text>
              </View>
              <View style={s.featureBody}>
                <Text style={s.featureTitle}>Identity management</Text>
                <Text style={s.featureDesc}>
                  You linked 3 cards to your{'\n'}biometric profile for safety.
                </Text>
              </View>
            </View>

            <View style={s.featureCard}>
              <View style={s.featureIconWrap}>
                <Text style={{ color: colors.primary, fontWeight: '700' }}>⌖</Text>
              </View>
              <View style={s.featureBody}>
                <Text style={s.featureTitle}>Glance to Pay</Text>
                <Text style={s.featureDesc}>
                  Secure payments in seconds{'\n'}with your face.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom tab bar */}
        <View style={s.tabBar}>
          <Pressable style={s.tabItem}>
            <Text style={{ fontSize: 18 }}>🏠</Text>
            <Text style={s.tabLabel}>Home</Text>
          </Pressable>
          <Pressable style={s.tabItem}>
            <Text style={{ fontSize: 18, color: colors.primary }}>💳</Text>
            <Text style={[s.tabLabel, s.tabLabelActive]}>Cards</Text>
          </Pressable>
          <Pressable style={s.tabItem}>
            <Text style={{ fontSize: 18 }}>🧾</Text>
            <Text style={s.tabLabel}>Transactions</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
