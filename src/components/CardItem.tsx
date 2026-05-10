import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
        // approximates linear-gradient(17deg, #F3F3FF -99.51%, #BAB8FE -14.68%, #EAE9FE 70.16%)
        colors={['#F3F3FF', '#BAB8FE', '#EAE9FE']}
        locations={[0, 0.35, 1]}
        start={{ x: 0.15, y: 1 }}
        end={{ x: 0.85, y: 0 }}
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
              <Text style={s.eye}>👁</Text>
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
