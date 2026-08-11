import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Section Title - Hidden on Desktop */}
      <h2 className="text-sm font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 select-none lg:hidden">
        <span>04. CONTACT</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      <div className="space-y-4 sm:space-y-5 max-w-md">
        <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
          Get In Touch
        </h3>
        
        <p className="text-sm sm:text-base font-sans font-light leading-relaxed text-gray-650 dark:text-slate-400">
          My inbox is always open. Whether you have an internship/job opportunity, a project proposal, or just want to connect — feel free to drop me a message!
        </p>

        {/* Action Button — full width on mobile for easy tapping */}
        <div className="pt-1 sm:pt-2">
          <a
            href="mailto:ganeshbathula20@gmail.com"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded border border-[var(--color-accent-teal)] text-[var(--color-accent-teal)] bg-transparent hover:bg-[var(--color-accent-teal-hover)] font-mono text-sm font-bold transition-all focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none min-h-[48px]"
          >
            Say Hello
          </a>
        </div>

        {/* Technical Directory list — stack on very small screens */}
        <div className="pt-4 sm:pt-6 border-t border-dashed border-slate-700/30 dark:border-slate-800/50 space-y-2 font-mono text-xs select-text">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 text-gray-500">
            <span>EMAIL_TUNNEL:</span>
            <a href="mailto:ganeshbathula20@gmail.com" className="hover:underline text-[var(--color-accent-teal)] font-medium break-all">
              ganeshbathula20@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 text-gray-500">
            <span>PHONE_ADDRESS:</span>
            <a href="tel:+917981877584" className="hover:underline text-[var(--color-accent-teal)] font-medium">
              +91 7981877584
            </a>
          </div>
        </div>

        {/* Repeated Social Icons — enlarged tap targets */}
        <div className="pt-3 sm:pt-4 flex items-center gap-3 sm:gap-5 select-none">
          <a 
            href="https://github.com/Ganesh5710" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-2.5 sm:p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Visit Ganesh's GitHub profile"
          >
            <Github size={22} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ganeshb57" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-2.5 sm:p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Visit Ganesh's LinkedIn profile"
          >
            <Linkedin size={22} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="mailto:ganeshbathula20@gmail.com"
            className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-2.5 sm:p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Send email to Ganesh"
          >
            <Mail size={22} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
