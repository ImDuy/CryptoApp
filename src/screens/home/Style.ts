import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  // Header
  headerContainer: {
    backgroundColor: COLOR.secondary,
    paddingTop: 40,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomEndRadius: 12,
  },
  mgTop16: {
    marginTop: 16,
  },
  btnsContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    transform: [{translateY: 20}],
  },
  btnContainer: {
    flex: 1,
  },

  //LineChart
  mgTop40: {
    marginTop: 40,
  },
  lineText: {color: COLOR.highlightText},

  //Currencies
  cTitle: {
    marginTop: 30,
    fontWeight: '700',
    color: COLOR.title,
    fontSize: 18,
  },
  cList: {
    marginTop: 24,
  },
});
