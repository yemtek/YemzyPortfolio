import React, { useState } from 'react';
import { 
  Server, 
  TrendingUp, 
  Scan, 
  Play, 
  Check, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';

export default function ProjectsSection() {
  const [activeDemoProject, setActiveDemoProject] = useState(null);

  const projects = [
    {
      id: 'infratrack',
      title: 'InfraTrack — Enterprise IT Asset & Infrastructure Dashboard',
      subtitle: 'Datacenter Topology & Physical Hardware Mapping',
      techBadges: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
      features: [
        'Interactive 42U rack elevation visualizer with real-time slot occupancy',
        'Port-to-port cable tracing matrix mapping fiber LC and CAT6A routes',
        'Serverless relational asset database with instant search & thermal status'
      ],
      lead: 'A unified dashboard connecting physical datacenter rack management with cloud relational PostgreSQL and live fiber optical cable tracing.',
      image: '/src/assets/images/project_infratrack_1794249529794.jpg',
      demoCta: 'Test Interactive 42U Rack Demo'
    },
    {
      id: 'finpulse',
      title: 'FinPulse AI — Autonomous Financial Analytics & Sentiment Engine',
      subtitle: 'Market Pulse & Algorithmic Insights',
      techBadges: ['Next.js', 'PostgreSQL', 'Recharts', 'Gemini API', 'n8n Automation'],
      features: [
        'Real-time market data analytics using SQL window functions (SMA/EMA)',
        'AI sentiment processing on news feeds with calibrated confidence gauges',
        'Automated webhook alerts triggering institutional trade notifications'
      ],
      lead: 'Executes 20-day SMA & 50-day EMA window calculations in PostgreSQL while Gemini AI analyzes incoming news feeds to trigger webhook alerts.',
      image: '/src/assets/images/project_finpulse_1794249530007.jpg',
      demoCta: 'Test Financial Analytics & AI Demo'
    },
    {
      id: 'omnisupply',
      title: 'OmniSupply AI — Operations & Vision OCR Logistics Platform',
      subtitle: 'Multimodal Vision Hardware Ingestion',
      techBadges: ['Next.js', 'Tailwind CSS', 'Gemini Vision OCR', 'PostgreSQL'],
      features: [
        'Supply chain inventory management with hardware serialized tracking',
        'Integrated Multimodal AI OCR scanning physical invoices into DB records',
        'Automated SKU conflict resolution & warehouse bay routing'
      ],
      lead: 'Uses Gemini 2.5 Flash Vision to inspect paper invoices and shipping manifests, extracting serial numbers and quantities into PostgreSQL database rows in under 2 seconds.',
      image: '/src/assets/images/project_omnisupply_1794249530138.jpg',
      demoCta: 'Test Multimodal Invoice OCR Demo'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/10 bg-[#050811]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2">
            Flagship Systems
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Real production architectures built with modern frameworks, high-throughput databases, and autonomous AI pipelines.
          </p>
        </div>

        {/* 3 Projects Stack */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Summary & Features */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Project 0{idx + 1} &bull; {project.subtitle}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.lead}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 1-Click Interactive Simulator Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => setActiveDemoProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Play size={13} fill="currentColor" />
                      <span>{project.demoCta}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Project Preview Image */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setActiveDemoProject(project)}
                    className="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-[16/10] relative shadow-lg hover:border-cyan-400/60 transition-all"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-white/10 text-[11px] text-cyan-300">
                        Click to Test Prototype
                      </span>
                      <span className="text-cyan-400 font-bold">&rarr;</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Demo Modal */}
      {activeDemoProject && (
        <ProjectDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
    </section>
  );
}
