import React from "react";

const TerminalLine = ({
  prompt = "~",
  user = "marwan",
  host = "portfolio",
  command,
  output,
  className = "",
}) => {
  return (
    <div className={`font-mono text-xs sm:text-sm leading-relaxed ${className}`}>
      <div className="flex flex-wrap items-center gap-x-2">
        <span className="text-green-lighter">{user}@{host}</span>
        <span className="text-gray2">:</span>
        <span className="text-cyber-blue">{prompt}</span>
        <span className="text-gray2">$</span>
        <span className="text-white">{command}</span>
      </div>
      {output && (
        <div className="text-gray2 mt-1 pl-2 border-l border-terminal-border">
          {output}
        </div>
      )}
    </div>
  );
};

export default TerminalLine;
