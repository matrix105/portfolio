import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const Resume = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-4 md:w-1/2"
    >
      <div className="flex items-center gap-2 font-mono text-xs text-gray2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-green-lighter" aria-hidden />
        <span>{t("about.label")}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
        {t("about.headingPrefix")}
        <span className="text-purple-glow">{t("about.headingA")}</span>
        {t("about.headingMid")}
        <span className="text-cyber-blue">{t("about.headingB")}</span>
        {t("about.headingSuffix")}
      </h2>
      <p className="mt-5 text-sm text-gray2 leading-relaxed">
        {t("about.p1.a")}
        <span className="text-white">{t("about.p1.b")}</span>
        {t("about.p1.c")}
      </p>
      <p className="mt-4 text-sm text-gray2 leading-relaxed">
        {t("about.p2.a")}
        <span className="text-white">{t("about.p2.b")}</span>
        {t("about.p2.c")}
        <span className="text-white">{t("about.p2.d")}</span>
        {t("about.p2.e")}
        <span className="text-green-lighter">{t("about.p2.f")}</span>
        {t("about.p2.g")}
        <span className="text-green-lighter">{t("about.p2.h")}</span>
        {t("about.p2.i")}
      </p>
      <p className="mt-4 text-sm text-gray2 leading-relaxed">{t("about.p3")}</p>

      <div className="mt-6 flex flex-wrap gap-2 font-mono text-tiny">
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-purple-glow">~</span> {t("about.pillSoftware")}
        </span>
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-cyber-blue">~</span> {t("about.pillAi")}
        </span>
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-green-lighter">~</span> {t("about.pillRd")}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 font-mono text-tiny text-gray2 mb-2">
          <span className="w-1 h-1 rounded-full bg-gold-accent" aria-hidden />
          <span>{t("about.credentialsLabel")}</span>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-tiny">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-gold-accent/30 bg-gold-accent/5 text-white">
            <span className="text-gold-accent">★</span>
            {t("hero.anthropicCertified")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
