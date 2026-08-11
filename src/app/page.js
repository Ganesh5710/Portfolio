"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
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
      const scrollPosition = window.scrollY + window.innerHeight * 0.4; // Trigger offset (center viewport)
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
      } else if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 120) {
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
      isDark ? 'bg-[#0a192f] text-slate-400' : 'bg-slate-50 text-slate-650'
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
           * LEFT COLUMN (Sticky & Vertically Centered on Desktop)
           * ==================================================== */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-center select-none shrink-0 z-40">
            {/* Grouped and centered container */}
            <div className="flex flex-col justify-center py-6 lg:py-0 space-y-6 lg:space-y-8">
              
              {/* Header system title & theme toggle */}
              <div className="flex items-center justify-between lg:justify-start lg:gap-4 select-none">
                <span className="font-mono text-sm font-bold text-[var(--color-accent-teal)]">
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

              {/* Bio Details (Increased font size for body matching Brittany Chiang's layout) */}
              <div className="space-y-4">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Ganesh Bathula
                </h1>
                <h2 className={`text-xl sm:text-2xl font-semibold tracking-tight ${isDark ? 'text-slate-200' : 'text-slate-850'}`}>
                  Full Stack & AI Developer
                </h2>
                <p className="text-base font-light leading-relaxed max-w-sm text-gray-500 dark:text-slate-400">
                  I build real-time web applications, proctoring platforms, and autonomous AI data pipelines.
                </p>
              </div>

              {/* Resume download */}
              <div className="pt-1">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[var(--color-accent-teal)] text-[var(--color-accent-teal)] bg-transparent hover:bg-[var(--color-accent-teal-hover)] font-mono text-sm font-bold transition-all focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none"
                >
                  <Download size={15} /> Download Resume
                </a>
              </div>

              {/* Mobile Horizontal Nav Menu */}
              <nav className="flex lg:hidden flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest pt-2 select-none">
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

              {/* Desktop Navigation Links (Increased font size to match reference site) */}
              <nav className="hidden lg:flex flex-col gap-2 font-mono text-sm pt-4 select-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                      className="group flex items-center py-3.5 cursor-pointer outline-none"
                    >
                      {/* Line expands and highlights in Teal on active state */}
                      <span className={`mr-4 h-px transition-all duration-300 ${
                        isActive 
                          ? 'w-20 bg-[var(--color-accent-teal)]' 
                          : 'w-10 bg-slate-400 dark:bg-slate-650 group-hover:w-20 group-hover:bg-[var(--color-accent-teal)] group-focus-visible:w-20 group-focus-visible:bg-[var(--color-accent-teal)]'
                      }`} />
                      
                      <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive 
                          ? 'text-[var(--color-accent-teal)] font-extrabold' 
                          : 'text-gray-550 dark:text-slate-500 group-hover:text-[var(--color-accent-teal)] group-focus-visible:text-[var(--color-accent-teal)]'
                      }`}>
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Social handles */}
              <div className="pt-4 flex items-center gap-6 select-none">
                <a 
                  href="https://github.com/Ganesh5710" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                  aria-label="Visit Ganesh's GitHub profile"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ganeshb57" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                  aria-label="Visit Ganesh's LinkedIn profile"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:ganeshbathula20@gmail.com"
                  className="text-gray-550 hover:text-slate-950 dark:hover:text-slate-200 transition-colors focus:ring-2 focus:ring-[var(--color-accent-teal)] outline-none rounded p-1"
                  aria-label="Send email to Ganesh"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </header>

          {/* ====================================================
           * RIGHT COLUMN (Full-Screen Sections - spacious and centered)
           * ==================================================== */}
          <main className="lg:w-[52%] flex flex-col relative z-20">
            <section id="about" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0 scroll-mt-24">
              <About />
            </section>
            <section id="experience" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0 scroll-mt-24">
              <Experience />
            </section>
            <section id="projects" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0 scroll-mt-24">
              <Projects />
            </section>
            <section id="contact" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-0 scroll-mt-24">
              <Contact />
            </section>
            <Footer />
          </main>
          
        </div>
      </div>
    </div>
  );
}
