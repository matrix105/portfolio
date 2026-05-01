import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTerminal } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";

import CodeBlock from "../CodeBlock";
import Typewriter from "./Typewriter";
import { useLanguage } from "../../lib/LanguageContext";

const heroCode = [
  [
    { t: "keyword", v: "import" },
    { t: "plain", v: " { Agent, tool, trace } " },
    { t: "keyword", v: "from" },
    { t: "plain", v: " " },
    { t: "string", v: "\"@/core\"" },
    { t: "punct", v: ";" },
  ],
  [
    { t: "keyword", v: "import" },
    { t: "plain", v: " { z } " },
    { t: "keyword", v: "from" },
    { t: "plain", v: " " },
    { t: "string", v: "\"zod\"" },
    { t: "punct", v: ";" },
  ],
  [],
  [
    { t: "keyword", v: "const" },
    { t: "plain", v: " " },
    { t: "variable", v: "SearchInput" },
    { t: "plain", v: " = " },
    { t: "fn", v: "z" },
    { t: "punct", v: "." },
    { t: "fn", v: "object" },
    { t: "punct", v: "({" },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "query" },
    { t: "punct", v: ": " },
    { t: "fn", v: "z" },
    { t: "punct", v: "." },
    { t: "fn", v: "string" },
    { t: "punct", v: "()," },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "k" },
    { t: "punct", v: ": " },
    { t: "fn", v: "z" },
    { t: "punct", v: "." },
    { t: "fn", v: "number" },
    { t: "punct", v: "()." },
    { t: "fn", v: "default" },
    { t: "punct", v: "(" },
    { t: "number", v: "8" },
    { t: "punct", v: ")," },
  ],
  [
    { t: "punct", v: "});" },
  ],
  [],
  [
    { t: "keyword", v: "export const" },
    { t: "plain", v: " " },
    { t: "variable", v: "researcher" },
    { t: "plain", v: " = " },
    { t: "keyword", v: "new" },
    { t: "plain", v: " " },
    { t: "fn", v: "Agent" },
    { t: "punct", v: "({" },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "name" },
    { t: "punct", v: ": " },
    { t: "string", v: "\"researcher\"" },
    { t: "punct", v: "," },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "model" },
    { t: "punct", v: ": " },
    { t: "string", v: "\"claude-opus-4-7\"" },
    { t: "punct", v: "," },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "tools" },
    { t: "punct", v: ": [" },
    { t: "fn", v: "tool" },
    { t: "punct", v: "(" },
    { t: "string", v: "\"search\"" },
    { t: "punct", v: ", " },
    { t: "type", v: "SearchInput" },
    { t: "punct", v: ", " },
    { t: "variable", v: "search" },
    { t: "punct", v: ")]," },
  ],
  [
    { t: "plain", v: "  " },
    { t: "variable", v: "evals" },
    { t: "punct", v: ": [" },
    { t: "string", v: "\"citation\"" },
    { t: "punct", v: ", " },
    { t: "string", v: "\"faithfulness\"" },
    { t: "punct", v: "]," },
  ],
  [
    { t: "punct", v: "});" },
  ],
  [],
  [
    { t: "comment", v: "// evaluate end-to-end before shipping" },
  ],
  [
    { t: "keyword", v: "await" },
    { t: "plain", v: " " },
    { t: "variable", v: "researcher" },
    { t: "punct", v: "." },
    { t: "fn", v: "run" },
    { t: "punct", v: "({ task: " },
    { t: "string", v: "\"summarize Q4\"" },
    { t: "punct", v: " });" },
  ],
];

const Hero = () => {
  const { t, locale, isRtl } = useLanguage();
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center bg-noise">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-grid-lines opacity-60 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" aria-hidden />

      {/* Floating accent dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-24 left-10 w-1.5 h-1.5 bg-green-lighter rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-40 right-24 w-2 h-2 bg-purple-glow rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyber-blue rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-accent rounded-full opacity-50 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 font-mono text-xs"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green-lighter/40 text-green-lighter bg-green-lighter/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-lighter animate-pulse" />
              {t("hero.availableForWork")}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-gold-accent/40 text-gold-accent bg-gold-accent/5">
              <span aria-hidden>★</span>
              {t("hero.anthropicCertified")}
            </span>
            <span className="text-gray2">·</span>
            <span className="text-gray2">{t("hero.remote")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-mono text-sm text-gray2"
          >
            <span className="text-purple-glow">{t("hero.role.senior")}</span>{" "}
            <span className="text-white">{t("hero.role.aiEngineer")}</span>
            <span className="text-gray2"> · </span>
            <span className="text-cyber-blue">{t("hero.role.architect")}</span>
            <span className="text-gray2"> · </span>
            <span className="text-green-lighter">{t("hero.role.fullstack")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            dir="ltr"
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white ${
              isRtl ? "text-right" : ""
            }`}
          >
            Marwan{" "}
            <span className="text-gradient">Tourky</span>
            <span className="text-gray2">.</span>
          </motion.h1>

          <motion.p
            key={`tw-${locale}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 leading-relaxed font-mono"
          >
            <span className="text-gray2">{"> "}</span>
            <Typewriter text={t("hero.typewriter")} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-sm sm:text-base text-gray2 max-w-xl leading-relaxed"
          >
            {t("hero.description.prefix")}
            <span className="text-white">{t("hero.description.a")}</span>
            {t("hero.description.comma1")}
            <span className="text-white">{t("hero.description.b")}</span>
            {t("hero.description.comma2")}
            <span className="text-white">{t("hero.description.c")}</span>
            {t("hero.description.suffix")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="mailto:contact@marwant.me"
              className="group inline-flex items-center gap-2 px-5 py-3 font-mono text-sm font-semibold rounded bg-green-lighter text-gray0 hover:shadow-glow transition-all duration-300"
            >
              <FaTerminal className="text-xs" aria-hidden />
              {t("hero.ctaPrimary")}
              <FaArrowRight
                className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                  isRtl ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-5 py-3 font-mono text-sm font-semibold rounded border border-terminal-border text-white hover:border-green-lighter hover:text-green-lighter transition-all duration-300"
            >
              <HiOutlineCode className="text-base" aria-hidden />
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        {/* Right: code block — always LTR */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative"
          dir="ltr"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-radial-fade blur-2xl opacity-60 pointer-events-none" aria-hidden />
          <CodeBlock filename="agent.ts" language="typescript" lines={heroCode} className="relative" />

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -bottom-3 right-4 px-3 py-1.5 rounded bg-gray1 border border-terminal-border font-mono text-xs flex items-center gap-2 shadow-card"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-lighter animate-pulse" aria-hidden />
            <span className="text-gray2">{t("hero.evalLabel")}</span>
            <span className="text-green-lighter">{t("hero.evalValue")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
