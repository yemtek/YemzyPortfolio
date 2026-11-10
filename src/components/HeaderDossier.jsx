import React from 'react';
import { 
  Server, 
  Database, 
  Cpu, 
  ArrowRight, 
  Layers, 
  Network, 
  Shield, 
  Terminal, 
  Zap,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function HeaderDossier({ onExploreWorkstation, onExploreVectors, onConnect }) {
  const techStack = [
    { name: 'React 19', domain: 'UI Engine' },
    { name: 'Next.js 15', domain: 'App Router / SSR' },
    { name: 'TypeScript', domain: 'Strict Type-Safety' },
    { name: 'PostgreSQL (Neon)', domain: 'Serverless Relational' },
    { name: 'Tailwind CSS', domain: 'Zero-Runtime Design' },
    { name: 'Gemini / AI APIs', domain: 'Multimodal Vision & NLP' },
    { name: 'n8n Automation', domain: 'Event-Driven Pipelines' },
  ];

  const telemetryMetrics = [
    {
      metric: '42U',
      title: 'Datacenter Rack Standard',
      caption: 'Full-density power routing, thermal ventilation & fiber patch matrices',
      accent: 'text-cyan-400'
    },
    {
      metric: '< 85ms',
      title: 'Analytical Query Windows',
      caption: 'PostgreSQL SMA/EMA calculations on multi-million time-series ticks',
      accent: 'text-emerald-400'
    },
    {
      metric: '99.98%',
      title: 'Service Daemon Uptime',
      caption: 'Linux systemd, PM2 multi-core clusters & AWS EC2 failover topologies',
      accent: 'text-teal-400'
    },
    {
      metric: 'Sub-2s',
      title: 'Vision OCR Ingestion',
      caption: 'Multimodal Gemini extraction from physical hardware paper manifests',
      accent: 'text-purple-400'
    }
  ];

  return (
    <section id="dossier" className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Top System Breadcrumb / Identity Stamp (No heavy top nav) */}
        <div className="flex flex-wrap items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              JY
            </div>
            <div>
              <span className="text-white font-bold tracking-tight block">
                Joseph Yemi &bull; Engineering Dossier
              </span>
              <span className="text-slate-400 text-[11px]">
                Senior Full-Stack &amp; Enterprise Infrastructure Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300">SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <span>&bull;</span>
            <span>WAT (UTC+1)</span>
            <span>&bull;</span>
            <span className="text-slate-300">Open for Critical Projects</span>
          </div>
        </div>

        {/* Hero Narrative Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Architectural Writeup */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Terminal size={14} className="text-cyan-400" />
              <span>Full-Stack Development &bull; Cloud Relational &bull; Physical IT</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.12] text-balance">
              Architecting High-Throughput Web Apps, Resilient Physical Networks &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Autonomous AI Engines.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              A unified engineering discipline bridging physical datacenter rack precision, reactive Next.js 15 full-stack architectures, advanced PostgreSQL analytical window calculations, and autonomous multimodal AI pipelines.
            </p>

            {/* Direct Action Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreWorkstation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Launch Systems Lab</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onExploreVectors}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-cyan-500/40 transition-all active:scale-95"
              >
                <Layers size={16} className="text-cyan-400" />
                <span>Inspect Technical Vectors</span>
              </button>

              <button
                onClick={onConnect}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all active:scale-95"
              >
                <Zap size={16} className="text-emerald-400" />
                <span>Establish Direct Link</span>
              </button>
            </div>

            {/* Production Tech Matrix */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Validated Production Tooling &amp; Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-semibold">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 font-sans hidden sm:inline">&middot; {tech.domain}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Grade Engineering Topology Console */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-2xl glow-cyan">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950 rounded-t-xl border-b border-white/10 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-200 font-semibold ml-1">datacenter-node.topo</span>
                </div>
                <span className="text-cyan-400 font-bold">42U HYBRID ACTIVE</span>
              </div>

              {/* Console Graphic */}
              <div className="relative overflow-hidden rounded-b-xl aspect-[16/11] bg-slate-950">
                <img
                  src="/src/assets/images/hero_tech_architecture_1794249527627.jpg"
                  alt="Enterprise Datacenter Architecture and AI Pipeline Nodes"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Telemetry Badge Inside */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200 font-bold">Physical &lt;&gt; Cloud Mesh</span>
                  </div>
                  <span className="text-cyan-300 font-bold">Neon &bull; Gemini &bull; Linux</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Telemetry Metrics Full-Width Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {telemetryMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <div className={`font-heading font-extrabold text-3xl sm:text-4xl ${item.accent} font-mono-numbers tracking-tight`}>
                {item.metric}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-1.5 font-mono">
                {item.title}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
