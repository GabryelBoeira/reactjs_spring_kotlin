const translations = {
  en: require("./locales/en/translation.json"),
  "pt-BR": require("./locales/pt-br/translation.json"),
};

// Detecta o locale do navegador
const getBrowserLocale = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.replace(/_/, "-"); // Formato ISO 639-1 (ex: en-US -> en-US)
};

const getTranslation = (key) => {
  const locale = getBrowserLocale();
  return translations[locale]?.[key] || translations["en"]?.[key] || key; // fallback para inglês
};

export default getTranslation;
