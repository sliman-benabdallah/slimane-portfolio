import React from 'react';
import { ArrowRight, Terminal, Database, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Radial Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs sm:text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for Hire & Freelance Work
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Building Scalable Full-Stack Web Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">From Idea to Deployment</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-400 font-normal leading-relaxed mb-10 max-w-2xl">
            Hi, I'm a <span className="text-slate-200 font-semibold">Full-Stack Web Developer</span>. I build responsive front-end user interfaces, design robust REST APIs, and manage secure databases.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              Explore Full-Stack Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl font-semibold transition-all hover:border-slate-600 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Metrics / Full Stack Architecture Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 mt-12 border-t border-slate-800/80 w-full max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">Frontend</span>
              <span className="text-xs sm:text-sm text-slate-400">React & Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">Backend</span>
              <span className="text-xs sm:text-sm text-slate-400">Node.js & Express</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1">Database</span>
              <span className="text-xs sm:text-sm text-slate-400">SQL & NoSQL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}