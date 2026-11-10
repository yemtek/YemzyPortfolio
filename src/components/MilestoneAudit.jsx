import React from 'react';
import { 
  History, 
  Calendar, 
  MapPin, 
  Check, 
  ShieldCheck, 
  Server, 
  Terminal, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function MilestoneAudit() {
  const auditLogs = [
    {
      period: '2023 — Present',
      title: 'Principal Systems & Full-Stack Infrastructure Lead',
      scope: 'Enterprise Infrastructure & Autonomous Systems',
      location: 'Hybrid / Datacenter & Remote',
      summary: 'Directing the architecture of mission-critical Next.js 15 applications, sub-millisecond PostgreSQL analytical pipelines, and automated Gemini multimodal document ingestion.',
      deployments: [
        'Architected high-throughput Next.js 15 web systems backed by serverless Neon PostgreSQL, maintaining sub-100ms P99 query latency.',
        'Engineered 42U datacenter rack elevations with redundant 3-phase 32A PDU distribution and structured optical fiber patch cabling.',
        'Synthesized automated invoice and manifest parsing using Gemini Vision OCR, eliminating 88% of manual hardware entry overhead.',
        'Built event-driven n8n webhook infrastructures connecting financial telemetry, Slack operations channels, and PostgreSQL stores.'
      ],
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL (Neon)', '42U Elevations', 'Gemini Vision', 'n8n Automation']
    },
    {
      period: '2021 — 2023',
      title: 'Senior Network Infrastructure & Systems Specialist',
      scope: 'Datacenter Operations & Managed Networking',
      location: 'On-Premise & AWS EC2',
      summary: 'Responsible for physical server rack elevation planning, managed switch VLAN isolation, and multi-core Linux daemon availability.',
      deployments: [
        'Configured 802.1Q VLAN trunking and access security lists across Cisco Nexus switches to isolate compute, storage SAN, and out-of-band management.',
        'Orchestrated multi-process PM2 cluster daemons and systemd background workers across AWS EC2 and bare-metal Linux servers.',
        'Implemented SQL window functions for automated financial volatility tracking and ledger moving-average analysis.'
      ],
      technologies: ['Cisco Nexus', '802.1Q VLANs', 'AWS EC2', 'Linux / Termux', 'PM2 Daemons', 'SQL Window Aggregations']
    },
    {
      period: '2019 — 2021',
      title: 'Full-Stack Developer & Technical Creator',
      scope: 'Client Systems & Digital Solutions',
      location: 'Contract & Digital Lab',
      summary: 'Delivered reactive React applications, integrated external payment and shipping APIs, and directed data-driven visual multimedia campaigns.',
      deployments: [
        'Engineered 20+ responsive web interfaces with modular React component architectures and relational backends.',
        'Produced high-retention performance video creative assets generating over 14 million impressions through pacing and sound engineering.',
        'Standardized scalable brand identity guidelines, typography hierarchies, and SVG asset repositories.'
      ],
      technologies: ['React.js', 'REST APIs', 'Node.js', 'Video Pacing', 'Sound Engineering', 'Brand Systems']
    }
  ];

  return (
    <section id="milestones" className="py-20 lg:py-28 border-b border-white/10 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Deployment History &amp; Impact Log</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A chronological audit of production deliveries spanning datacenter switching, relational database architectures, and reactive web applications.
          </p>
        </div>

        {/* Audit Log Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-12">
          {auditLogs.map((log, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20" />

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                    <Calendar size={14} />
                    <span>{log.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin size={13} />
                    <span>{log.location}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {log.title}
                </h3>
                <div className="text-sm font-semibold text-slate-300 mt-0.5 mb-3 font-mono">
                  {log.scope}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {log.summary}
                </p>

                {/* Concrete Deliverables */}
                <div className="space-y-2.5 mb-6">
                  {log.deployments.map((dep, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{dep}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {log.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {t}
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
