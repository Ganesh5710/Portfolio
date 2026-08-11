import React from 'react';

const About = () => {
  return (
    <div className="space-y-6">
      {/* Section Title - Hidden on Desktop */}
      <h2 className="text-sm font-mono font-bold text-[var(--color-accent-teal)] uppercase tracking-widest flex items-center gap-4 select-none lg:hidden">
        <span>01. ABOUT</span>
        <span className="h-px bg-slate-700/40 dark:bg-slate-800/60 flex-grow"></span>
      </h2>

      {/* Biography - Increased from text-sm to text-base */}
      <div className="text-base font-sans font-light leading-relaxed space-y-5 text-gray-650 dark:text-slate-400">
        <p>
          I'm a B.Tech CSE student passionate about <span className="font-semibold text-slate-900 dark:text-slate-200">Full Stack Development</span> and AI-powered applications. I build scalable backend architectures, real-time web applications, and autonomous AI chatbots. Currently engineering web features using Python, React, Node.js, and WebSockets.
        </p>
        <p>
          I focus on bridging the gap between robust, fast database queries and polished, interactive frontends. My goal is to build digital products that offer not only visual excellence but also seamless, low-latency performance.
        </p>
      </div>
    </div>
  );
};

export default About;
