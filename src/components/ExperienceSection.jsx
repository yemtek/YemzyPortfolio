import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Server, Code, Bot, ShieldCheck } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      period: '2023 — Present',
      role: 'Principal / Lead Full-Stack & Systems Engineer',
      organization: 'Enterprise Infrastructure & Autonomous Systems',
      location: 'Hybrid / Remote & Datacenter',
      description: 'Spearheading the engineering of high-concurrency web portals, serverless database pipelines, and physical datacenter rack elevations.',
      achievements: [
        'Architected Next.js 15 enterprise portals backed by Neon PostgreSQL with sub-100ms analytical query response times.',
        'Engineered 42U datacenter rack elevations with redundant 3-phase PDU routing and port-to-port single-mode fiber patch matrices.',
        'Automated multi-vendor invoice and manifest processing via Gemini Vision OCR pipelines, cutting manual data entry by 88%.',
        'Built automated n8n webhook event buses synchronizing financial telemetry and inventory status.'
      ],
      skills: ['Next.js 15', 'TypeScript', 'PostgreSQL (Neon)', '42U Elevations', 'Gemini AI', 'Tailwind CSS']
    },
    {
      period: '2021 — 2023',
      role: 'Senior Infrastructure & Network Systems Specialist',
      organization: 'Datacenter & Cloud Operations',
      location: 'On-Premise & AWS',
      description: 'Managed physical server racks, configured managed switch VLAN segmentation, and maintained Linux daemon clusters with 99.98% uptime.',
      achievements: [
        'Configured 802.1Q VLAN trunking and access lists across Cisco Nexus switches for isolated compute and SAN storage tiers.',
        'Managed PM2 process clusters and Linux systemd services across distributed AWS EC2 and bare-metal environments.',
        'Implemented SQL window functions for automated financial volatility tracking and real-time ledger audits.'
      ],
      skills: ['Cisco Nexus', 'VLAN 802.1Q', 'AWS EC2', 'Linux / Termux', 'PM2 Daemons', 'SQL Window Functions']
    },
    {
      period: '2019 — 2021',
      role: 'Full-Stack Developer & Technical Creator',
      organization: 'Digital Solutions & Multimedia Lab',
      location: 'Contract & Agency',
      description: 'Developed responsive client applications, integrated transactional REST APIs, and produced high-retention performance video assets.',
      achievements: [
        'Delivered 25+ responsive React web applications with modular UI components and relational database backends.',
        'Directed viral UGC video campaigns generating over 14 million impressions through data-driven hook engineering.',
        'Designed visual identity systems, SVG vector asset libraries, and brand typography guidelines.'
      ],
      skills: ['React.js', 'REST APIs', 'Video Pacing', 'Sound Engineering', 'Brand Systems']
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-white/10 bg-[#070b16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Track Record &amp; Milestones</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Experience &amp; Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Proven progression from responsive web development to enterprise-grade physical IT infrastructure and multimodal AI workflow automation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20" />

              {/* Card Container */}
              <div className="rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/30 p-6 sm:p-8 transition-all">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role and Organization */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {exp.role}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mt-1 mb-3">
                  {exp.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Concrete Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
