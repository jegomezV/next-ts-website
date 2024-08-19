import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_es from '../app/traslates/esp/global.json';
import global_en from '../app/traslates/eng/global.json';
import global_fr from '../app/traslates/fra/global.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // No escapamos los valores por seguridad
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo si la traducción no está disponible
  resources: {
    en: { global: global_en },
    es: { global: global_es },
    fr: { global: global_fr },
  },
  debug: true, // Muestra mensajes de depuración en la consola, puedes cambiar a false en producción
  ns: ['global'], // Los namespaces que se usarán en la aplicación
  defaultNS: 'global', // El namespace por defecto si no se especifica otro
});

export default i18n;
