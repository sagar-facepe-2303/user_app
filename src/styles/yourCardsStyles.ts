import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const CARD_WIDTH = 324;
export const CARD_GAP = 12;

export const yourCardsStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },

  // Card carousel
  carouselContent: {
    paddingHorizontal: 20,
    gap: CARD_GAP,
  },
  cardWrapper: {
    width: CARD_WIDTH,
  },
  cardTop: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    padding: 16,
    overflow: 'hidden',
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandLogo: {
    width: 24,
    height: 18,
    borderRadius: 3,
    backgroundColor: '#C96A5A',
  },
  brandText: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '500',
  },
  dateText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  defaultText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 6,
  },
  mostRecent: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 6,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  amountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amount: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  eye: {
    fontSize: 16,
  },
  validThru: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
  subLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },

  // Card bottom
  cardBottom: {
    width: '100%',
    minHeight: 51,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardMsg: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  cardMsgBold: {
    fontWeight: '700',
  },
  remove: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: '600',
  },

  // Dots
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.dotInactive,
  },
  dotActive: {
    width: 18,
    backgroundColor: colors.dotActive,
  },

  // Action row
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  actionBtn: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F3F3FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },

  // Feature rows
  featureList: {
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 12,
  },
  featureCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAE9FE',
    padding: 16,
    flexDirection: 'row',
    gap: 14,
    overflow: 'hidden',
    width: 353,
    height: 138,
  },
  featureIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureBody: {
    flex: 1,
  },
  featureTitle: {
    color: '#171A1F',
    fontSize: 14,
    fontWeight: '700',
  },
  featureDesc: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
  },
  featureGraphic: {
    position: 'absolute',
    right: 12,
    bottom: 0,
  },

  // Tab bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingVertical: 10,
    paddingBottom: 18,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabLabelActive: {
    color: colors.primary,
  },
});
