import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";
import LangSwitcher from "../LangSwitcher";

const Header = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "stack", href: "#stack" },
    { key: "work", href: "#work" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-30 backdrop-blur-md bg-gray0/70 border-b border-terminal-border"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-3 md:px-10">
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Marwan Tourky · home"
          dir="ltr"
        >
          <span className="font-mono text-sm">
            <span className="text-green-lighter">marwan</span>
            <span className="text-gray2">@</span>
            <span className="text-cyber-blue">tourky</span>
            <span className="text-gray2">:</span>
            <span className="text-purple-glow">~</span>
            <span className="text-gray2 ml-1">$</span>
          </span>
          <span className="hidden xm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-green-lighter/30 text-green-lighter font-mono text-tiny">
            <span className="w-1.5 h-1.5 rounded-full bg-green-lighter animate-pulse" aria-hidden />
            {t("header.available")}
          </span>
        </a>

        <nav className="order-last w-full xm:order-none xm:w-auto">
          <ul className="flex items-center justify-center gap-5 font-mono text-xs">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray2 hover:text-green-lighter transition-colors"
                >
                  {t(`header.nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="https://www.linkedin.com/in/marwantourky/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray2 hover:text-green-lighter transition-colors"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://github.com/matrix105"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray2 hover:text-green-lighter transition-colors"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
