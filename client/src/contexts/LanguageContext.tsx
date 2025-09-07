import { createContext, useContext, useState, useEffect } from "react";
import ptTranslations from "../locales/pt.json";
import enTranslations from "../locales/en.json";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: ptTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    const detectedLang = browserLang.startsWith("pt") ? "pt" : "en";
    
    // Check for stored preference
    const storedLang = localStorage.getItem("language") as Language;
    setLanguage(storedLang || detectedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
