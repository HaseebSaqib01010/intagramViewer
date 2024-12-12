import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en', // default language
    resources: {
        en: {
            translation: {
                // english translations
            },
        },
        fr: {
            translation: {
                // french translations
            },
        },
        // add more languages as needed
    },
});

export default i18n;