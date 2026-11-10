import React from 'react';
import { Calendar, MapPin, Check, Briefcase } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: 'Infrastructure Specialist & Engineer',
      company: 'KPR Consulting Limited',
      period: 'Oct 2026 – Present',
      location: 'Enterprise Network & Datacenter',
      achievements: [
        'Architect and oversee enterprise ELV and physical IT network infrastructure installations, including server rack mounting, managed switch configurations, and VLAN setup.',
        'Conduct site assessments, manage structured network cabling, and perform port-to-port cable tracing to ensure zero-downtime hardware operations across client installations.',
        'Streamline hardware intake registry workflows and network diagnostic procedures using modern tracking tools.'
      ],
      tags: ['ELV & Physical IT', '42U Server Racks', 'Managed Switches', 'VLAN Setup', 'Port Cable Tracing']
    },
    {
      role: 'Lead Full-Stack & Automation Consultant',
      company: 'Software Consulting',
      period: '2020 – Present',
      location: 'Contract & Client Initiatives',
      achievements: [
        'Design and deploy custom web platforms, landing pages, and backend integrations for diverse client initiatives using Next.js, Tailwind CSS, and PostgreSQL.',
        'Integrate AI models (Gemini / OpenAI APIs) to automate document processing, text generation, and data extraction pipelines.',
        'Build automated n8n and webhook-driven alert systems connecting database updates directly to communication channels (Slack/Email).'
      ],
      tags: ['Next.js 15', 'Tailwind CSS', 'PostgreSQL', 'Gemini / OpenAI API', 'n8n Automation', 'Webhooks']
    },
    {
      role: 'Web Development Lead',
      company: 'Digital Solutions Provider',
      period: '2020 – 2026',
      location: 'Cloud & Agency Solutions',
      achievements: [
        'Led end-to-end development of responsive web applications, prioritizing mobile-first architecture and high touch-target usability.',
        'Managed cloud VPS hosting on AWS EC2, configuring SSH security, process management (PM2), and continuous deployment pipelines.'
      ],
      tags: ['Mobile-First Web', 'AWS EC2', 'PM2 Process Clusters', 'SSH Security', 'CI/CD Pipelines']
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-white/10 bg-[#060913]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 flex items-center gap-2">
            <Briefcase size={14} />
            <span>Professional Experience</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Career History &amp; Deployments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verifiable track record as documented on CV across infrastructure engineering, full-stack development, and workflow automation.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-cyan-300">
                    {exp.company} &bull; <span className="text-slate-400 font-normal">{exp.location}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-cyan-400 font-bold px-3 py-1 rounded bg-slate-900 border border-white/10 w-fit shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Achievements Bullet List from CV */}
              <ul className="space-y-2.5 mt-4 pt-3 border-t border-white/5">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
