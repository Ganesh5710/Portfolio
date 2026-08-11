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
           * LEFT COLUMN (STICKY SIDEBAR - VERTICALLY & HORIZONTALLY CENTERED)
           * ==================================================== */}
          <header className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 py-12 px-6 lg:px-12 flex flex-col justify-center items-center max-w-xl select-none shrink-0 z-40 relative">
            <div className="w-full flex flex-col items-center text-center my-auto pt-4">
              {/* 1. Header Info (Tag, Title, Role, Description) */}
              <div className="flex flex-col items-center text-center w-full pb-4">
                <span className="text-teal-400 font-mono text-xs font-semibold tracking-wider mb-3">
                  GB_SYSTEM_V3.0
                </span>
                
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-2">
                  Ganesh Bathula
                </h1>
                
                <h2 className="text-lg sm:text-xl font-medium text-slate-200 mb-4">
                  Full Stack & AI Developer
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  I build real-time web applications, proctoring platforms, and autonomous AI data pipelines.
                </p>
              </div>

              {/* 2. Download Resume Button Wrapper (Explicit vertical padding) */}
              <div className="w-full flex justify-center py-6 select-none">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-teal-400 text-teal-300 font-mono text-xs rounded hover:bg-teal-400/10 transition-all shadow-[0_0_15px_rgba(45,212,191,0.15)]"
                >
                  Download Resume
                </a>
              </div>

              {/* Mobile Horizontal Nav Menu */}
              <nav className="flex lg:hidden flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest py-4 select-none">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                      className={`cursor-pointer transition-colors duration-200 py-1 outline-none ${
                        isActive 
                          ? 'text-teal-300 font-bold' 
                          : 'text-slate-500 hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              {/* 3. Vertical Navigation Wrapper (Explicit padding-top and space-y-6) */}
              <div className="w-full flex justify-center pt-8 pb-4">
                <nav className="hidden lg:flex flex-col space-y-6 font-mono text-sm select-none w-fit mx-auto">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleAnchorClick(e, item.id)}
                        className="group flex items-center cursor-pointer outline-none"
                      >
                        {/* Horizontal line indicator before each section title */}
                        <span className={`mr-4 h-px transition-all duration-300 ${
                          isActive 
                            ? 'w-16 bg-teal-400' 
                            : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-teal-400'
                        }`} />
                        
                        <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                          isActive 
                            ? 'text-teal-300 font-extrabold' 
                            : 'text-slate-500 group-hover:text-slate-200'
                        }`}>
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* 4. Social Links Wrapper (Explicit top padding) */}
              <div className="w-full flex justify-center pt-8 select-none">
                <div className="flex items-center gap-5">
                  <a 
                    href="https://github.com/Ganesh5710" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-300 transition-colors outline-none focus:ring-2 focus:ring-teal-400 rounded p-1"
                    aria-label="Visit Ganesh's GitHub profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ganeshb57" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-300 transition-colors outline-none focus:ring-2 focus:ring-teal-400 rounded p-1"
                    aria-label="Visit Ganesh's LinkedIn profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:ganeshbathula20@gmail.com"
                    className="text-slate-400 hover:text-teal-300 transition-colors outline-none focus:ring-2 focus:ring-teal-400 rounded p-1"
                    aria-label="Send email to Ganesh"
                  >
                    <Mail size={20} />
                  </a>
                </div>
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
