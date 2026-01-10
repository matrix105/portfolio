import React from "react";

const Resume = () => {
  return (
    <div className="p-4 md:w-1/2">
      <span className="text-xs text-gray2 uppercase tracking-wider">The Architect Behind the Code</span>
      <h2 className="text-3xl mt-2">
        I'm <span className="border-b-2 border-green-lighter">Marwan Tourky</span>
      </h2>
      <p className="my-5 text-justify text-xm text-gray2 leading-relaxed">
        I'm an <span className="text-green-lighter font-semibold">AI Software Engineer</span> and{" "}
        <span className="text-green-lighter font-semibold">System Architect</span> on a mission to forge
        the future of technology. I build intelligent systems that don't just process data—they{" "}
        <span className="text-green-lighter">think</span>,{" "}
        <span className="text-green-lighter">learn</span>, and{" "}
        <span className="text-green-lighter">evolve</span>.
      </p>
      <p className="my-5 text-justify text-xm text-gray2 leading-relaxed">
        My arsenal includes <span className="text-green-lighter">Python</span> for AI/ML engineering,{" "}
        <span className="text-green-lighter">Nuxt.js</span> for blazing-fast web experiences,{" "}
        <span className="text-green-lighter">MongoDB</span> for flexible data architectures, and{" "}
        <span className="text-green-lighter">Tailwind CSS</span> for pixel-perfect interfaces.
        I craft software, web applications, landing pages, and digital tools that don't just
        solve problems—they <span className="text-white font-semibold">transform businesses</span> and{" "}
        <span className="text-white font-semibold">grow communities</span>.
      </p>
      <p className="my-5 text-justify text-xm text-gray2 leading-relaxed">
        Every line of code I write is a step toward a smarter, more connected world.
      </p>
    </div>
  );
};

export default Resume;
