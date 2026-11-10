import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const credentials = [
    {
      type: 'Degree',
      title: 'B.Sc. (Hons.) Computer Science',
      institution: 'National Open University of Nigeria (NOUN)',
      focus: 'Core computing theory, software engineering, databases, algorithms, and networked systems.',
      icon: GraduationCap,
      accent: 'text-cyan-400',
      badge: 'B.Sc. Degree'
    },
    {
      type: 'Professional Certification',
      title: 'Google IT Support Professional Certificate',
      institution: 'Google / Coursera',
      focus: 'Computer networking, operating systems, system administration, IT infrastructure security & troubleshooting.',
      icon: Award,
      accent: 'text-emerald-400',
      badge: 'Google Certified'
    },
    {
      type: 'Diploma',
      title: 'Diploma in Software Engineering',
      institution: 'Information Technology Institute',
      focus: 'Practical software development, database architecture, systems design, and project lifecycle.',
      icon: BookOpen,
      accent: 'text-purple-400',
      badge: 'Software Engineering'
    },
    {
      type: 'Specialization',
      title: 'Full-Stack Development Specialization',
      institution: 'ALX Africa',
      focus: 'Intensive full-stack software engineering program: backend systems, frontend frameworks, DevOps, and cloud deployments.',
      icon: CheckCircle2,
      accent: 'text-amber-400',
      badge: 'ALX Specialization'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 border-b border-white/10 bg-[#050811]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
            <GraduationCap size={14} />
            <span>Academic &amp; Professional Credentials</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal computer science education and verified professional engineering specializations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {cred.type}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-cyan-300 font-bold">
                      {cred.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className={cred.accent} size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                        {cred.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-slate-300">
                        {cred.institution}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-3 pt-3 border-t border-white/5">
                    {cred.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
