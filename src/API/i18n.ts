import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Movie Name": "Deadpool",
      component: {
        "Release date": "Release date",
        Director: "Director",
        star: "star",
        reviewers: "reviewers",
      },
    },
  },
  th: {
    translation: {
      "Movie Name": "เดดพูล",
      component: {
        "Release date": "เข้าฉาย",
        Director: "ผู้กำกับ",
        star: "นักแสดงนำ",
        reviewers: "ผู้รีวิว",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
