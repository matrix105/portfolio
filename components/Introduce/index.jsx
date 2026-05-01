import React from "react";
import { FaCogs, FaCode } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

import ResumeCard from "./ResumeCard";
import Resume from "./Resume";
import { useLanguage } from "../../lib/LanguageContext";

const cardConfigs = [
  {
    key: "ai",
    tag: "service · 01",
    accent: "purple-glow",
    tools: ["typescript", "vercel ai", "anthropic", "openai"],
    icon: () => <TbBrandOpenai />,
  },
  {
    key: "arch",
    tag: "service · 02",
    accent: "cyber-blue",
    tools: ["c4", "node", "postgres", "redis"],
    icon: () => <FaCogs />,
  },
  {
    key: "fullstack",
    tag: "service · 03",
    accent: "green-lighter",
    tools: ["node", "typescript", "nuxt", "mongodb"],
    icon: () => <FaCode />,
  },
];

const Introduce = () => {
  const { t } = useLanguage();
  const resumeCards = cardConfigs.map((c) => ({
    ...c,
    title: t(`services.${c.key}.title`),
    description: t(`services.${c.key}.description`),
  }));

  return (
    <section
      id="about"
      className="relative bg-gray0 border-t border-terminal-border"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-wrap">
        <div className="flex flex-col gap-3 w-full p-4 md:w-1/2 order-last md:order-first">
          {resumeCards.map((card, i) => (
            <ResumeCard key={card.key} card={card} index={i} />
          ))}
        </div>
        <Resume />
      </div>
    </section>
  );
};

export default Introduce;
