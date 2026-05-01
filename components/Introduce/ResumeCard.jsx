import React from "react";
import { motion } from "framer-motion";

const accentClasses = {
  "green-lighter": {
    text: "text-green-lighter",
    bg: "bg-green-lighter",
    border: "hover:border-green-lighter/50",
    glow: "hover:shadow-glow-soft",
  },
  "purple-glow": {
    text: "text-purple-glow",
    bg: "bg-purple-glow",
    border: "hover:border-purple-glow/50",
    glow: "hover:shadow-purple-glow",
  },
  "cyber-blue": {
    text: "text-cyber-blue",
    bg: "bg-cyber-blue",
    border: "hover:border-cyber-blue/50",
    glow: "hover:shadow-blue-glow",
  },
};

const ResumeCard = ({ card, index = 0 }) => {
  const accent = accentClasses[card.accent || "green-lighter"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative px-6 py-5 rounded-md bg-gray1/60 border border-terminal-border ${accent.border} ${accent.glow} transition-all duration-300`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className={`font-mono text-tiny uppercase tracking-wider ${accent.text}`}>
            {card.tag}
          </span>
          <h3 className="text-base sm:text-lg font-semibold text-white">{card.title}</h3>
        </div>
        <div className={`text-2xl ${accent.text} opacity-80 group-hover:opacity-100 transition`}>
          {card.icon()}
        </div>
      </div>
      <p className="mt-3 text-xs sm:text-sm text-gray2 leading-relaxed">{card.description}</p>
      {card.tools && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {card.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-tiny px-2 py-0.5 rounded border border-terminal-border text-gray2"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ResumeCard;
