import React from "react";
import { FaCogs, FaCode } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

import ResumeCard from "./ResumeCard";
import Resume from "./Resume";

const resumeCards = [
  {
    tag: "service · 01",
    title: "AI & Agentic Systems",
    description:
      "LLM applications, agent runtimes, RAG and retrieval, evaluation harnesses. Production agentic systems where reliability and traceability matter.",
    tools: ["typescript", "vercel ai", "anthropic", "openai"],
    accent: "purple-glow",
    icon: () => <TbBrandOpenai />,
  },
  {
    tag: "service · 02",
    title: "System Architecture",
    description:
      "Designing the backbone before the code. Data flow, service boundaries, deployment topology, failure modes. Documents engineers can actually build from.",
    tools: ["c4", "node", "postgres", "redis"],
    accent: "cyber-blue",
    icon: () => <FaCogs />,
  },
  {
    tag: "service · 03",
    title: "Full-stack Delivery",
    description:
      "Node and TypeScript services, Nuxt / Vue front-ends, MongoDB and Postgres, queues, infra. End-to-end shipping when the team is small or the project is greenfield.",
    tools: ["node", "typescript", "nuxt", "mongodb"],
    accent: "green-lighter",
    icon: () => <FaCode />,
  },
];

const Introduce = () => {
  return (
    <section
      id="about"
      className="relative bg-gray0 border-t border-terminal-border"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-wrap">
        <div className="flex flex-col gap-3 w-full p-4 md:w-1/2 order-last md:order-first">
          {resumeCards.map((card, i) => (
            <ResumeCard key={card.title} card={card} index={i} />
          ))}
        </div>
        <Resume />
      </div>
    </section>
  );
};

export default Introduce;
