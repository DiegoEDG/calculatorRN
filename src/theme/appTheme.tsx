import {StyleSheet} from 'react-native';

export const appTheme = StyleSheet.create({
  globalAppStyles: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainTextStyle: {
    color: 'white',
    fontSize: 60,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  secondTextStyle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
});
