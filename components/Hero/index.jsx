import React from "react";

import { FaGithub, FaNode, FaReact, FaVuejs, FaWordpress } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiStrapi, SiNuxtdotjs } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-3 m-auto md:px-10 md:py-5">
      <div className="flex flex-col items-start p-4 leading-snug lg:w-1/2 lg:p-12 space-y-5">
        <span className="inline-block w-auto px-2 py-1 text-xs text-center rounded-sm text-gray1 bg-green-lighter">
          Software Engineer
        </span>
        <h2 className="text-3xl">Hello, I’m Marwan Tourky, a Software Engineer and Fullstack Developer</h2>
        <p className="text-sm text-gray2">I enjoy building Web Applications.</p>
        <a
          className="px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter"
          href="mailto:contact@marwant.me"
        >
          Say hi!
        </a>
      </div>

      <div className="flex items-center justify-end px-2 py-4 lg:-mt-10 lg:w-1/2 space-x-8 xl:p-12"></div>
      <div className="flex items-center justify-end px-2 py-4 lg:-mt-10 lg:w-1/2 space-x-8 xl:p-12">
        <FaNode className="text-6xl opacity-25 xm:text-8xl" />
        <FaReact className="text-6xl opacity-25 xm:text-8xl" />
        <FaVuejs className="text-6xl opacity-25 xm:text-8xl" />
        <BiLogoMongodb className="text-6xl opacity-25 xm:text-8xl" />
      </div>
      <div className="flex items-center justify-end px-2 py-4 lg:-mt-10 lg:w-1/2 space-x-8 xl:p-12">
        <FaWordpress className="text-6xl opacity-25 xm:text-8xl" />
        <SiStrapi className="text-6xl opacity-25 xm:text-8xl" />
        <SiNuxtdotjs className="text-6xl opacity-25 xm:text-8xl" />
        <FaGithub className="text-6xl opacity-25 xm:text-8xl" />
      </div>
    </div>
  );
};

// button 'say hi'
// <a className='px-4 py-2 mt-5 border-2 rounded-sm hover:bg-green-lighter hover:text-gray1 text-green-lighter border-green-lighter' href='#'>Say hi!</a>

export default Hero;
