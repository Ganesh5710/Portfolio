import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code, Box, Settings, Cpu } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "Languages",
    icon: <Code size={12} className="inline mr-1" />,
    items: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    icon: <Box size={12} className="inline mr-1" />,
    items: ["React", "Tailwind CSS", "Express", "Node.js"]
  },
  {
    category: "AI & Data",
    icon: <Cpu size={12} className="inline mr-1" />,
    items: ["LangChain", "Ollama", "Pandas", "NumPy", "Streamlit"]
  },
  {
    category: "Tools & Databases",
    icon: <Settings size={12} className="inline mr-1" />,
    items: ["PostgreSQL", "Supabase", "Firebase", "Git", "GitHub", "VS Code"]
  }
];

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title - Visible on Desktop */}
      <h2 className="text-xs font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 select-none">
        <span>04. SKILLS</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Skills Grid - Reformatted to align with timeline grid layout (no bulky boxes) */}
      <div className="space-y-2 group/list">
        {SKILLS_DATA.map((cat, ci) => (
          <div 
            key={ci} 
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl border border-transparent transition-all duration-300 group/item group-hover/list:opacity-50 hover:!opacity-100 ${
              isDark 
                ? 'hover:bg-slate-800/25 hover:border-slate-800/40 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg' 
                : 'hover:bg-white hover:shadow-lg hover:border-slate-200/50'
            }`}
          >
            {/* Left Column - Category Title (3 cols) */}
            <div className="md:col-span-3 text-[10px] font-mono text-gray-500 dark:text-slate-500 tracking-wider font-bold pt-2 select-none flex items-center gap-1">
              {cat.icon}
              <span>{cat.category.toUpperCase()}</span>
            </div>

            {/* Right Column - Skills list (9 cols) */}
            <div className="md:col-span-9 flex flex-wrap gap-1.5 select-none">
              {cat.items.map((item, ii) => (
                <span
                  key={ii}
                  className={`px-3 py-1 rounded-full font-sans text-xs font-semibold border ${
                    isDark 
                      ? 'bg-teal-400/10 text-teal-300 border-transparent' 
                      : 'bg-indigo-400/10 text-indigo-800 border-transparent'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
