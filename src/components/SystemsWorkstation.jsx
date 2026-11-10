import React, { useState } from 'react';
import { 
  Server, 
  TrendingUp, 
  Scan, 
  Cpu, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  ExternalLink,
  Zap,
  Play,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Table
} from 'lucide-react';

export default function SystemsWorkstation() {
  const [activeSystemId, setActiveSystemId] = useState('infratrack');
  const [activeTabMode, setActiveTabMode] = useState('interactive'); // 'interactive' | 'telemetry' | 'architecture'

  // InfraTrack Simulator State
  const [selectedU, setSelectedU] = useState(41);
  const [selectedPort, setSelectedPort] = useState('Eth1/1');

  // FinPulse Simulator State
  const [ticker, setTicker] = useState('AAPL');
  const [sentimentQuery, setSentimentQuery] = useState('NVIDIA unveils next-generation Blackwell datacenter superclusters with 3.2x power efficiency');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sentimentResult, setSentimentResult] = useState({
    score: 89,
    label: 'STRONG BULLISH',
    smaCross: '20-SMA Breakout Confirmed',
    confidence: '97.4%'
  });

  // OmniSupply Simulator State
  const [isScanning, setIsScanning] = useState(false);
  const [extractedInvoice, setExtractedInvoice] = useState({
    invoiceId: 'INV-2026-98745',
    vendor: 'Intel Enterprise Compute Group',
    total: '$18,450.00',
    timestamp: '2026-11-08 14:22:01 UTC',
    items: [
      { serial: 'SK-C12900K-A8', name: 'Intel Xeon Scalable 64-Core Processors', qty: 4, unitPrice: '$2,850.00', status: 'VERIFIED' },
      { serial: 'SK-DDR5-64G-01', name: '64GB ECC Registered DDR5-5600 RDIMM', qty: 16, unitPrice: '$180.00', status: 'VERIFIED' },
      { serial: 'SK-NVME-768T-X', name: '7.68TB Enterprise U.2 NVMe SSD Storage', qty: 2, unitPrice: '$540.00', status: 'VERIFIED' },
      { serial: 'SK-100G-QSFP28', name: '100GBASE-LR4 QSFP28 Optical Transceivers', qty: 8, unitPrice: '$320.00', status: 'VERIFIED' }
    ]
  });

  const systems = [
    {
      id: 'infratrack',
      icon: Server,
      name: 'InfraTrack',
      subtitle: 'Enterprise IT Asset & Infrastructure Dashboard',
      accentColor: 'from-cyan-500 to-blue-600',
      tagColor: 'text-cyan-400',
      techBadges: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL'],
      features: [
        'Interactive 42U rack elevation visualizer with real-time slot occupancy',
        'Port-to-port cable tracing matrix mapping fiber LC and CAT6A routes',
        'Serverless relational asset database with instant search & thermal status'
      ],
      image: '/src/assets/images/project_infratrack_1794249529794.jpg',
      leadDescription: 'Bridging physical datacenter rack management with modern serverless PostgreSQL telemetry and single-mode optical fiber topology routing.',
      metrics: [
        { label: 'Rack Standard', value: '42U High-Density' },
        { label: 'Port Resolution', value: '100% Traced' },
        { label: 'Query Cache', value: '< 45ms P99' }
      ]
    },
    {
      id: 'finpulse',
      icon: TrendingUp,
      name: 'FinPulse AI',
      subtitle: 'Autonomous Financial Analytics & Sentiment Engine',
      accentColor: 'from-emerald-500 to-teal-600',
      tagColor: 'text-emerald-400',
      techBadges: ['Next.js', 'PostgreSQL', 'Recharts', 'Gemini API', 'n8n Automation'],
      features: [
        'Real-time market data analytics using SQL window functions (SMA/EMA)',
        'AI sentiment processing on news feeds with calibrated confidence gauges',
        'Automated webhook alerts triggering institutional trade notifications'
      ],
      image: '/src/assets/images/project_finpulse_1794249530007.jpg',
      leadDescription: 'Autonomous market analytics platform calculating multi-interval window aggregations in PostgreSQL memory and applying Gemini reasoning to incoming news feeds.',
      metrics: [
        { label: 'Window Algorithms', value: '20-SMA / 50-EMA' },
        { label: 'Sentiment Calibrated', value: '96.8% Precision' },
        { label: 'Webhook Dispatch', value: '< 160ms' }
      ]
    },
    {
      id: 'omnisupply',
      icon: Scan,
      name: 'OmniSupply AI',
      subtitle: 'Operations & Vision OCR Logistics Platform',
      accentColor: 'from-purple-500 to-pink-600',
      tagColor: 'text-purple-400',
      techBadges: ['Next.js', 'Tailwind CSS', 'Gemini Vision OCR', 'PostgreSQL'],
      features: [
        'Supply chain inventory management with hardware serialized tracking',
        'Integrated Multimodal AI OCR scanning physical invoices into DB records',
        'Automated SKU conflict resolution & warehouse bay routing'
      ],
      image: '/src/assets/images/project_omnisupply_1794249530138.jpg',
      leadDescription: 'Next-generation warehouse operations engine using Gemini 2.5 Flash Vision to parse physical hardware paper invoices directly into relational PostgreSQL records.',
      metrics: [
        { label: 'Extraction Accuracy', value: '99.4% Line-Items' },
        { label: 'OCR Processing', value: '1.4s per Scan' },
        { label: 'Serialized Assets', value: '4,250+ Tracked' }
      ]
    }
  ];

  const currentSystem = systems.find(s => s.id === activeSystemId) || systems[0];

  const handleTriggerSentiment = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setSentimentResult({
        score: Math.floor(Math.random() * 15) + 82,
        label: 'STRONG BULLISH',
        smaCross: 'Golden Cross (20-SMA over 50-EMA)',
        confidence: '98.1%'
      });
    }, 600);
  };

  const handleSimulateInvoiceScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setExtractedInvoice({
        invoiceId: `INV-2026-${Math.floor(Math.random() * 80000 + 10000)}`,
        vendor: 'Cisco Enterprise Optical Networks',
        total: '$12,680.00',
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
        items: [
          { serial: 'CS-QSFP28-100G', name: '100GBASE-LR4 QSFP28 Transceiver Module', qty: 12, unitPrice: '$650.00', status: 'VERIFIED' },
          { serial: 'CS-FIBER-LC-15M', name: 'Duplex Single-Mode Fiber LC/LC Patch Cable', qty: 30, unitPrice: '$35.00', status: 'VERIFIED' },
          { serial: 'CS-CAT6A-1000F', name: '1000ft Bulk Shielded CAT6A Plenum Spool', qty: 4, unitPrice: '$420.00', status: 'VERIFIED' }
        ]
      });
    }, 650);
  };

  return (
    <section id="workstation" className="py-20 lg:py-28 border-b border-white/10 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Workstation Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Flagship Systems Workstation</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Interactive System Prototypes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Test and inspect live functional prototypes of my three flagship enterprise deployments.
            </p>
          </div>

          {/* System Tab Selector */}
          <div className="flex items-center p-1.5 rounded-2xl bg-slate-900 border border-white/10">
            {systems.map((s) => {
              const Icon = s.icon;
              const isSelected = activeSystemId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSystemId(s.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Unified Workstation Console */}
        <div className="rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Metadata Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 mb-8 border-b border-white/10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  SYSTEM CORE // {currentSystem.name.toUpperCase()}
                </span>
                <span className="text-slate-500">&bull;</span>
                <span className="text-xs font-mono text-slate-400">{currentSystem.subtitle}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {currentSystem.leadDescription}
              </h3>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2">
              {currentSystem.techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Mode Switcher Inside Workstation */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTabMode('interactive')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeTabMode === 'interactive'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play size={12} />
                <span>Live Interactive Prototype</span>
              </button>

              <button
                onClick={() => setActiveTabMode('telemetry')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeTabMode === 'telemetry'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye size={12} />
                <span>High-Res Dashboard Capture</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Interactive Sandbox Running</span>
            </div>
          </div>

          {/* MAIN WORKSTATION VIEWPORT */}
          {activeTabMode === 'interactive' ? (
            <div>
              {/* 1. INFRATRACK INTERACTIVE CONSOLE */}
              {currentSystem.id === 'infratrack' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Rack Elevation Visualizer */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                      <span className="text-cyan-400 font-bold">DATACENTER RACK 14 ELEVATION</span>
                      <span className="text-slate-400">42U Physical Array</span>
                    </div>

                    <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                      {[
                        { u: 42, name: 'PDU Alpha - 3-Phase 32A Redundant', type: 'PDU', color: 'bg-slate-800 text-slate-300' },
                        { u: 41, name: 'CORE SWITCH 01 (Cisco Nexus 9300 48xSFP+)', type: 'SWITCH', color: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' },
                        { u: 40, name: 'FIBER PATCH PANEL 01 (48-Port LC Duplex)', type: 'PATCH', color: 'bg-slate-900 text-teal-300' },
                        { u: 39, name: 'FIREWALL 1 (FortiGate 200F Dual WAN)', type: 'SECURITY', color: 'bg-amber-950/60 text-amber-300 border-amber-500/30' },
                        { u: 38, name: 'AGGREGATION SWITCH 01 (10GbE SFP+)', type: 'SWITCH', color: 'bg-cyan-950/60 text-cyan-300' },
                        { u: 36, name: 'SRV-WEB-01 (Dell PowerEdge R650 1U Compute)', type: 'SERVER', color: 'bg-slate-900 text-slate-200' },
                        { u: 34, name: 'SRV-WEB-02 (Dell PowerEdge R650 1U Compute)', type: 'SERVER', color: 'bg-slate-900 text-slate-200' },
                        { u: 32, name: 'SRV-APP-01 (Dell PowerEdge R750 2U Dual Xeon)', type: 'SERVER', color: 'bg-slate-900 text-slate-200' },
                        { u: 28, name: 'SAN-STORAGE-01 (PureStorage FlashArray//X)', type: 'SAN', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' },
                        { u: 24, name: 'SRV-DB-PRIMARY (PostgreSQL Cluster Node)', type: 'DATABASE', color: 'bg-blue-950/60 text-blue-300' },
                      ].map((slot) => (
                        <div
                          key={slot.u}
                          onClick={() => setSelectedU(slot.u)}
                          className={`p-2 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition-all ${
                            selectedU === slot.u
                              ? 'border-cyan-400 bg-cyan-900/40 text-white shadow-lg'
                              : `${slot.color} border-white/5 hover:border-white/20`
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-8 text-center py-0.5 rounded bg-black/50 text-[10px] text-cyan-400 font-bold">
                              U{slot.u}
                            </span>
                            <span className="font-semibold truncate max-w-[210px]">{slot.name}</span>
                          </div>
                          <span className="text-[10px] opacity-75">{slot.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Port Tracing Matrix */}
                  <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 border border-white/10 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-bold block">
                          PORT-TO-PORT OPTICAL CABLE ROUTING
                        </span>
                        <span className="text-sm font-bold text-white">
                          Target Unit: U{selectedU} &bull; Fiber Fabric Matrix
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        100GbE Optical Link
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs text-slate-400 font-mono block">
                        Select Switch Port to Query Optical Path:
                      </span>
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                        {['Eth1/1', 'Eth1/2', 'Eth1/3', 'Eth1/4', 'Eth1/5', 'Eth1/6', 'Eth1/7', 'Eth1/8'].map((port) => (
                          <button
                            key={port}
                            onClick={() => setSelectedPort(port)}
                            className={`py-2 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                              selectedPort === port
                                ? 'bg-cyan-500 text-slate-950 shadow-md ring-2 ring-cyan-400'
                                : 'bg-slate-950 text-slate-300 border border-white/10 hover:border-cyan-500/40'
                            }`}
                          >
                            {port}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 space-y-2 text-xs font-mono">
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Transceiver Type:</span>
                        <span className="text-cyan-300 font-bold">100GBASE-SR4 QSFP28 &bull; 850nm MPO</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Patch Panel Interconnect:</span>
                        <span className="text-slate-200">Panel 01 [Port {selectedPort === 'Eth1/1' ? '12' : '18'}] &rarr; Trunk 04</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Terminating Endpoint:</span>
                        <span className="text-emerald-300 font-bold">Datacenter Rack 15 &bull; U41 Aggregation Switch</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-400">Certified Optical Loss:</span>
                        <span className="text-emerald-400">0.08 dB (PASSED TIA-568)</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>PostgreSQL Relational Schema: RackDevice &bull; PortMatrix</span>
                      <span className="text-cyan-400">Neon Synced</span>
                    </div>
                  </div>

                </div>
              )}

              {/* 2. FINPULSE AI INTERACTIVE CONSOLE */}
              {currentSystem.id === 'finpulse' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Candlestick & Moving Average Canvas */}
                  <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold font-mono text-white">{ticker}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold">
                          $188.42 (+3.12%)
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        {['AAPL', 'NVDA', 'MSFT', 'AMZN'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setTicker(t)}
                            className={`px-2.5 py-1 text-xs font-mono rounded ${
                              ticker === t ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive SVG Chart Rendering Window Calculations */}
                    <div className="h-48 w-full bg-slate-950 rounded-xl p-3 border border-white/5 relative flex flex-col justify-end overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 400 130" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="finGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,100 Q50,70 100,80 T200,55 T300,35 T400,20 L400,130 L0,130 Z"
                          fill="url(#finGradient)"
                        />
                        {/* 20-Day SMA Curve */}
                        <path
                          d="M0,100 Q50,70 100,80 T200,55 T300,35 T400,20"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="2.5"
                        />
                        {/* 50-Day EMA Line */}
                        <path
                          d="M0,105 Q60,95 120,85 T240,65 T360,45 T400,40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 px-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-0.5 bg-cyan-400" />
                          <span>20-Day SMA (Window Aggregate)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-0.5 bg-emerald-400" />
                          <span>50-Day EMA</span>
                        </span>
                        <span className="text-emerald-400 font-bold">SQL Window: OVER (PARTITION)</span>
                      </div>
                    </div>

                    <div className="p-3 bg-black/60 rounded-xl border border-white/5 text-xs font-mono text-cyan-300">
                      <span className="text-slate-400">PostgreSQL Execution: </span>
                      <span className="text-emerald-400">AVG(close) OVER (PARTITION BY ticker ORDER BY time ROWS 19 PRECEDING)</span>
                    </div>
                  </div>

                  {/* Gemini Sentiment & Webhook Trigger */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono font-bold text-purple-400">
                          GEMINI REASONING SENTIMENT
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">n8n Automation</span>
                      </div>

                      <div className="mt-3 space-y-2">
                        <label className="text-xs text-slate-300 font-mono block">
                          Ingested Market News Wire:
                        </label>
                        <textarea
                          value={sentimentQuery}
                          onChange={(e) => setSentimentQuery(e.target.value)}
                          rows={3}
                          className="w-full text-xs font-mono p-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400">Calibrated Score:</span>
                          <span className="text-sm font-bold font-mono text-emerald-400">
                            {sentimentResult.score}/100 &bull; {sentimentResult.label}
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${sentimentResult.score}%` }}
                          />
                        </div>
                        <div className="text-[11px] text-slate-300 pt-1 font-mono">
                          {sentimentResult.smaCross} &bull; Confidence {sentimentResult.confidence}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleTriggerSentiment}
                      disabled={isAnalyzing}
                      className="w-full py-3 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-purple-600/20"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Synthesizing Gemini Sentiment Vectors...</span>
                        </>
                      ) : (
                        <>
                          <Zap size={14} />
                          <span>Dispatch AI Sentiment &amp; Webhook Alert</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              )}

              {/* 3. OMNISUPPLY AI INTERACTIVE CONSOLE */}
              {currentSystem.id === 'omnisupply' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Optical Document Scanner */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          MULTIMODAL HARDWARE SCANNER
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Optical Vision Feed</span>
                      </div>

                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-slate-950 mt-3 flex items-center justify-center">
                        <img
                          src="/src/assets/images/project_omnisupply_1794249530138.jpg"
                          alt="Hardware invoice scan"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />

                        {/* Scanner Bounding Reticle */}
                        <div className="absolute inset-4 border-2 border-cyan-400 rounded-lg bg-cyan-500/10 flex flex-col justify-between p-2 pointer-events-none">
                          <span className="text-[10px] font-mono bg-cyan-500 text-slate-950 px-2 py-0.5 rounded font-bold w-fit">
                            VISION RETICLE // SERIAL_MATRIX
                          </span>
                          <span className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-1 rounded w-fit">
                            OCR Confidence: 99.4%
                          </span>
                        </div>

                        {isScanning && (
                          <div className="absolute inset-0 bg-cyan-500/25 backdrop-blur-xs flex items-center justify-center">
                            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-400">
                              <RefreshCw size={14} className="animate-spin" />
                              <span>Tokenizing Hardware Serial Tags...</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleSimulateInvoiceScan}
                      disabled={isScanning}
                      className="w-full py-3 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-cyan-500/20"
                    >
                      <Scan size={15} />
                      <span>Scan New Hardware Manifest</span>
                    </button>
                  </div>

                  {/* Relational Table Extraction */}
                  <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono text-emerald-400 font-bold block">
                          POSTGRES RELATIONAL DATABASE INGESTION
                        </span>
                        <span className="text-sm font-bold text-white">
                          {extractedInvoice.invoiceId} &bull; {extractedInvoice.vendor}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1 rounded-lg">
                        {extractedInvoice.total}
                      </span>
                    </div>

                    <div className="overflow-x-auto max-h-[300px]">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400">
                            <th className="pb-2">Serial Number</th>
                            <th className="pb-2">Component Description</th>
                            <th className="pb-2">Qty</th>
                            <th className="pb-2">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {extractedInvoice.items.map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5">
                              <td className="py-2.5 text-cyan-300 font-bold">{row.serial}</td>
                              <td className="py-2.5 text-slate-200">{row.name}</td>
                              <td className="py-2.5 text-slate-400">{row.qty}</td>
                              <td className="py-2.5">
                                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                                  <CheckCircle2 size={10} /> {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Gemini 2.5 Flash Vision &bull; JSON Schema Ingest</span>
                      <span className="text-emerald-400">Direct DB Insert Verified</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          ) : (
            /* TELEMETRY / IMAGE CAPTURE VIEW */
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 aspect-[16/9] relative">
                <img
                  src={currentSystem.image}
                  alt={currentSystem.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-white/15 text-white">
                    {currentSystem.name} &bull; Production Architecture Layout
                  </div>
                  <span className="text-cyan-400 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-cyan-500/30">
                    High-Res Spec Verified
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Metric & Features Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentSystem.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="font-heading font-extrabold text-xl text-white font-mono-numbers">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
