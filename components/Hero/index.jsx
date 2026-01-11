import React from "react";

import { FaGithub, FaPython, FaBrain, FaRocket } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNuxtdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";
import { AiFillRobot } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-3 m-auto md:px-10 md:py-5 min-h-screen relative overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-lighter rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-glow rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyber-blue rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-lighter rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="flex flex-col items-start p-4 leading-snug lg:w-1/2 lg:p-12 space-y-6 z-10">
        {/* Badge */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 text-xs font-bold rounded-sm text-gray1 bg-green-lighter">
            <AiFillRobot className="mr-1" />
            AI Software Engineer
          </span>
          <span className="inline-block px-3 py-1 text-xs rounded-sm text-green-lighter border border-green-lighter border-opacity-50">
            System Architect
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-gray2">Forging the Future with</span>
          <br />
          <span className="text-green-lighter">Artificial Intelligence</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl text-white">
          I'm <span className="border-b-2 border-green-lighter">Marwan Tourky</span>
        </h2>

        {/* Description */}
        <p className="text-base text-gray2 max-w-lg leading-relaxed">
          I architect intelligent systems and craft digital experiences that transform businesses.
          From <span className="text-green-lighter">AI-powered solutions</span> to stunning web applications,
          I build tools that <span className="text-green-lighter">elevate communities</span> and
          drive <span className="text-green-lighter">exponential growth</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            className="inline-flex items-center px-6 py-3 font-bold rounded-sm bg-green-lighter text-gray1 hover:bg-opacity-90 transition-all duration-300 hover:shadow-glow"
            href="mailto:contact@marwant.me"
          >
            <FaRocket className="mr-2" />
            Let's Build Together
          </a>
          <a
            className="inline-flex items-center px-6 py-3 font-bold border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter transition-all duration-300"
            href="#about"
          >
            <FaBrain className="mr-2" />
            Explore My Work
          </a>
        </div>
      </div>

      {/* Tech Stack Display */}
      <div className="flex flex-col items-center justify-center px-2 py-8 lg:w-1/2 z-10">
        {/* Central AI Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-green-lighter opacity-20 blur-xl rounded-full"></div>
          <SiOpenai className="text-8xl text-green-lighter relative z-10" />
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center group">
            <FaPython className="text-5xl text-gray2 group-hover:text-green-lighter transition-colors duration-300" />
            <span className="text-xs text-gray2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
          </div>
          <div className="flex flex-col items-center group">
            <SiNuxtdotjs className="text-5xl text-gray2 group-hover:text-green-lighter transition-colors duration-300" />
            <span className="text-xs text-gray2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Nuxt</span>
          </div>
          <div className="flex flex-col items-center group">
            <BiLogoMongodb className="text-5xl text-gray2 group-hover:text-green-lighter transition-colors duration-300" />
            <span className="text-xs text-gray2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">MongoDB</span>
          </div>
          <div className="flex flex-col items-center group">
            <SiTailwindcss className="text-5xl text-gray2 group-hover:text-green-lighter transition-colors duration-300" />
            <span className="text-xs text-gray2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Tailwind</span>
          </div>
        </div>

        {/* Additional Icons Row */}
        <div className="flex items-center justify-center mt-6 space-x-8">
          <AiFillRobot className="text-4xl text-gray2 opacity-50 hover:opacity-100 hover:text-green-lighter transition-all duration-300" />
          <FaBrain className="text-4xl text-gray2 opacity-50 hover:opacity-100 hover:text-green-lighter transition-all duration-300" />
          <FaGithub className="text-4xl text-gray2 opacity-50 hover:opacity-100 hover:text-green-lighter transition-all duration-300" />
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray2 mt-8 text-center italic">
          "Where Code Meets Intelligence"
        </p>
      </div>
    </div>
  );
};

export default Hero;
