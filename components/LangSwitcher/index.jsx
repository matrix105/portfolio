import React from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { LOCALES, LOCALE_META } from "../../lib/translations";

const LangSwitcher = ({ className = "" }) => {
  const { locale, setLocale } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language"
      dir="ltr"
      className={`inline-flex items-center font-mono text-tiny rounded border border-terminal-border bg-terminal-bg/40 overflow-hidden ${className}`}
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={LOCALE_META[code].name}
            className={`px-2 py-1 transition-colors ${
              active
                ? "bg-green-lighter/15 text-green-lighter"
                : "text-gray2 hover:text-white"
            }`}
          >
            {LOCALE_META[code].label}
          </button>
        );
      })}
    </div>
  );
};

export default LangSwitcher;
