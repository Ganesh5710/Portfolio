import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="p-4 sm:p-6 md:p-8 border-t border-slate-700/20 dark:border-slate-800/40 bg-black/[0.01] dark:bg-white/[0.01] font-mono text-[9px] sm:text-[10px] select-none text-gray-500">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="text-center sm:text-left">
          <span>© 2026 Ganesh Bathula. All rights reserved.</span>
          <span className="hidden sm:inline"> // </span>
          <br className="sm:hidden" />
          <span className="uppercase tracking-wider">React + Next.js App Router</span>
        </div>

        <div className="flex gap-4">
          <a 
            href="#about"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none py-2 min-h-[44px] flex items-center"
          >
            top.sh
          </a>
          <span className="flex items-center">/</span>
          <a 
            href="#projects"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none py-2 min-h-[44px] flex items-center"
          >
            projects.csv
          </a>
          <span className="flex items-center">/</span>
          <a 
            href="#contact"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none py-2 min-h-[44px] flex items-center"
          >
            contact.ini
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
