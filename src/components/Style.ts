import {StyleSheet} from 'react-native';
import {COLOR} from '../utils/Constants';

export const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: COLOR.gray,
  },
  tabLabel: {
    color: COLOR.gray,
    fontSize: 12,
  },
});
