import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translations: require("./locales/en/translations.json"),
      },
      th: {
        translations: require("./locales/th/translations.json"),
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

  i18n.languages = ['en', 'th'];


export default i18n;
