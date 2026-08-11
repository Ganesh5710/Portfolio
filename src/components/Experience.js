import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const EXPERIENCE_DATA = [
  {
    role: "Web Developer Intern",
    company: "Enkonix Software Services",
    link: "https://enkonix.com",
    period: "MAY — JUL 2026",
    bullets: [
      <>Engineered <span className="font-semibold text-slate-900 dark:text-slate-200">Skillbrix</span>, an online examination portal featuring live WebSocket telemetry tracking webcam gaze and tab focus signals.</>,
      <>Designed a responsive <span className="font-semibold text-slate-900 dark:text-slate-200">3D perspective dashboard</span> with custom mouse-gaze tilt interactions.</>,
      <>Built a high-performance client-side parsing pipeline to import assessment templates in seconds.</>
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets", "Tailwind CSS", "SheetJS"]
  },
  {
    role: "Python Development Intern",
    company: "Infotact Solutions",
    link: "https://infotact.in",
    period: "DEC 2025 — MAR 2026",
    bullets: [
      <>Built AI and data analytics solutions using <span className="font-semibold text-slate-900 dark:text-slate-200">Python</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">LangChain</span>, and Ollama.</>,
      <>Integrated Streamlit reporting dashboards and automated document export pipelines.</>,
      <>Worked with visualization libraries including Matplotlib, Seaborn, and ReportLab.</>
    ],
    stack: ["Python", "Pandas", "NumPy", "LangChain", "Ollama", "Streamlit", "ReportLab"]
  }
];

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title - Hidden on Desktop */}
      <h2 className="text-sm font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 select-none lg:hidden">
        <span>02. EXPERIENCE</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Experience List with Container Gap */}
      <div className="flex flex-col gap-12 lg:gap-16 group/list">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="w-full">
            <div
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-6 rounded-xl border border-transparent transition-all duration-300 group/item group-hover/list:opacity-50 hover:!opacity-100 ${
                isDark 
                  ? 'hover:bg-slate-800/25 hover:border-slate-800/40 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg' 
                  : 'hover:bg-white hover:shadow-lg hover:border-slate-200/50'
              }`}
            >
              {/* Left Column - Dates */}
              <div className="md:col-span-3 text-xs font-sans text-gray-500 dark:text-slate-500 tracking-wider font-bold pt-1 select-none">
                {exp.period}
              </div>

              {/* Right Column - Work Details */}
              <div className="md:col-span-9 space-y-3">
                <div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-baseline gap-1 font-bold text-base hover:text-[var(--color-accent-teal)] dark:hover:text-[var(--color-accent-teal)] transition-colors focus:ring-1 focus:ring-[var(--color-accent-teal)] outline-none rounded group/link ${
                      isDark ? 'text-slate-200' : 'text-slate-900'
                    }`}
                  >
                    <span>
                      {exp.role} · <span className="font-medium text-gray-500 dark:text-gray-400">{exp.company}</span>
                    </span>
                    <ArrowUpRight 
                      size={16} 
                      className="inline-block shrink-0 transition-transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" 
                    />
                  </a>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc pl-4 space-y-2 text-sm text-gray-650 dark:text-slate-400 font-sans font-light leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 select-none">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full font-sans text-xs font-semibold border ${
                        isDark 
                          ? 'bg-teal-400/10 text-teal-300 border-transparent' 
                          : 'bg-indigo-400/10 text-indigo-800 border-transparent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
