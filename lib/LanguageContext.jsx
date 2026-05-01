import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { LOCALES, LOCALE_META, getTranslations, resolvePath } from "./translations";

const STORAGE_KEY = "marwant.locale";
const DEFAULT_LOCALE = "en";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && LOCALES.includes(stored)) {
        setLocaleState(stored);
      } else if (typeof navigator !== "undefined") {
        const nav = (navigator.language || "").slice(0, 2).toLowerCase();
        if (LOCALES.includes(nav)) setLocaleState(nav);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = LOCALE_META[locale] || LOCALE_META[DEFAULT_LOCALE];
    document.documentElement.lang = meta.code;
    document.documentElement.dir = meta.dir;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => {
    const dict = getTranslations(locale);
    const meta = LOCALE_META[locale] || LOCALE_META[DEFAULT_LOCALE];
    const t = (path, fallback = "") => {
      const out = resolvePath(dict, path);
      return out == null ? fallback : out;
    };
    return {
      locale,
      setLocale,
      dir: meta.dir,
      meta,
      t,
      dict,
      hydrated,
      isRtl: meta.dir === "rtl",
    };
  }, [locale, setLocale, hydrated]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
