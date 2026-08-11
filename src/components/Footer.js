import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="p-8 border-t border-slate-700/20 dark:border-slate-800/40 bg-black/[0.01] dark:bg-white/[0.01] font-mono text-[9px] select-none text-gray-500">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© 2026 Ganesh Bathula. All rights reserved.</span>
          <span className="hidden sm:inline"> // </span>
          <span className="uppercase tracking-wider">React + Next.js App Router</span>
        </div>

        <div className="flex gap-4">
          <a 
            href="#about"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none"
          >
            top.sh
          </a>
          <span>/</span>
          <a 
            href="#projects"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none"
          >
            projects.csv
          </a>
          <span>/</span>
          <a 
            href="#contact"
            className="hover:text-[var(--color-accent-teal)] cursor-pointer focus:underline outline-none"
          >
            contact.ini
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
