import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code, Box, Settings, Cpu } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "Languages",
    icon: <Code size={16} />,
    items: ["Python", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks",
    icon: <Box size={16} />,
    items: ["React", "Tailwind CSS", "Express", "Node.js"]
  },
  {
    category: "AI & Data",
    icon: <Cpu size={16} />,
    items: ["LangChain", "Ollama", "Pandas", "NumPy", "Streamlit"]
  },
  {
    category: "Tools & Databases",
    icon: <Settings size={16} />,
    items: ["PostgreSQL", "Supabase", "Firebase", "Git", "GitHub", "VS Code"]
  }
];

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h2 className="text-xs font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 lg:sr-only select-none">
        <span>04. SKILLS</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILLS_DATA.map((cat, ci) => (
          <div 
            key={ci} 
            className={`border rounded-xl overflow-hidden flex flex-col font-mono text-[10px] ${
              isDark ? 'border-slate-800 bg-slate-900/20' : 'border-slate-200 bg-slate-50/50'
            }`}
          >
            {/* Header */}
            <div className="bg-black/5 dark:bg-white/5 border-b blueprint-border px-4 py-3 flex items-center gap-2 select-none">
              <span className="text-gray-500">{cat.icon}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-200' : 'text-slate-900'}`}>
                {cat.category}
              </span>
            </div>

            {/* List */}
            <div className="p-4 flex flex-wrap gap-2 flex-grow select-text">
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
