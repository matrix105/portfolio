import React from "react";

const tokenStyles = {
  keyword: "text-purple-glow",
  string: "text-green-lighter",
  number: "text-gold-accent",
  comment: "text-gray2 italic",
  fn: "text-cyber-blue",
  type: "text-cyber-blue",
  variable: "text-white",
  punct: "text-gray2",
  decorator: "text-gold-accent",
  plain: "text-gray2",
};

const Token = ({ type = "plain", children }) => (
  <span className={tokenStyles[type] || tokenStyles.plain}>{children}</span>
);

const CodeBlock = ({
  filename = "agent.py",
  language = "python",
  lines = [],
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden border border-terminal-border bg-terminal-bg shadow-card ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-gray1/60">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-70" aria-hidden />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-70" aria-hidden />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-70" aria-hidden />
          <span className="ml-3 text-xs text-gray2">{filename}</span>
        </div>
        <span className="text-tiny uppercase tracking-wider text-gray2">{language}</span>
      </div>
      <pre className="px-4 py-4 text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none text-gray2 opacity-40 w-6 text-right mr-4 flex-shrink-0">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map((tok, j) => (
                    <Token key={j} type={tok.t}>
                      {tok.v}
                    </Token>
                  ))
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
