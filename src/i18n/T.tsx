import { useLanguage } from "./LanguageProvider";
import type { Translatable } from "./LanguageProvider";

export function T({ children, fallback = "" }: { children: Translatable; fallback?: string; }) {
  const { t } = useLanguage();

  // Tripwire: if someone passes an object and it isn't translated, show it clearly
  if (children && typeof children === "object") {
    if (!("en" in children) || !("es" in children)) {
      console.error("Non-i18n object rendered:", children);
    }
  }

  return <>{t(children, fallback)}</>;
}
