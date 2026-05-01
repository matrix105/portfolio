import React from "react";
import { motion } from "framer-motion";

const accentMap = {
  "purple-glow": {
    text: "text-purple-glow",
    border: "border-purple-glow/40",
    bg: "bg-purple-glow",
    glow: "hover:shadow-purple-glow",
  },
  "cyber-blue": {
    text: "text-cyber-blue",
    border: "border-cyber-blue/40",
    bg: "bg-cyber-blue",
    glow: "hover:shadow-blue-glow",
  },
  "green-lighter": {
    text: "text-green-lighter",
    border: "border-green-lighter/40",
    bg: "bg-green-lighter",
    glow: "hover:shadow-glow-soft",
  },
};

const WorkCard = ({ project, index = 0, labels }) => {
  const accent = accentMap[project.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative flex flex-col rounded-lg border ${accent.border} bg-gray1/50 hover:bg-gray1/80 transition-all duration-300 ${accent.glow} overflow-hidden`}
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-terminal-border bg-terminal-bg/60">
        <div className="flex items-center gap-2 font-mono text-tiny">
          <span className={`w-1.5 h-1.5 rounded-full ${accent.bg}`} aria-hidden />
          <span className="text-gray2 uppercase tracking-wider">
            {labels.caseLabel} · {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <span className="font-mono text-tiny text-gray2">{project.year}</span>
      </div>

      <div className="flex flex-col p-5 gap-4 flex-1">
        <div>
          <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
          <p className={`mt-1 font-mono text-xs ${accent.text}`} dir="ltr">
            {project.subtitle}
          </p>
        </div>

        <dl className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-gray2">
          <div className="flex gap-3">
            <dt className="font-mono text-tiny uppercase tracking-wider text-gray2/70 w-20 flex-shrink-0 pt-0.5">
              {labels.problem}
            </dt>
            <dd className="leading-relaxed">{project.problem}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="font-mono text-tiny uppercase tracking-wider text-gray2/70 w-20 flex-shrink-0 pt-0.5">
              {labels.approach}
            </dt>
            <dd className="leading-relaxed">{project.approach}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="font-mono text-tiny uppercase tracking-wider text-gray2/70 w-20 flex-shrink-0 pt-0.5">
              {labels.outcome}
            </dt>
            <dd className="leading-relaxed text-white/90">
              {project.outcome.split(/(\b\d+%?\b|~?\d+x\b)/).map((piece, i) =>
                /\b\d+%?\b|~?\d+x\b/.test(piece) ? (
                  <span key={i} className="text-gold-accent font-semibold">
                    {piece}
                  </span>
                ) : (
                  <span key={i}>{piece}</span>
                )
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-4 border-t border-terminal-border flex flex-wrap gap-1.5" dir="ltr">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="font-mono text-tiny px-2 py-0.5 rounded border border-terminal-border text-gray2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;
