import React from "react";
import SectionHeader from "../SectionHeader";
import WorkCard from "./WorkCard";
import { useLanguage } from "../../lib/LanguageContext";

const projectConfigs = [
  {
    key: "agent",
    subtitle: "agent.runtime.ts",
    year: "2025",
    stack: ["typescript", "node", "vercel ai", "anthropic", "vue"],
    accent: "purple-glow",
  },
  {
    key: "rag",
    subtitle: "rag_service.ts",
    year: "2024",
    stack: ["typescript", "node", "mongodb", "pgvector", "openai"],
    accent: "cyber-blue",
  },
  {
    key: "rewrite",
    subtitle: "migration_plan.md",
    year: "2024",
    stack: ["nuxt", "node", "postgres", "docker", "github actions"],
    accent: "green-lighter",
  },
];

const Work = () => {
  const { t } = useLanguage();
  const projects = projectConfigs.map((p) => ({
    ...p,
    title: t(`work.items.${p.key}.title`),
    problem: t(`work.items.${p.key}.problem`),
    approach: t(`work.items.${p.key}.approach`),
    outcome: t(`work.items.${p.key}.outcome`),
  }));

  const labels = {
    caseLabel: t("work.caseLabel"),
    problem: t("work.problem"),
    approach: t("work.approach"),
    outcome: t("work.outcome"),
  };

  return (
    <section id="work" className="relative bg-gray0 border-t border-terminal-border">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-radial-purple opacity-50 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <SectionHeader
          index="04"
          label={t("header.nav.work")}
          title={t("work.title")}
          accent="purple-glow"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <WorkCard key={p.key} project={p} index={i} labels={labels} />
          ))}
        </div>

        <p className="mt-8 font-mono text-tiny text-gray2">{t("work.footer")}</p>
      </div>
    </section>
  );
};

export default Work;
