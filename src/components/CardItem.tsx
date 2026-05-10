import EyeIcon from '@/components/EyeIcon';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { yourCardsStyles as s } from '../styles/yourCardsStyles';

export type CardData = {
  id: string;
  brand: string;
  last4: string;
  label: string;
  date: string;
  amount: string;
  validThru: string;
  message: string;
  messageBold: string;
};

export default function CardItem({ data }: { data: CardData }) {
  return (
    <View style={s.cardWrapper}>
      {/* Top gradient section */}
      <LinearGradient
        colors={['#F3F3FF', '#BAB8FE', '#EAE9FE']}
        locations={[0, 0.4, 1]}
        start={{ x: 0.2, y: 1 }}
        end={{ x: 0.8, y: 0 }}
        style={s.cardTop}
      >
        <View style={s.cardTopRow}>
          <View style={s.brandRow}>
            <View style={s.brandLogo} />
            <Text style={s.brandText}>
              {data.brand} ••• {data.last4}
            </Text>
          </View>
          <Text style={s.dateText}>{data.date}</Text>
        </View>

        <View style={s.cardTopRow}>
          <Text style={s.defaultText}>{data.label}</Text>
          <Text style={s.mostRecent}>Most recent</Text>
        </View>

        <View style={s.amountRow}>
          <View>
            <View style={s.amountLeft}>
              <Text style={s.amount}>{data.amount}</Text>
              <EyeIcon size={18} />
            </View>
            <Text style={s.subLabel}>Utilised this month</Text>
          </View>
          <View>
            <Text style={s.validThru}>{data.validThru}</Text>
            <Text style={[s.subLabel, { textAlign: 'right' }]}>Valid thru</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Bottom white section */}
      <View style={s.cardBottom}>
        <Text style={s.cardMsg}>
          {data.message}
          <Text style={s.cardMsgBold}>{data.messageBold}</Text>
          {' secure payments.'}
        </Text>
        <Text style={s.remove}>Remove</Text>
      </View>
    </View>
  );
}
