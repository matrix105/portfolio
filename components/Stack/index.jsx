import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const groups = [
  {
    title: "Backend",
    badge: "primary",
    accent: "cyber-blue",
    items: [
      { name: "node", version: "20" },
      { name: "typescript", version: "5" },
      { name: "fastify", version: "*" },
      { name: "express", version: "*" },
      { name: "mongodb", version: "7" },
      { name: "postgres", version: "16" },
      { name: "redis", version: "7" },
    ],
  },
  {
    title: "AI & Agents",
    accent: "purple-glow",
    items: [
      { name: "vercel ai sdk", version: "*" },
      { name: "anthropic", version: "sdk" },
      { name: "openai", version: "sdk" },
      { name: "langchain.js", version: "*" },
      { name: "pgvector", version: "*" },
      { name: "qdrant", version: "*" },
      { name: "python", version: "3.12" },
    ],
  },
  {
    title: "Frontend",
    accent: "green-lighter",
    items: [
      { name: "nuxt", version: "3" },
      { name: "vue", version: "3" },
      { name: "typescript", version: "5" },
      { name: "tailwind", version: "3" },
      { name: "pinia", version: "*" },
    ],
  },
  {
    title: "Infra",
    accent: "gold-accent",
    items: [
      { name: "docker", version: "*" },
      { name: "github actions", version: "ci" },
      { name: "vercel", version: "*" },
      { name: "aws", version: "ec2/s3" },
      { name: "hetzner", version: "vps" },
    ],
  },
];

const accentMap = {
  "green-lighter": "text-green-lighter border-green-lighter/30 hover:border-green-lighter/60 hover:bg-green-lighter/5",
  "purple-glow": "text-purple-glow border-purple-glow/30 hover:border-purple-glow/60 hover:bg-purple-glow/5",
  "cyber-blue": "text-cyber-blue border-cyber-blue/30 hover:border-cyber-blue/60 hover:bg-cyber-blue/5",
  "gold-accent": "text-gold-accent border-gold-accent/30 hover:border-gold-accent/60 hover:bg-gold-accent/5",
};

const headerColorMap = {
  "green-lighter": "text-green-lighter",
  "purple-glow": "text-purple-glow",
  "cyber-blue": "text-cyber-blue",
  "gold-accent": "text-gold-accent",
};

const badgeMap = {
  "green-lighter": "border-green-lighter/40 text-green-lighter bg-green-lighter/5",
  "purple-glow": "border-purple-glow/40 text-purple-glow bg-purple-glow/5",
  "cyber-blue": "border-cyber-blue/40 text-cyber-blue bg-cyber-blue/5",
  "gold-accent": "border-gold-accent/40 text-gold-accent bg-gold-accent/5",
};

const Stack = () => {
  return (
    <section id="stack" className="relative bg-gray0 border-t border-terminal-border">
      <div className="absolute inset-0 bg-grid-lines opacity-30 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <SectionHeader
          index="03"
          label="stack"
          title="Tools I reach for first."
          accent="cyber-blue"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              className="rounded-md border border-terminal-border bg-gray1/40 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className={`uppercase tracking-wider ${headerColorMap[group.accent]}`}>
                    {group.title}
                  </span>
                  {group.badge && (
                    <span className={`text-tiny px-1.5 py-0.5 rounded border ${badgeMap[group.accent]} uppercase tracking-wider`}>
                      {group.badge}
                    </span>
                  )}
                  <span className="text-gray2">/</span>
                  <span className="text-gray2">{group.items.length} packages</span>
                </div>
                <span className="font-mono text-tiny text-gray2 opacity-60">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`inline-flex items-center gap-2 font-mono text-xs px-2.5 py-1.5 rounded border bg-terminal-bg/50 transition-all duration-200 ${accentMap[group.accent]}`}
                  >
                    <span className="text-white">{item.name}</span>
                    <span className="text-gray2">{item.version}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 font-mono text-tiny text-gray2"
        >
          // node and typescript across the stack. python where it earns its keep.
        </motion.p>
      </div>
    </section>
  );
};

export default Stack;
