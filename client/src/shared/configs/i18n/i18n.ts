// noinspection TypeScriptValidateTypes

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import home from '../../../../public/locales/en/home.json';

export const defaultNS = 'home';
export const resources = {
  en: {
    home,
  },
} as const;

const isDev = import.meta.env.DEV;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: isDev,

    interpolation: {
      escapeValue: false,
    },
    ns: ['home'],
    defaultNS,
    resources,
  });

export default i18n;
