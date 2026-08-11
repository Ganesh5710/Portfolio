import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h2 className="text-xs font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 lg:sr-only select-none">
        <span>05. EDUCATION</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Education entry structured similarly to Experience/Projects */}
      <div className="group/list">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-5 rounded-xl border border-transparent transition-all duration-300 group/item group-hover/list:opacity-50 hover:!opacity-100 ${
            isDark 
              ? 'hover:bg-slate-800/25 hover:border-slate-800/40 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg' 
              : 'hover:bg-white hover:shadow-lg hover:border-slate-200/50'
          }`}
        >
          {/* Left Column (3 cols) */}
          <div className="md:col-span-3 text-[10px] font-sans text-gray-500 dark:text-slate-500 tracking-wider font-bold pt-1 select-none">
            2023 — 2027
          </div>

          {/* Right Column (9 cols) */}
          <div className="md:col-span-9 space-y-2.5">
            <div>
              <a
                href="http://www.acem.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-baseline gap-1 font-bold text-sm hover:text-[var(--color-accent-teal)] dark:hover:text-[var(--color-accent-teal)] transition-colors focus:ring-1 focus:ring-[var(--color-accent-teal)] outline-none rounded group/link ${
                  isDark ? 'text-slate-200' : 'text-slate-900'
                }`}
              >
                <span>
                  B.Tech in Computer Science Engineering · <span className="font-medium text-gray-500 dark:text-gray-400">Aditya College of Engineering</span>
                </span>
                <ArrowUpRight 
                  size={14} 
                  className="inline-block shrink-0 transition-transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" 
                />
              </a>
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded font-sans text-xs font-semibold border ${
              isDark 
                ? 'bg-teal-400/10 text-teal-300 border-transparent' 
                : 'bg-indigo-400/10 text-indigo-800 border-transparent'
            }`}>
              CGPA SCORE: 73.7%
            </div>

            <p className="text-xs text-gray-600 dark:text-slate-400 font-sans font-light leading-relaxed">
              Pursuing deep studies in Advanced Algorithms, Database Management Systems, and Software Architectures. Building practical full-stack projects alongside academic research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
