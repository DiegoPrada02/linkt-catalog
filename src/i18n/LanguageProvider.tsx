// src/i18n/LanguageProvider.tsx
import React, { createContext, useContext, useMemo, useState } from "react";

export type Lang = "en" | "es";
export type I18nText = { en: string; es: string };
export type Translatable = string | I18nText | undefined;

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (value: Translatable, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((p) => (p === "en" ? "es" : "en"));

  const value = useMemo<LanguageContextValue>(() => {
    return {
      lang,
      toggleLang,
      t: (value, fallback = "") => {
        if (!value) return fallback;
        if (typeof value === "string") return value;
        // value is I18nText
        return value[lang] ?? fallback;
      },
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider />");
  return ctx;
}
