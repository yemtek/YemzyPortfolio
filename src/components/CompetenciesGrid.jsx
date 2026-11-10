import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Bot, 
  Server, 
  CheckCircle, 
  ChevronRight, 
  Terminal, 
  Activity, 
  Network,
  Cpu,
  Layers,
  FileCode
} from 'lucide-react';

export default function CompetenciesGrid() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 0,
      title: "Full-Stack Web Engineering",
      subtitle: "Scalable modern web applications & reactive state architecture",
      icon: Code2,
      accentColor: "from-cyan-500 to-blue-500",
      accentBorder: "group-hover:border-cyan-500/50",
      textColor: "text-cyan-400",
      description: "Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, RESTful APIs, Webhooks.",
      highlights: [
        "Server Components (RSC) & Streaming SSR pipelines",
        "Type-safe schema validation with Prisma & Zod",
        "Webhook ingestion with idempotent event processing",
        "Optimistic UI updates & zero-layout-shift design"
      ],
      codeSnippet: `// Next.js 15 Server Action with Prisma
export async function syncAssetTelemetry(assetId: string) {
  'use server';
  const asset = await prisma.rackDevice.update({
    where: { id: assetId },
    data: { lastPing: new Date(), status: 'HEALTHY' },
    select: { id: true, uPosition: true, portMetrics: true }
  });
  revalidateTag(\`rack-\${asset.uPosition}\`);
  return { success: true, asset };
}`
    },
    {
      id: 1,
      title: "Data Analytics & SQL Insights",
      subtitle: "Deep relational queries, window functions & visual time-series",
      icon: Database,
      accentColor: "from-emerald-500 to-teal-500",
      accentBorder: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400",
      description: "PostgreSQL (Neon.tech), SQL Window Functions (SMA/EMA calculations), Time-Series Aggregations, Python (Pandas/NumPy), Recharts Data Visualizations.",
      highlights: [
        "Window Functions: OVER (PARTITION BY ... ORDER BY ...)",
        "Moving averages (20-day SMA, 50-day EMA) inside DB queries",
        "Sub-100ms time-bucket aggregations on multi-million rows",
        "Automated ETL pipelines feeding Recharts visual dashboards"
      ],
      codeSnippet: `-- Analytical SQL: 20-Day Simple & Exponential Moving Averages
SELECT 
  ticker, 
  trade_timestamp, 
  close_price,
  AVG(close_price) OVER (
    PARTITION BY ticker 
    ORDER BY trade_timestamp 
    ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
  ) AS sma_20,
  -- Volatility standard deviation over trailing window
  STDDEV(close_price) OVER (
    PARTITION BY ticker 
    ORDER BY trade_timestamp 
    ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
  ) AS rolling_volatility
FROM market_feed_ticks;`
    },
    {
      id: 2,
      title: "Applied AI & Automation Workflows",
      subtitle: "Multimodal vision parsing, agent orchestration & pipeline synthesis",
      icon: Bot,
      accentColor: "from-purple-500 to-pink-500",
      accentBorder: "group-hover:border-purple-500/50",
      textColor: "text-purple-400",
      description: "Gemini & OpenAI API integration, Multimodal Vision & OCR document processing, n8n/Make automated pipelines, JSON structured output prompting.",
      highlights: [
        "Multimodal document extraction (hardware invoices & bills of lading)",
        "Strict JSON schema enforcement with zod / response_schema",
        "n8n webhook triggers orchestrating Slack, DB & email notifications",
        "Autonomous sentiment classification with calibrated confidence scores"
      ],
      codeSnippet: `// Gemini 2.5 Structured Output for Invoice OCR
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: [
    { inlineData: { mimeType: 'image/jpeg', data: base64Invoice } },
    { text: 'Extract invoice line items with serial numbers and quantities.' }
  ],
  config: {
    responseMimeType: 'application/json',
    responseSchema: invoiceExtractionSchema
  }
});
const parsedRecords = JSON.parse(response.text);`
    },
    {
      id: 3,
      title: "IT & Physical Infrastructure",
      subtitle: "Datacenter elevations, network switching & Linux daemon engineering",
      icon: Server,
      accentColor: "from-amber-500 to-orange-500",
      accentBorder: "group-hover:border-amber-500/50",
      textColor: "text-amber-400",
      description: "Server rack elevation management (1U–42U), managed switch VLAN configurations, port-to-port cable tracing, AWS EC2, PM2 process management, Termux/Linux operations.",
      highlights: [
        "Full 42U rack density planning, power distribution (PDU) & thermal airflow",
        "Managed switch VLAN segmentation (Trunks, Access, 802.1Q tags)",
        "Cable patch matrices, optical SFP+ transceiver mapping & labeling",
        "Linux daemon resiliency with systemd, PM2 clusters & AWS EC2"
      ],
      codeSnippet: `# Linux / PM2 Enterprise Daemon Cluster Deployment
# Deploying Next.js + Node worker processes with zero-downtime reload
pm2 start dist/server.js -i max --name "infratrack-core" \\
  --max-memory-restart 1G \\
  --node-args="--max-old-space-size=2048"

# Managed Switch VLAN configuration audit
vlan database
  vlan 10 name "MGMT_OOB"
  vlan 20 name "PROD_COMPUTE"
  vlan 30 name "STORAGE_SAN"
exit`
    }
  ];

  return (
    <section id="competencies" className="py-20 lg:py-28 relative border-t border-white/10 bg-[#070b16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
              Architectural Pillars
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Core Technical Competencies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Cross-disciplinary mastery spanning frontend frameworks, analytical database queries, autonomous AI agents, and physical datacenter hardware.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Interactive inspection mode enabled</span>
          </div>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400/60 shadow-xl shadow-cyan-500/10 -translate-y-1'
                    : 'bg-slate-950/60 hover:bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Pillar Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accentColor} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className={pillar.textColor} size={22} />
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{pillar.id + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mt-1 mb-4 leading-normal">
                    {pillar.subtitle}
                  </p>

                  {/* Explicit Required Description */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-5">
                    <span className="text-[11px] font-mono text-slate-300 leading-relaxed block font-medium">
                      {pillar.description}
                    </span>
                  </div>

                  {/* Key Capabilities List */}
                  <ul className="space-y-2 mb-6">
                    {pillar.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle size={14} className={`${pillar.textColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className={pillar.textColor}>
                    {isSelected ? 'Viewing Architecture' : 'Click to Inspect'}
                  </span>
                  <ChevronRight size={16} className={`transition-transform ${isSelected ? 'rotate-90 text-cyan-300' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Architecture Inspector Drawer */}
        <div className="mt-8 rounded-2xl bg-slate-950/90 border border-white/15 p-6 shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Terminal size={18} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Interactive Implementation Trace
                </span>
                <span className="text-sm font-bold text-white">
                  {pillars[activePillar].title} &bull; Production Architecture Spec
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {pillars.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activePillar === p.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  Pillar 0{p.id + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Architectural Breakdown
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pillars[activePillar].description}
              </p>

              <div className="space-y-2 pt-2">
                {pillars[activePillar].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-900/90 rounded-xl p-4 border border-white/10 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
                <span className="text-cyan-300">production-snippet.{activePillar === 1 ? 'sql' : activePillar === 3 ? 'sh' : 'ts'}</span>
                <span>Production Tested</span>
              </div>
              <pre className="text-slate-200 leading-relaxed font-mono-numbers">
                <code>{pillars[activePillar].codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
