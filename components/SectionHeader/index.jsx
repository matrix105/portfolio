import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ index, label, title, accent = "green-lighter" }) => {
  const accentMap = {
    "green-lighter": "text-green-lighter",
    "purple-glow": "text-purple-glow",
    "cyber-blue": "text-cyber-blue",
    "gold-accent": "text-gold-accent",
  };
  const dotMap = {
    "green-lighter": "bg-green-lighter",
    "purple-glow": "bg-purple-glow",
    "cyber-blue": "bg-cyber-blue",
    "gold-accent": "bg-gold-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-2 mb-10"
    >
      <div className="flex items-center gap-3 text-xs sm:text-sm font-mono">
        <span className={`inline-flex items-center gap-2 ${accentMap[accent]}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotMap[accent]}`} aria-hidden />
          <span className="opacity-70">{index}</span>
        </span>
        <span className="text-gray2">// {label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
