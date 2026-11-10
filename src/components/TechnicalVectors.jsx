import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Bot, 
  Server, 
  Check, 
  ChevronRight, 
  Terminal, 
  Layers, 
  Activity, 
  Network,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function TechnicalVectors() {
  const [selectedVector, setSelectedVector] = useState(0);

  const vectors = [
    {
      id: 0,
      code: 'VEC-WEB-01',
      title: 'Full-Stack Web Engineering',
      headline: 'Next.js 15, React 19 & Type-Safe Cloud Runtimes',
      summary: 'Building ultra-responsive, zero-layout-shift web applications with server components, streaming SSR, and resilient webhook event ingestion.',
      specs: 'Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM, RESTful APIs, Webhooks.',
      capabilities: [
        'Next.js 15 App Router architecture with Server Components (RSC)',
        'TypeScript end-to-end type safety spanning DB schemas to UI props',
        'Idempotent webhook ingestion with automatic signature verification',
        'Optimistic UI mutations backed by Prisma ORM transactions'
      ],
      diagram: [
        { label: 'Client (React 19)', detail: 'Sub-50ms Hydration' },
        { label: 'Next.js Server Actions', detail: 'Zero-Waterfall Execution' },
        { label: 'Prisma Client', detail: 'Type-Safe Connection Pool' },
        { label: 'PostgreSQL Relational DB', detail: 'Neon Serverless Storage' },
      ],
      codeSample: `// Next.js 15 Server Action & Idempotent Webhook Verification
import { headers } from 'next/headers';
import prisma from '@/lib/prisma';

export async function processInfrastructureWebhook(rawBody: string) {
  'use server';
  const headerList = await headers();
  const signature = headerList.get('x-infra-signature');
  
  if (!verifyHmac(rawBody, signature, process.env.WEBHOOK_SECRET)) {
    throw new Error('Unauthorized payload signature');
  }

  const payload = JSON.parse(rawBody);
  const event = await prisma.rackEvent.create({
    data: {
      deviceId: payload.deviceId,
      uLocation: payload.uLocation,
      telemetry: payload.metrics,
      status: payload.severity
    }
  });

  return { dispatched: true, eventId: event.id };
}`
    },
    {
      id: 1,
      code: 'VEC-SQL-02',
      title: 'Data Analytics & SQL Insights',
      headline: 'Relational Intelligence, Window Computations & Time-Series Aggregations',
      summary: 'Executing complex moving averages, volatility metrics, and multi-tier aggregations directly in PostgreSQL memory for instantaneous dashboard rendering.',
      specs: 'PostgreSQL (Neon.tech), SQL Window Functions (SMA/EMA calculations), Time-Series Aggregations, Python (Pandas/NumPy), Recharts Data Visualizations.',
      capabilities: [
        'SQL Window Functions: OVER (PARTITION BY ... ORDER BY ... ROWS BETWEEN)',
        'On-the-fly moving averages (20-day SMA, 50-day EMA) inside single queries',
        'Time-series bucket aggregation downsampling millions of data points',
        'Python ETL preprocessing pipeline using Pandas and NumPy dataframes'
      ],
      diagram: [
        { label: 'Market / Telemetry Ingestion', detail: 'Real-Time Ticks Stream' },
        { label: 'PostgreSQL Window Engine', detail: 'PARTITION & Sliding Rows' },
        { label: 'Time-Bucket Downsampling', detail: '5m / 1h Aggregations' },
        { label: 'Recharts Frontend Canvas', detail: 'Zero-Lag SVG Visuals' },
      ],
      codeSample: `-- PostgreSQL Window Analytics: Real-Time SMA & Dynamic Volatility
WITH TickRollup AS (
  SELECT 
    asset_ticker,
    recorded_at,
    unit_price,
    -- 20-Interval Simple Moving Average (SMA)
    AVG(unit_price) OVER (
      PARTITION BY asset_ticker 
      ORDER BY recorded_at 
      ROWS BETWEEN 19 PRECEDING AND CURRENT ROW
    ) AS sma_20,
    -- Rolling 30-Day Volatility Standard Deviation
    STDDEV(unit_price) OVER (
      PARTITION BY asset_ticker 
      ORDER BY recorded_at 
      ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS rolling_volatility
  FROM telemetry_price_ticks
)
SELECT * FROM TickRollup 
WHERE recorded_at >= NOW() - INTERVAL '7 days'
ORDER BY recorded_at DESC;`
    },
    {
      id: 2,
      code: 'VEC-AI-03',
      title: 'Applied AI & Automation Workflows',
      headline: 'Multimodal Vision OCR, Gemini Reasoning & n8n Pipeline Synthesis',
      summary: 'Orchestrating end-to-end intelligent pipelines that inspect physical hardware shipping papers, extract line-item serial numbers, and trigger automated webhook dispatches.',
      specs: 'Gemini & OpenAI API integration, Multimodal Vision & OCR document processing, n8n/Make automated pipelines, JSON structured output prompting.',
      capabilities: [
        'Multimodal Vision OCR extracting dense hardware invoices with 99%+ accuracy',
        'Strict JSON response schema validation guaranteeing deterministic DB writes',
        'n8n automated workflow bridges synchronizing Slack, email, and ERP databases',
        'Autonomous sentiment classification calibrated with quantitative confidence weights'
      ],
      diagram: [
        { label: 'Physical Invoice Photo', detail: 'High-Res Optical Scan' },
        { label: 'Gemini 2.5 Flash Vision', detail: 'Multimodal Token Parsing' },
        { label: 'Structured JSON Validator', detail: 'Zod Response Schema' },
        { label: 'n8n Event Automation', detail: 'ERP & DB Auto-Commit' },
      ],
      codeSample: `// Gemini Multimodal Vision Document Extraction with Strict Schema
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({});

export async function parseInvoiceDocument(base64Image: string) {
  const result = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
      { text: 'Extract hardware inventory lines with serial numbers, quantities, and cost.' }
    ],
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          invoiceId: { type: Type.STRING },
          vendor: { type: Type.STRING },
          totalAmount: { type: Type.NUMBER },
          items: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                serialNumber: { type: Type.STRING },
                partName: { type: Type.STRING },
                quantity: { type: Type.INTEGER },
                unitCost: { type: Type.NUMBER }
              },
              required: ['serialNumber', 'partName', 'quantity']
            }
          }
        },
        required: ['invoiceId', 'vendor', 'items']
      }
    }
  });

  return JSON.parse(result.text);
}`
    },
    {
      id: 3,
      code: 'VEC-INF-04',
      title: 'IT & Physical Infrastructure',
      headline: 'Datacenter Rack Deployments, 802.1Q Switching & Linux Daemons',
      summary: 'Engineering physical datacenter rack elevations (1U through 42U), calculating thermal airflow distribution, segmenting VLANs across managed switches, and managing Linux daemon clusters.',
      specs: 'Server rack elevation management (1U–42U), managed switch VLAN configurations, port-to-port cable tracing, AWS EC2, PM2 process management, Termux/Linux operations.',
      capabilities: [
        'Complete 42U rack density planning: PDUs, servers, SAN storage, and UPS banks',
        'Managed switch configuration: 802.1Q VLANs, trunk links, access control lists',
        'Port-to-port optical fiber LC & CAT6A cable routing and loss certification',
        'Daemon resilience with Linux systemd units, PM2 clusters, and AWS EC2 instances'
      ],
      diagram: [
        { label: 'Datacenter Facility', detail: 'Redundant 32A Dual PDU' },
        { label: 'Cisco Core Switching', detail: '802.1Q VLAN Segmentation' },
        { label: '42U Compute & SAN', detail: 'High-Density Rack Elevation' },
        { label: 'Linux Daemon Fleet', detail: 'PM2 & systemd Monitoring' },
      ],
      codeSample: `# Linux Daemon & Managed Switching Infrastructure Configuration
# 1. PM2 Zero-Downtime Cluster Initialization
pm2 start dist/server.js -i max --name "core-cluster" \\
  --max-memory-restart 1500M \\
  --exp-backoff-restart-delay=100

# 2. Managed Switch Configuration (VLAN Segmentation & Trunking)
interface GigabitEthernet1/0/1
 description UPLINK_TO_CORE_SWITCH
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40
 spanning-tree portfast trunk
!
interface GigabitEthernet1/0/24
 description HYPERVISOR_HOST_01
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
exit`
    }
  ];

  return (
    <section id="vectors" className="py-20 lg:py-28 border-b border-white/10 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Core Architectural Vectors</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Four Dimensions of Technical Mastery
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Bridging the entire spectrum from physical copper &amp; fiber datacenter switching up to reactive user interfaces and autonomous multimodal AI agents.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
            <span className="text-cyan-400 font-bold">MODE:</span>
            <span>Interactive Vector Inspection</span>
          </div>
        </div>

        {/* 4 Vector Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {vectors.map((vec) => {
            const isSelected = selectedVector === vec.id;
            return (
              <div
                key={vec.id}
                onClick={() => setSelectedVector(vec.id)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-500/10 -translate-y-1'
                    : 'bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300 font-semibold border border-white/5">
                      {vec.code}
                    </span>
                    <span className="text-slate-400 font-bold">0{vec.id + 1}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white mb-2">
                    {vec.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {vec.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                    {isSelected ? 'Inspecting' : 'Click to View'}
                  </span>
                  <ChevronRight size={14} className={`transition-transform ${isSelected ? 'rotate-90 text-cyan-300' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Vector Deep-Dive Dossier */}
        <div className="rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Dossier Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                <span>{vectors[selectedVector].code}</span>
                <span>&bull;</span>
                <span>Active Vector Deep-Dive</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {vectors[selectedVector].headline}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 max-w-md">
              <span className="text-[11px] font-mono text-slate-300 block font-medium">
                {vectors[selectedVector].specs}
              </span>
            </div>
          </div>

          {/* 2-Column Content: Flow & Code */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Architectural Pipeline */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold mb-3">
                  Production Pipeline Flow
                </span>
                <div className="space-y-2.5">
                  {vectors[selectedVector].diagram.map((node, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center text-[10px] font-bold">
                          {i + 1}
                        </span>
                        <span className="text-white font-semibold">{node.label}</span>
                      </div>
                      <span className="text-slate-400 text-[11px]">{node.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold mb-3">
                  Engineered Capabilities
                </span>
                <div className="space-y-2">
                  {vectors[selectedVector].capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Code / Query / Config Snippet */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-5 border border-white/10 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="text-slate-200 font-semibold">
                    {selectedVector === 0 ? 'server-actions.ts' : selectedVector === 1 ? 'window-analytics.sql' : selectedVector === 2 ? 'gemini-vision-ocr.ts' : 'datacenter-config.sh'}
                  </span>
                </div>
                <span className="text-emerald-400 text-[10px] font-bold">PRODUCTION VERIFIED</span>
              </div>
              <pre className="text-slate-200 leading-relaxed font-mono-numbers">
                <code>{vectors[selectedVector].codeSample}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
