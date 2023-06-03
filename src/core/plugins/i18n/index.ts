import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const fa = require("../../../locale/fa.json");

const resources = {
  fa: {
    translation: fa
  },
};

// declare custom type options so the return is always a string.
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa",
    returnNull: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;