import React from 'react';
import { Code2, Database, Bot, Server, Check } from 'lucide-react';

export default function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Web Development',
      desc: 'Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Node.js, Prisma ORM, REST APIs, Webhooks',
      points: [
        'Next.js 15 App Router architecture with Server Components (RSC)',
        'Full-stack type safety with TypeScript, Prisma ORM, and REST endpoints',
        'Idempotent webhook handlers & event-driven background sync'
      ],
      accent: 'text-cyan-400',
      borderAccent: 'hover:border-cyan-500/50'
    },
    {
      icon: Database,
      title: 'Database & Data Analytics',
      desc: 'PostgreSQL (Neon.tech), SQL (Window Functions, CTEs), Python (Pandas), Time-Series Metrics, Recharts',
      points: [
        'Advanced SQL Window Functions: OVER (PARTITION BY ... ORDER BY ...)',
        'In-database SMA/EMA moving averages and CTE data transformations',
        'Python (Pandas) data processing & interactive Recharts visualizations'
      ],
      accent: 'text-emerald-400',
      borderAccent: 'hover:border-emerald-500/50'
    },
    {
      icon: Bot,
      title: 'Applied AI & Automation',
      desc: 'Gemini / OpenAI API, Multimodal OCR Vision, n8n / Make Workflow Automation, ETL Pipelines, Prompt Engineering',
      points: [
        'Multimodal Vision OCR parsing physical hardware documents & manifests',
        'Structured output prompt engineering with strict JSON response schemas',
        'n8n & Make automated webhook pipelines connecting Slack, DBs & email'
      ],
      accent: 'text-purple-400',
      borderAccent: 'hover:border-purple-500/50'
    },
    {
      icon: Server,
      title: 'IT Infrastructure & Cloud',
      desc: 'Managed Switches, 42U Rack Elevation, Cable Tracing, AWS EC2, PM2, GitHub CI/CD, Linux Server Admin',
      points: [
        'Enterprise ELV & 42U server rack elevation planning & thermal layout',
        'Managed switch configuration, 802.1Q VLAN setup & port-to-port cable tracing',
        'AWS EC2 hosting, PM2 process management, and GitHub CI/CD pipelines'
      ],
      accent: 'text-amber-400',
      borderAccent: 'hover:border-amber-500/50'
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-white/10 bg-[#060913]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
            Core Technical Competencies
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Specialized Engineering Domains
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Directly from CV: full-stack development, serverless relational data analytics, applied multimodal AI automation, and physical enterprise IT infrastructure.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-slate-950/80 border border-white/10 ${skill.borderAccent} p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                      <Icon className={skill.accent} size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-cyan-300/90 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5 mb-4">
                    {skill.desc}
                  </p>

                  <ul className="space-y-2">
                    {skill.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <Check size={16} className={`${skill.accent} shrink-0 mt-0.5`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
