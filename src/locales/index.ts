import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

export const LanguageCode = {
  ko: 'ko',
  en: 'en',
} as const;
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

const i18n = new I18n();
i18n.translations = {
  en: require('./en.json'),
  ko: require('./ko.json'),
};

i18n.enableFallback = true;
i18n.defaultLocale = LanguageCode.ko;

export const setI18nLocale = (languageCode: LanguageCode) => {
  i18n.locale = Object.values(LanguageCode).includes(languageCode) ? languageCode : LanguageCode.ko;
};

export const setDeviceLocaleCodeToLangModule = () => {
  const bestMatch = RNLocalize.findBestLanguageTag(Object.keys(i18n.translations));

  if (bestMatch?.languageTag) {
    setI18nLocale(bestMatch.languageTag as LanguageCode);
  } else {
    setI18nLocale(LanguageCode.ko);
  }
};

setDeviceLocaleCodeToLangModule();

export default i18n;
