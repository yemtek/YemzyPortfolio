import React, { useState } from 'react';
import { 
  Server, 
  TrendingUp, 
  Scan, 
  ArrowUpRight, 
  Play, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Database,
  Terminal,
  Activity,
  FileSpreadsheet
} from 'lucide-react';
import ProjectDemoModal from './ProjectDemoModal';

export default function FeaturedProjects({ activeTab }) {
  const [selectedProject, setSelectedProject] = useState(null);

  // 3 Flagship Systems requested by user
  const devProjects = [
    {
      id: 'infratrack',
      title: 'InfraTrack — Enterprise IT Asset & Infrastructure Dashboard',
      subtitle: 'Datacenter Topology & Physical Hardware Mapping',
      tagline: 'Bridging physical rack hardware with serverless database telemetry.',
      techBadges: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
      features: [
        'Interactive 42U rack elevation visualizer with real-time slot occupancy',
        'Port-to-port cable tracing matrix mapping fiber LC and CAT6A routes',
        'Serverless relational asset database with instant search & thermal status'
      ],
      metrics: [
        { label: 'Rack Density', value: '42U Real-Time' },
        { label: 'Cable Tracing', value: '100% Port Matched' },
        { label: 'Query Speed', value: '42ms Cached' }
      ],
      image: '/src/assets/images/project_infratrack_1794249529794.jpg',
      demoButtonLabel: 'Launch Interactive Rack Visualizer',
      themeColor: 'cyan'
    },
    {
      id: 'finpulse',
      title: 'FinPulse AI — Autonomous Financial Analytics & Sentiment Engine',
      subtitle: 'Real-Time Market Pulse & Algorithmic Insights',
      tagline: 'High-frequency analytical SQL calculations paired with Gemini reasoning.',
      techBadges: ['Next.js', 'PostgreSQL', 'Recharts', 'Gemini API', 'n8n Automation'],
      features: [
        'Real-time market data analytics using SQL window functions (SMA/EMA)',
        'AI sentiment processing on news feeds with calibrated confidence gauges',
        'Automated webhook alerts triggering institutional trade notifications'
      ],
      metrics: [
        { label: 'Window Aggregations', value: 'SMA 20 & EMA 50' },
        { label: 'Sentiment Precision', value: '96.8% Calibrated' },
        { label: 'Webhook Latency', value: '< 180ms Dispatch' }
      ],
      image: '/src/assets/images/project_finpulse_1794249530007.jpg',
      demoButtonLabel: 'View Market Intelligence & SQL Demo',
      themeColor: 'emerald'
    },
    {
      id: 'omnisupply',
      title: 'OmniSupply AI — Operations & Vision OCR Logistics Platform',
      subtitle: 'Multimodal Vision Hardware Ingestion & Logistics',
      tagline: 'Transforming messy physical shipping manifests into validated relational rows.',
      techBadges: ['Next.js', 'Tailwind CSS', 'Gemini Vision OCR', 'PostgreSQL'],
      features: [
        'Supply chain inventory management with hardware serialized tracking',
        'Integrated Multimodal AI OCR scanning physical invoices into DB records',
        'Automated SKU conflict resolution & warehouse bay routing'
      ],
      metrics: [
        { label: 'OCR Extraction', value: '99.4% Accuracy' },
        { label: 'Data Ingestion', value: 'Sub-2s per Invoice' },
        { label: 'Hardware Units', value: '4,250+ Tracked' }
      ],
      image: '/src/assets/images/project_omnisupply_1794249530138.jpg',
      demoButtonLabel: 'Test Multimodal Invoice OCR Scanner',
      themeColor: 'teal'
    }
  ];

  // Creative & Design alternative projects when visitor selects Creator or Design tabs
  const creatorProjects = [
    {
      id: 'saving-souls',
      title: 'Saving Souls Studio — Viral Storytelling & Retention Editing',
      subtitle: 'UGC & High-Retention Video Direction',
      tagline: 'Hook architecture and dynamic motion graphics generating 10M+ views.',
      techBadges: ['Premiere Pro', 'CapCut Pro', 'Sound Design', 'Color Grading', 'After Effects'],
      features: [
        'AI-assisted narrative pacing calibrated for sub-3-second scroll stoppage',
        'Multi-track audio mastering with custom cinematic foley and sound design',
        'High-converting hook testing across TikTok, YouTube Shorts & Meta Reels'
      ],
      metrics: [
        { label: 'Total Reach', value: '14.8M Views' },
        { label: 'Avg Retention', value: '72% At 30s' },
        { label: 'Conversion Lift', value: '+310% CTR' }
      ],
      image: 'https://images.unsplash.com/photo-1581888227599-779811985424?auto=format&fit=crop&w=1200&q=80',
      demoButtonLabel: 'Explore Video Showcase',
      themeColor: 'sky'
    },
    {
      id: 'meta-performance',
      title: 'Meta Performance Creative Launch Engine',
      subtitle: 'Direct-Response Ad Creative Editing',
      tagline: 'Fast-paced product edits with dynamic captions and emotional hooks.',
      techBadges: ['Motion Graphics', 'Dynamic Captions', 'Meta Ads Manager', 'B-Roll Assembly'],
      features: [
        'Split-screen comparison edits and testimonial mashups',
        'Native vertical 9:16 layout optimizations with safe-zone compliance',
        'A/B tested caption variants for silent auto-play retention'
      ],
      metrics: [
        { label: 'ROAS Delivered', value: '4.2x Average' },
        { label: 'Ad Creatives', value: '45+ Delivered' },
        { label: 'Tested Hooks', value: '120 Variants' }
      ],
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80',
      demoButtonLabel: 'View Performance Ad Deck',
      themeColor: 'blue'
    }
  ];

  const designProjects = [
    {
      id: 'brand-hex',
      title: 'El Paso Brand Architecture & Visual System',
      subtitle: 'Brand Identity, Design System & Typography',
      tagline: 'Complete identity system from logo geometry to comprehensive guidelines.',
      techBadges: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Typography System', 'Color Theory'],
      features: [
        'Hexagonal geometric logo construction with responsive lockups',
        'Accessible high-contrast color palette with WCAG AA compliance',
        'Social media design kits, business cards, and vector icon sets'
      ],
      metrics: [
        { label: 'Asset Library', value: '180+ SVG Assets' },
        { label: 'Brand Guidelines', value: '48-Page Spec' },
        { label: 'Consistency', value: '100% Unified' }
      ],
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80',
      demoButtonLabel: 'Inspect Brand Guidelines',
      themeColor: 'pink'
    },
    {
      id: 'viral-thumbnails',
      title: 'High-CTR YouTube & Social Media Graphics',
      subtitle: 'Click-Through Rate Thumbnail Engineering',
      tagline: 'Visual hierarchy, expressive facial lighting, and bold text composition.',
      techBadges: ['Photoshop', 'Composition', 'Focal Lighting', 'Canva Pro', 'Visual Contrast'],
      features: [
        'Exaggerated lighting and depth separation using custom layer masks',
        'Color theory optimizations targeting 12%+ CTR against competitors',
        'Mobile thumbnail preview simulations for high readability at 80px'
      ],
      metrics: [
        { label: 'CTR Improvement', value: '+8.4% Lift' },
        { label: 'Thumbnails Made', value: '250+ Visuals' },
        { label: 'Impression Count', value: '25M+ Served' }
      ],
      image: 'https://images.unsplash.com/photo-1626785774573-4b7993143a2d?auto=format&fit=crop&w=1200&q=80',
      demoButtonLabel: 'View Thumbnail Gallery',
      themeColor: 'purple'
    }
  ];

  const activeProjects = activeTab === 'creator' 
    ? creatorProjects 
    : activeTab === 'design' 
    ? designProjects 
    : devProjects;

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/10 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Flagship Deployments</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {activeTab === 'creator' 
                ? 'High-Retention Video Editing & Showreels' 
                : activeTab === 'design' 
                ? 'Brand Systems & Visual Direction' 
                : 'Enterprise Systems & Flagship Projects'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {activeTab === 'creator'
                ? 'Hook-focused storytelling, pacing, and viral multimedia production.'
                : activeTab === 'design'
                ? 'Identity design, visual geometry, and high-conversion graphic collateral.'
                : 'Production-ready full-stack architectures integrating modern frameworks, high-throughput databases, and autonomous AI agents.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span>Displaying: </span>
            <span className="text-cyan-400 font-bold uppercase">{activeTab} Focus</span>
          </div>
        </div>

        {/* Project Cards (Stacked Full-Width Architectural Showcases) */}
        <div className="space-y-16">
          {activeProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-500/10 transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Technical Narrative & Features */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  
                  {/* Category & Tag */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                      <span>Project 0{idx + 1}</span>
                      <span>&bull;</span>
                      <span className="text-slate-400">{project.subtitle}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono font-medium text-slate-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Architectural Capabilities:
                    </span>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="font-heading font-bold text-sm sm:text-base text-white font-mono-numbers">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{project.demoButtonLabel}</span>
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-xs bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all"
                    >
                      <span>System Specs</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                </div>

                {/* Right Column: Visual Dashboard Mockup */}
                <div className="lg:col-span-6 relative">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group/card rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl relative aspect-[16/10] transition-all duration-300 hover:border-cyan-400/60"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Interactive Badge Hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 flex items-center gap-2">
                        <Terminal size={14} />
                        <span>Interactive Prototype Ready</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectDemoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
