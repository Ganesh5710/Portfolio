import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PROJECTS_DATA = [
  {
    title: "Skillbrix – Online Examination Portal",
    image: "/images/skillbrix.jpg",
    description: "Engineered a high-concurrency online examination portal featuring real-time proctoring telemetry. Integrates WebSockets to actively monitor webcam gaze coordinates and tab focus loss events. Built a high-speed client-side ingestion pipeline (using SheetJS) that parses 2,000+ quiz questions in under 2 seconds, alongside database triggers that compile and evaluate grading metrics in under 15ms to eliminate network latency.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/Ganesh5710/Skillbrix",
    demo: "#",
    metrics: [
      { label: "LATENCY", value: "~20ms" },
      { label: "PARSER RATE", value: "2,000+ rows/s" },
      { label: "DB EVALUATION", value: "<15ms" }
    ]
  },
  {
    title: "StateBot Pro – Autonomous CSV Data Analyst",
    image: "/images/statebot.jpg",
    description: "Developed an autonomous conversational analyst powered by LangChain and local Ollama (Llama 3) models. Implemented a robust 4-stage state-machine dialogue manager that handles schema mapping, secure SQL query generation, dry-run validations, and Streamlit visualization outputs. Supports secure offline CSV processing for datasets up to 50MB, generating dynamic insights and data charts via natural language queries.",
    tech: ["Python", "LangChain", "Ollama", "Streamlit", "Pandas"],
    github: "https://github.com/Ganesh5710/StateBotPro",
    demo: "#",
    metrics: [
      { label: "LLM RESPONSE", value: "~1.2s" },
      { label: "CONVERSATION STATES", value: "4 stages" },
      { label: "MAX CSV SIZE", value: "50MB" }
    ]
  }
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title - Hidden on Desktop */}
      <h2 className="text-sm font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 select-none lg:hidden">
        <span>03. PROJECTS</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Projects List */}
      <div className="space-y-6 group/list">
        {PROJECTS_DATA.map((proj, index) => (
          <article
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-xl border border-transparent transition-all duration-300 group/item group-hover/list:opacity-50 hover:!opacity-100 ${
              isDark 
                ? 'hover:bg-slate-800/25 hover:border-slate-800/40 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg' 
                : 'hover:bg-white hover:shadow-lg hover:border-slate-200/50'
            }`}
          >
            {/* Left Thumbnail (3 cols) */}
            <div className="md:col-span-3 shrink-0 select-none">
              <div className="aspect-[16/9] w-full max-w-[150px] md:max-w-none rounded-lg overflow-hidden border border-slate-750/20 dark:border-slate-800/50 bg-black/10 dark:bg-white/5 relative">
                <Image 
                  src={proj.image} 
                  alt={`${proj.title} preview screenshot`}
                  width={200}
                  height={112}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Details (9 cols) */}
            <div className="md:col-span-9 space-y-3">
              <div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-baseline gap-1 font-bold text-base hover:text-[var(--color-accent-teal)] dark:hover:text-[var(--color-accent-teal)] transition-colors focus:ring-1 focus:ring-[var(--color-accent-teal)] outline-none rounded group/link ${
                    isDark ? 'text-slate-200' : 'text-slate-900'
                  }`}
                >
                  <span>{proj.title}</span>
                  <ArrowUpRight 
                    size={16} 
                    className="inline-block shrink-0 transition-transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" 
                  />
                </a>
              </div>

              {/* Description - Increased to text-sm */}
              <p className="text-sm text-gray-655 dark:text-slate-400 font-sans font-light leading-relaxed">
                {proj.description}
              </p>

              {/* Metrics dashboard - text-xs */}
              <div className="grid grid-cols-3 gap-2 bg-black/[0.02] dark:bg-white/[0.02] border border-dashed blueprint-border rounded p-2.5 select-none font-mono text-[10px]">
                {proj.metrics.map((metric, mi) => (
                  <div key={mi} className="space-y-0.5">
                    <div className="text-gray-500 truncate">{metric.label}</div>
                    <div className="font-bold text-[var(--color-accent-teal)]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack Pills (text-xs) */}
              <div className="flex flex-wrap gap-1.5 pt-2 select-none">
                {proj.tech.map((tech, i) => (
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
