import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h2 className="text-xs font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 lg:sr-only select-none">
        <span>06. CONTACT</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      <div className="space-y-4 max-w-md">
        <h3 className={`text-2xl font-extrabold tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
          Get In Touch
        </h3>
        
        <p className="text-sm font-sans font-light leading-relaxed">
          My inbox is always open. Whether you have an internship/job opportunity, a project proposal, or just want to connect — feel free to drop me a message!
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href="mailto:ganeshbathula20@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded border border-[var(--color-accent-teal)] text-[var(--color-accent-teal)] bg-transparent hover:bg-[var(--color-accent-teal-hover)] font-mono text-xs font-bold transition-all focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none"
          >
            Say Hello
          </a>
        </div>

        {/* Technical Directory list (Phone / Address) */}
        <div className="pt-6 border-t border-dashed border-slate-700/30 dark:border-slate-800/50 space-y-1.5 font-mono text-[10px] select-text">
          <div className="flex items-center justify-between text-gray-500">
            <span>EMAIL_TUNNEL:</span>
            <a href="mailto:ganeshbathula20@gmail.com" className="hover:underline text-[var(--color-accent-teal)]">
              ganeshbathula20@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>PHONE_ADDRESS:</span>
            <a href="tel:+917981877584" className="hover:underline text-[var(--color-accent-teal)]">
              +91 7981877584
            </a>
          </div>
        </div>

        {/* Repeated Social Icons using Lucide icons */}
        <div className="pt-4 flex items-center gap-4 select-none">
          <a 
            href="https://github.com/Ganesh5710" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
            aria-label="Visit Ganesh's GitHub profile"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ganeshb57" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
            aria-label="Visit Ganesh's LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:ganeshbathula20@gmail.com"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
            aria-label="Send email to Ganesh"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
