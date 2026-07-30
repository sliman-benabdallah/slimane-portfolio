import React from 'react';
import { skillsData } from '../data/skillsData';
import { Code2, Server, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  // Helper to get an icon based on skill category
  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes('front')) {
      return <Code2 className="w-6 h-6 text-sky-400" />;
    } else if (category.toLowerCase().includes('back')) {
      return <Server className="w-6 h-6 text-sky-400" />;
    }
    return <Wrench className="w-6 h-6 text-sky-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="text-sky-400">Skills & Toolstack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Technologies and frameworks I use to design, develop, and deploy end-to-end web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 sm:p-8 hover:border-sky-500/30 transition-all duration-300 shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                <div className="p-3 bg-sky-500/10 rounded-xl">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {group.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-200 font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-400 font-medium">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}