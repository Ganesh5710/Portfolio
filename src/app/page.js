"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Pure scroll listener for scroll spying
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger offset
      let currentSection = 'about';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }

      // Force boundary highlights
      if (window.scrollY < 80) {
        currentSection = 'about';
      } else if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger scroll check on mount and after layout settles
    handleScroll();
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Mouse spotlight glow tracking
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  // Smooth scroll handler fallback for anchors
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-250 ${
      isDark ? 'bg-[#0a192f] text-slate-400' : 'bg-slate-50 text-slate-600'
    }`}>
      {/* Brittany Chiang style: Subtle, rich blue-teal radial spotlight */}
      {!reducedMotion && (
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
          style={{
            background: isDark 
              ? `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
              : `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.05), transparent 80%)`
          }}
        />
      )}

      {/* Main Grid Wrapper */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* ====================================================
           * LEFT COLUMN (Sticky / Fixed Sidebar on Desktop)
           * ==================================================== */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24 select-none shrink-0 z-40">
            <div className="space-y-6">
              {/* Header system title & theme toggle */}
              <div className="flex items-center justify-between lg:justify-start lg:gap-4 select-none">
                <span className="font-mono text-xs font-bold text-[var(--color-accent-teal)]">
                  GB_SYSTEM_V3.0
                </span>
                
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg border border-slate-700/20 dark:border-slate-800/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all outline-none focus:ring-2 focus:ring-[var(--color-accent-teal)]"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-slate-700" />}
                </button>
              </div>

              {/* Bio Details */}
              <div className="space-y-3">
                <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Ganesh Bathula
                </h1>
                <h2 className={`text-lg sm:text-xl font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  Full Stack & AI Developer
                </h2>
                <p className="text-sm font-light leading-relaxed max-w-xs text-gray-500 dark:text-slate-450">
                  I build real-time web applications, proctoring platforms, and autonomous AI data pipelines.
                </p>
              </div>

              {/* Resume download (styled as clean text arrow link near the top) */}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className={`inline-flex items-baseline gap-1 font-mono text-xs font-semibold hover:text-[var(--color-accent-teal)] transition-colors group/resume outline-none ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  <span>View Full Résumé</span>
                  <ArrowUpRight 
                    size={14} 
                    className="inline-block shrink-0 transition-transform group-hover/resume:translate-x-1 group-hover/resume:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" 
                  />
                </a>
              </div>

              {/* Mobile Horizontal Nav Menu */}
              <nav className="flex lg:hidden flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-widest pt-4 select-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                      className={`cursor-pointer transition-colors duration-200 py-1 outline-none ${
                        isActive 
                          ? 'text-[var(--color-accent-teal)] font-bold' 
                          : 'text-gray-500 hover:text-slate-900 dark:hover:text-slate-250'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex flex-col gap-1 font-mono text-xs pt-10 select-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                      className="group flex items-center py-2.5 cursor-pointer outline-none"
                    >
                      {/* Line expands and highlights on active/hover */}
                      <span className={`mr-4 h-px transition-all duration-300 ${
                        isActive 
                          ? 'w-16 bg-slate-950 dark:bg-slate-200' 
                          : 'w-8 bg-slate-400 dark:bg-slate-650 group-hover:w-16 group-hover:bg-slate-950 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-950 dark:group-focus-visible:bg-slate-200'
                      }`} />
                      
                      <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive 
                          ? 'text-slate-950 dark:text-slate-200 font-extrabold' 
                          : 'text-gray-500 group-hover:text-slate-950 dark:group-hover:text-slate-200 group-focus-visible:text-slate-950 dark:group-focus-visible:text-slate-200'
                      }`}>
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Social handles bottom row */}
            <div className="pt-10 lg:pt-0 flex items-center gap-5 select-none">
              <a 
                href="https://github.com/Ganesh5710" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                aria-label="Visit Ganesh's GitHub profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ganeshb57" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                aria-label="Visit Ganesh's LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ganeshbathula20@gmail.com"
                className="text-gray-500 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                aria-label="Send email to Ganesh"
              >
                <Mail size={20} />
              </a>
            </div>
          </header>

          {/* ====================================================
           * RIGHT COLUMN (Scrollable Content Sections - spacious)
           * ==================================================== */}
          <main className="lg:w-[52%] lg:py-24 flex flex-col relative z-20">
            <section id="about" className="pb-16 lg:pb-28 scroll-mt-24">
              <About />
            </section>
            <section id="experience" className="pb-16 lg:pb-28 scroll-mt-24">
              <Experience />
            </section>
            <section id="projects" className="pb-16 lg:pb-28 scroll-mt-24">
              <Projects />
            </section>
            <section id="skills" className="pb-16 lg:pb-28 scroll-mt-24">
              <Skills />
            </section>
            <section id="education" className="pb-16 lg:pb-28 scroll-mt-24">
              <Education />
            </section>
            <section id="contact" className="pb-16 lg:pb-28 scroll-mt-24">
              <Contact />
            </section>
            <Footer />
          </main>
          
        </div>
      </div>
    </div>
  );
}
