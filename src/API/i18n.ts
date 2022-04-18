import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    'translation': {
      "movieName": "Deadpool",
        'login' : 'login',
        'signIn' : 'sign in',
        'userName' : 'username',
        "releaseDate": "Release date",
        'director': "Director",
        'star': "star",
        'reviewers': "reviewers",
        'detail' : 'detail',
        'article' : 'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenaryto cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.',
        'viewDetail' : 'view detail',
        'back' : 'back'
    },
  },
  th: {
    'translation': {
      "movieName": "เดดพูล",
      'login' : 'ลงชื่อเข้าใช้',
        'signIn' : 'เข้าสู่ระบบ',
        'userName' : 'ชื่อบัญชีผู้ใช้',
        "releaseDate": "เข้าฉาย",
        'director': "ผู้กำกับ",
        'star': "นักแสดงนำ",
        'reviewers': "ผู้รีวิว",
        'article' : 'เดดพูล เป็นภาพยนตร์ซูเปอร์ฮีโรอเมริกัน เกี่ยวกับตัวละครในเครือมาร์เวลคอมิกส์ในชื่อเดียวกัน เดดพูล เป็นภาพยนตร์ลำดับที่แปดในภาพยนตร์ชุด เอ็กซ์เมน ภาพยนตร์กำกับโดยทิม มิลเลอร์ เขียนบทโดยเรตต์ รีส และพอล เวอร์นิก และนำแสดงโดยไรอัน เรย์โนลส์ โมเรนา แบ็กคาริน เอ็ด สกรีน ที. เจ. ',
        'detail' : 'รายละเอียด',
      'viewDetail' : 'ดูรายละเอียด',
        'back' : 'กลับ'
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
