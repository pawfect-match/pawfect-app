import { Platform, Dimensions, StatusBar } from 'react-native';

import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

// export const isKorean = (languageCode: string) => {
//   return languageCode === Language.Korean
// }

type EnvType = 'PROD' | 'STAGING' | 'DEV';

const hasNotch = Platform.OS === 'ios' && DeviceInfo.hasNotch();

const getSafeAreaTopSpace = () => {
  if (Platform.OS === 'ios' && DeviceInfo.hasDynamicIsland()) return 59;
  if (Platform.OS === 'ios' && DeviceInfo.hasNotch()) return 44;
  if (Platform.OS === 'android') return 0;
  return 20;
};

export const HardwareInfo: {
  OS: string;
  size: {
    width: number;
    height: number;
  };
  // isKorean: boolean
  hasNotch: boolean;
  isAndroid: boolean;
  //   languageCode: Language
  safeAreaTopSpace: number;
  safeAreaBottomSpace: number;
  navigationBarHeight: number;
  androidExtraDimension: {
    statusBarHeight: number;
    navigationBarHeight: number;
  };
  buttonBottomSpace: number;
  isDevEnv: boolean;
  currentEnv: EnvType;
} = {
  OS: Platform.OS,
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  //   isKorean: I18n.locale.slice(0, 2) === Language.Korean,
  hasNotch: hasNotch,
  isAndroid: Platform.OS === 'android',
  //   languageCode: I18n.locale.slice(0, 2) === Language.Korean ? Language.Korean : Language.English,
  safeAreaTopSpace: getSafeAreaTopSpace(),
  safeAreaBottomSpace: hasNotch ? 34 : 0,
  navigationBarHeight: Platform.OS === 'android' ? Dimensions.get('screen').height - Dimensions.get('window').height + StatusBar.currentHeight : 0,
  androidExtraDimension: {
    statusBarHeight: Number(StatusBar.currentHeight),
    navigationBarHeight: Dimensions.get('screen').height - Dimensions.get('window').height + StatusBar.currentHeight,
  },
  buttonBottomSpace: hasNotch ? 0 : 24,
  isDevEnv: !!Config.API_URL?.includes('dev'),
  currentEnv: Config.STAGE as EnvType,
};
