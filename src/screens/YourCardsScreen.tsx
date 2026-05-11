import AddCardIcon from '@/components/AddCardIcon';
import AddCardModal from '@/components/AddCardModal';
import CardsIcon from '@/components/CardsIcon';
import FaceGraphic from '@/components/FaceGraphic';
import GlanceIcon from '@/components/GlanceIcon';
import HomeIcon from '@/components/HomeIcon';
import IdentityIcon from '@/components/IdentityIcon';
import ReviewIcon from '@/components/ReviewIcon';
import ShieldGraphic from '@/components/ShieldGraphic';
import TransactionsIcon from '@/components/TransactionsIcon';
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
import cardsData from '../data/cards.json';
import { CARD_GAP, CARD_WIDTH, yourCardsStyles as s } from '../styles/yourCardsStyles';

const CARDS: CardData[] = cardsData.cards;

export default function YourCardsScreen() {
  const [index, setIndex] = useState(0);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [cards, setCards] = useState<CardData[]>(CARDS);
  const listRef = useRef<FlatList<CardData>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const i = Math.round(x / (CARD_WIDTH + CARD_GAP));
    if (i !== index) setIndex(i);
  };

  const handleRemoveCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
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
            <Text style={[s.subtitle, { marginLeft: 44 }]}>
              Managing {cards.length} active card{cards.length !== 1 ? 's' : ''}
            </Text>
          </View>

          {/* Card carousel */}
          <FlatList
            ref={listRef}
            data={cards}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + CARD_GAP}
            decelerationRate="fast"
            onScroll={onScroll}
            scrollEventThrottle={16}
            contentContainerStyle={s.carouselContent}
            ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
            renderItem={({ item }) => <CardItem data={item} onRemove={handleRemoveCard} />}
          />

          {/* Dots */}
          <View style={s.dots}>
            {cards.map((_, i) => (
              <View key={i} style={[s.dot, i === index && s.dotActive]} />
            ))}
          </View>

          {/* Action buttons */}
          <View style={s.actionsRow}>
            <Pressable style={s.actionBtn}>
              <View style={s.actionIconWrap}>
                <ReviewIcon size={20} />
              </View>
              <Text style={s.actionText}>Review Auto pay</Text>
            </Pressable>
            <Pressable style={s.actionBtn} onPress={() => setShowAddCardModal(true)}>
              <View style={s.actionIconWrap}>
                <AddCardIcon size={20} />
              </View>
              <Text style={s.actionText}>Add new card</Text>
            </Pressable>
          </View>

          {/* Features */}
          <View style={s.featureList}>
            <View style={s.featureCard}>
              <View style={s.featureIconWrap}>
                <IdentityIcon size={24} />
              </View>
              <View style={s.featureBody}>
                <Text style={s.featureTitle}>Identity management</Text>
                <Text style={s.featureDesc}>
                  You linked 3 cards to your{'\n'}biometric profile for safety.
                </Text>
              </View>
              <ShieldGraphic style={s.featureGraphic} />
            </View>

            <View style={s.featureCard}>
              <View style={s.featureIconWrap}>
                <GlanceIcon size={24} />
              </View>
              <View style={s.featureBody}>
                <Text style={s.featureTitle}>Glance to Pay</Text>
                <Text style={s.featureDesc}>
                  Secure payments in seconds{'\n'}with your face.
                </Text>
              </View>
              <FaceGraphic style={s.featureGraphic} />
            </View>
          </View>
        </ScrollView>

        {/* Bottom tab bar */}
        <View style={s.tabBar}>
          <Pressable style={s.tabItem}>
            <HomeIcon size={24} />
            <Text style={s.tabLabel}>Home</Text>
          </Pressable>
          <Pressable style={s.tabItem}>
            <CardsIcon size={24} />
            <Text style={[s.tabLabel, s.tabLabelActive]}>Cards</Text>
          </Pressable>
          <Pressable style={s.tabItem}>
            <TransactionsIcon size={24} />
            <Text style={s.tabLabel}>Transactions</Text>
          </Pressable>
        </View>
      </View>

      <AddCardModal visible={showAddCardModal} onClose={() => setShowAddCardModal(false)} />
    </SafeAreaView>
  );
}
