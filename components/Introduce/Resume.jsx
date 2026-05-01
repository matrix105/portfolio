import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
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
        <span>// what i do</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
        Engineering at the seam between{" "}
        <span className="text-purple-glow">agents</span> and{" "}
        <span className="text-cyber-blue">production</span>.
      </h2>
      <p className="mt-5 text-sm text-gray2 leading-relaxed">
        I'm an{" "}
        <span className="text-white">AI software engineer</span> with a research and
        development background. I design system architectures and build the
        software around them — backend, frontend, data layer, and the agentic
        AI components stitched through.
      </p>
      <p className="mt-4 text-sm text-gray2 leading-relaxed">
        Most of my recent work is around{" "}
        <span className="text-white">LLM applications</span> and{" "}
        <span className="text-white">agentic systems</span>: retrieval pipelines,
        agent runtimes, evaluation harnesses, and the production plumbing that
        makes them safe to ship. I work primarily in{" "}
        <span className="text-green-lighter">Node</span> and{" "}
        <span className="text-green-lighter">TypeScript</span> across the stack —
        agent runtimes, services, and Nuxt / Vue front-ends on top. Python comes
        in when the AI work calls for it.
      </p>
      <p className="mt-4 text-sm text-gray2 leading-relaxed">
        I work as a consultant. I take on projects where the architecture isn't
        decided yet, or where it needs to be rethought.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 font-mono text-tiny">
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-purple-glow">~</span> 7y software
        </span>
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-cyber-blue">~</span> 4y ai &amp; agents
        </span>
        <span className="px-2.5 py-1 rounded border border-terminal-border text-gray2">
          <span className="text-green-lighter">~</span> r&amp;d background
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 font-mono text-tiny text-gray2 mb-2">
          <span className="w-1 h-1 rounded-full bg-gold-accent" aria-hidden />
          <span>// credentials</span>
        </div>
        <div className="flex flex-wrap gap-2 font-mono text-tiny">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-gold-accent/30 bg-gold-accent/5 text-white">
            <span className="text-gold-accent">★</span>
            anthropic certified
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
