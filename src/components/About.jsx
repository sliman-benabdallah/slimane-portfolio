import React from 'react';
import { User, Code2, Server, Database, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      title: "Front-End Engineering",
      description: "Building responsive, accessible, and fast user interfaces using React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Server className="w-6 h-6 text-sky-400" />,
      title: "Back-End & APIs",
      description: "Designing RESTful APIs and microservices using Node.js, Express, and secure auth systems."
    },
    {
      icon: <Database className="w-6 h-6 text-sky-400" />,
      title: "Database Architecture",
      description: "Modeling, querying, and managing relational and NoSQL databases like PostgreSQL and MongoDB."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold mb-3">
            <User className="w-4 h-4" /> About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Passionate About Building <span className="text-sky-400">Complete Web Solutions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A quick look into who I am, what drives me, and how I approach full-stack software development.
          </p>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I'm a full-stack web developer dedicated to turning complex ideas into seamless digital applications. From designing intuitive user interfaces to structuring scalable back-end databases, I enjoy building every layer of modern web products.
            </p>
            <p>
              My stack revolves around the JavaScript ecosystem—primarily <strong className="text-slate-100 font-semibold">React, Node.js, Express, and modern SQL/NoSQL databases</strong>. I prioritize clean code structure, performance optimization, and intuitive user experience across all screen sizes.
            </p>
            <p>
              When I'm not writing code or learning new technologies, I enjoy optimizing developer workflows, exploring UI trends, and building personal side projects.
            </p>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-700/50 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              Developer Snapshot
            </h3>
            
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex justify-between items-center py-1">
                <span className="text-slate-400 font-medium">Role:</span>
                <span className="text-white font-semibold">Full-Stack Web Developer</span>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-slate-700/30">
                <span className="text-slate-400 font-medium">Primary Focus:</span>
                <span className="text-sky-400 font-semibold">MERN / Full-Stack JS</span>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-slate-700/30">
                <span className="text-slate-400 font-medium">Education:</span>
                <span className="text-white font-semibold">Computer Science / Web Dev</span>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-slate-700/30">
                <span className="text-slate-400 font-medium">Status:</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Opportunities
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Full-Stack Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="p-3 bg-sky-500/10 rounded-xl w-fit mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}