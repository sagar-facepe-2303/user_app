import { StyleSheet } from 'react-native';

export const cardProcessingStyles = StyleSheet.create({
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
