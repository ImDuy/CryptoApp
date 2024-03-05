import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE} from '../utils/Constants';

export const styles = StyleSheet.create({
  // TabIcon
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.subTitle,
  },
  tabLabel: {
    color: COLOR.subTitle,
    fontSize: 12,
  },
  tabIconFocused: {
    tintColor: COLOR.title,
  },
  tabLabelFocused: {
    color: COLOR.title,
  },
  circleTab: {
    backgroundColor: COLOR.primary,
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 16,
  },

  //Balance
  bSubtitle: {
    color: COLOR.subTitle,
    fontWeight: '700',
    fontSize: FONTSIZE.medium,
  },
  bTitle: {
    marginTop: 2,
    color: COLOR.subTitle,
    fontSize: FONTSIZE.large,
    fontWeight: '800',
  },
  bHighlightTitle: {
    color: COLOR.title,
    fontSize: FONTSIZE.xLarge,
  },
  bSubContainer: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  bHighlightIcon: {
    tintColor: COLOR.highlightText,
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  bHighlightText: {
    color: COLOR.highlightText,
  },
  bSmallText: {
    marginLeft: 20,
    fontWeight: '400',
    fontSize: FONTSIZE.medium - 2,
    color: COLOR.subTitle,
  },

  // CustomButton
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.btnBackground,
    gap: 6,
    padding: 9,
    borderRadius: 8,
  },
  btnIcon: {
    width: 22,
    height: 22,
    tintColor: COLOR.btnLabel,
  },
  btnLabel: {
    color: COLOR.btnLabel,
    fontWeight: '700',
    fontSize: FONTSIZE.medium,
  },

  //CurrencyItem
  ciContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ciSubContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  ciIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.title,
  },
  ciName: {
    fontSize: FONTSIZE.medium,
    color: COLOR.title,
  },
  ciPrice: {
    color: COLOR.title,
    fontWeight: '800',
  },
  ciPercentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  ciPercentIcon: {
    tintColor: COLOR.highlightText,
    width: 10,
    height: 10,
  },
  ciPercentText: {
    color: COLOR.highlightText,
    fontSize: FONTSIZE.small,
    fontWeight: '700',
  },
});
