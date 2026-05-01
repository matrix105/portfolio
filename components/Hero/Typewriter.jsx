import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const Typewriter = ({ text, speed = 38, startDelay = 600, className = "" }) => {
  const reduce = useReducedMotion();
  const [out, setOut] = useState(reduce ? text : "");
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay, reduce]);

  return (
    <span className={className}>
      {out}
      <span
        aria-hidden
        className={`inline-block w-[2px] h-[1em] align-middle ml-1 bg-green-lighter ${
          done ? "animate-blink" : ""
        }`}
      />
    </span>
  );
};

export default Typewriter;
