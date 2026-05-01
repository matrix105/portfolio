import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-gray0 border-t border-terminal-border"
    >
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-terminal-border bg-gray1/40 overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-terminal-border bg-terminal-bg/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-60" aria-hidden />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-60" aria-hidden />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-60" aria-hidden />
              <span className="ml-3 font-mono text-tiny text-gray2">contact.sh</span>
            </div>
            <span className="font-mono text-tiny text-gray2">zsh</span>
          </div>

          <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-green-lighter">marwan@tourky</span>
                <span className="text-gray2">:</span>
                <span className="text-cyber-blue">~</span>
                <span className="text-gray2">$ </span>
                <span className="text-white">echo $STATUS</span>
              </div>
              <div className="text-gray2 pl-2 border-l border-terminal-border">
                Available for new consulting work.
              </div>
              <div className="pt-3">
                <span className="text-green-lighter">marwan@tourky</span>
                <span className="text-gray2">:</span>
                <span className="text-cyber-blue">~</span>
                <span className="text-gray2">$ </span>
                <span className="text-white">echo $EMAIL</span>
              </div>
              <a
                href="mailto:contact@marwant.me"
                className="block text-base sm:text-lg text-green-lighter hover:underline pl-2 border-l border-terminal-border break-all"
              >
                contact@marwant.me
              </a>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="mailto:contact@marwant.me"
                className="self-start md:self-end inline-flex items-center gap-2 px-4 py-2.5 rounded bg-green-lighter text-gray0 font-mono text-sm font-semibold hover:shadow-glow transition-all duration-300"
              >
                <FaEnvelope />
                start a conversation
              </a>
              <ul className="flex items-center gap-3 text-gray2">
                <li>
                  <a
                    href="https://github.com/matrix105"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hover:text-green-lighter transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/marwantourky/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-green-lighter transition-colors"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/matrix105"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="hover:text-green-lighter transition-colors"
                  >
                    <FaTelegramPlane className="text-lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 font-mono text-tiny text-gray2">
          <span>
            © {year} marwan tourky · built with next, tailwind, framer-motion
          </span>
          <a
            href="https://partnernetwork.ionos.it/partner/marwan.tourky?origin=PartnerBadge"
            rel="nofollow"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src="https://images-2.partnerportal.ionos.it/items/96018c73-4144-48e7-91cd-74d1c9a88028/profiles/3cdbcdb6-396d-4e50-b823-f9a8ca65f58e/badges/normal_blue_eco"
              alt="IONOS Partner"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
