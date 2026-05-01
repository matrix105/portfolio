import React from "react";
import SectionHeader from "../SectionHeader";
import WorkCard from "./WorkCard";

const projects = [
  {
    title: "Multi-agent research pipeline",
    subtitle: "agent.runtime.ts",
    year: "2025",
    problem:
      "A B2B SaaS team needed analysts to triage long, semi-structured reports faster, without losing citation traceability.",
    approach:
      "Designed the agent runtime (planner → retrievers → critic) in TypeScript, an evaluation harness, and a Vue dashboard for review.",
    outcome:
      "Cut review time ~60% with citation-grounded answers and a measurable eval suite gating each release.",
    stack: ["typescript", "node", "vercel ai", "anthropic", "vue"],
    accent: "purple-glow",
  },
  {
    title: "Domain-specific RAG",
    subtitle: "rag_service.ts",
    year: "2024",
    problem:
      "A regulated industry needed document QA over a private corpus with strict citation and access requirements.",
    approach:
      "Hybrid search (BM25 + dense), citation enforcement at generation time, MongoDB + pgvector, role-aware retrieval.",
    outcome:
      "Production rollout with 99.4% citation coverage on eval set; ~3x faster lookup than the legacy search.",
    stack: ["typescript", "node", "mongodb", "pgvector", "openai"],
    accent: "cyber-blue",
  },
  {
    title: "Architecture rewrite",
    subtitle: "migration_plan.md",
    year: "2024",
    problem:
      "A monolithic Nuxt + Express app was bottlenecking new features and on-call was eating the team's week.",
    approach:
      "Re-architected into service boundaries with a documented contract, staged migration, feature parity tests.",
    outcome:
      "Shipped over 6 weeks with zero downtime and a 40% drop in P1 incidents in the first quarter.",
    stack: ["nuxt", "node", "postgres", "docker", "github actions"],
    accent: "green-lighter",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative bg-gray0 border-t border-terminal-border">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-radial-purple opacity-50 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <SectionHeader
          index="04"
          label="work"
          title="Selected work, anonymized."
          accent="purple-glow"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <WorkCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <p className="mt-8 font-mono text-tiny text-gray2">
          // client work is anonymized by default. happy to walk through specifics on a call.
        </p>
      </div>
    </section>
  );
};

export default Work;
