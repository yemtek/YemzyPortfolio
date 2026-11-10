import React, { useState } from 'react';
import { 
  X, 
  Server, 
  TrendingUp, 
  Scan, 
  Cpu, 
  Activity, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RefreshCw, 
  Zap,
  Code,
  Layers,
  Database
} from 'lucide-react';

export default function ProjectDemoModal({ project, onClose }) {
  if (!project) return null;

  // InfraTrack interactive state: Rack elevation & port selection
  const [selectedU, setSelectedU] = useState(41);
  const [selectedPort, setSelectedPort] = useState('Eth1/1');
  const [portFilter, setPortFilter] = useState('all');

  // FinPulse interactive state: Ticker & Timeframe
  const [ticker, setTicker] = useState('AAPL');
  const [sentimentQuery, setSentimentQuery] = useState('Apple launches high-density datacenter silicon with 40% compute efficiency boost');
  const [analyzingSentiment, setAnalyzingSentiment] = useState(false);
  const [sentimentScore, setSentimentScore] = useState({ score: 86, label: 'BULLISH', confidence: '94.2%', impact: 'Positive Infrastructure Growth' });

  // OmniSupply interactive state: OCR Invoice Scan
  const [isScanning, setIsScanning] = useState(false);
  const [extractedData, setExtractedData] = useState({
    invoiceNumber: 'INV-2026-98745',
    vendor: 'Intel Datacenter Systems Corp',
    date: '2026-11-04',
    total: '$14,850.00',
    items: [
      { serial: 'SK-C12900K-A8', name: 'Intel Xeon Scalable 64-Core', qty: 4, unitPrice: '$2,850.00', status: 'VERIFIED' },
      { serial: 'SK-DDR5-64G-01', name: '64GB ECC Registered DDR5-5600', qty: 16, unitPrice: '$180.00', status: 'VERIFIED' },
      { serial: 'SK-NVME-768T-X', name: '7.68TB Enterprise U.2 NVMe SSD', qty: 2, unitPrice: '$540.00', status: 'VERIFIED' },
    ]
  });

  const handleRunSentiment = () => {
    setAnalyzingSentiment(true);
    setTimeout(() => {
      setAnalyzingSentiment(false);
      setSentimentScore({
        score: Math.floor(Math.random() * 20) + 78,
        label: 'BULLISH',
        confidence: '96.8%',
        impact: 'High institutional confidence & volume cross over 20-day SMA'
      });
    }, 600);
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setExtractedData({
        invoiceNumber: `INV-2026-${Math.floor(Math.random() * 80000 + 10000)}`,
        vendor: 'Cisco Enterprise Optical Networks',
        date: '2026-11-08',
        total: '$8,420.00',
        items: [
          { serial: 'CS-QSFP28-100G', name: '100GBASE-LR4 QSFP28 Transceiver', qty: 8, unitPrice: '$650.00', status: 'VERIFIED' },
          { serial: 'CS-FIBER-LC-10M', name: 'Duplex LC-LC Single-Mode Fiber 10M', qty: 24, unitPrice: '$35.00', status: 'VERIFIED' },
          { serial: 'CS-CAT6A-SHLD', name: 'Shielded CAT6A Patch Pack 10GbE', qty: 12, unitPrice: '$45.00', status: 'VERIFIED' },
        ]
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl flex flex-col glow-cyan"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-[#090d16]/95 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.id === 'infratrack' && <Server size={22} />}
              {project.id === 'finpulse' && <TrendingUp size={22} />}
              {project.id === 'omnisupply' && <Scan size={22} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                  Interactive System Demo
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                  LIVE SIMULATOR
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">

          {/* PROJECT 1: INFRATRACK INTERACTIVE DEMO */}
          {project.id === 'infratrack' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* 42U Rack Elevation Visualizer */}
                <div className="lg:col-span-5 bg-slate-950/90 rounded-xl p-4 border border-white/10 flex flex-col">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                    <span className="text-cyan-300 font-bold">DATACENTER RACK 14 (42U)</span>
                    <span className="text-emerald-400">9.2 kW / 21&deg;C</span>
                  </div>

                  <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {[
                      { u: 42, name: 'PDU Alpha - 3-Phase 32A', type: 'pdu', color: 'bg-slate-800 text-slate-300' },
                      { u: 41, name: 'CORE SWITCH 01 (Cisco Nexus 9300)', type: 'switch', color: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40' },
                      { u: 40, name: 'FIBER PATCH PANEL 01 (48-Port LC)', type: 'panel', color: 'bg-slate-900 text-teal-300' },
                      { u: 39, name: 'FIREWALL 1 (FortiGate 200F)', type: 'firewall', color: 'bg-amber-950/60 text-amber-300 border-amber-500/30' },
                      { u: 38, name: 'AGGREGATION SWITCH 01 (48x 10GbE)', type: 'switch', color: 'bg-cyan-950/60 text-cyan-300' },
                      { u: 36, name: 'SRV-WEB-01 (Dell R650 1U Compute)', type: 'server', color: 'bg-slate-900 text-slate-200' },
                      { u: 34, name: 'SRV-WEB-02 (Dell R650 1U Compute)', type: 'server', color: 'bg-slate-900 text-slate-200' },
                      { u: 32, name: 'SRV-APP-01 (Dell R750 2U Dual Xeon)', type: 'server', color: 'bg-slate-900 text-slate-200' },
                      { u: 28, name: 'SAN-STORAGE-01 (PureStorage FlashArray)', type: 'storage', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' },
                      { u: 24, name: 'SRV-DB-PRIMARY (PostgreSQL Cluster Node)', type: 'db', color: 'bg-blue-950/60 text-blue-300' },
                      { u: 20, name: 'UPS BATTERY BANK A (APC Symmetra)', type: 'ups', color: 'bg-slate-900 text-slate-400' },
                    ].map((slot) => (
                      <div
                        key={slot.u}
                        onClick={() => setSelectedU(slot.u)}
                        className={`p-2 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition-all ${
                          selectedU === slot.u
                            ? 'border-cyan-400 bg-cyan-900/30 text-white shadow-md'
                            : `${slot.color} border-white/5 hover:border-white/20`
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-7 text-center py-0.5 rounded bg-black/40 text-[10px] text-cyan-400 font-bold">
                            U{slot.u}
                          </span>
                          <span className="font-semibold truncate max-w-[190px]">{slot.name}</span>
                        </div>
                        <span className="text-[10px] opacity-70 uppercase font-mono">{slot.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Port-to-Port Cable Tracing Matrix */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 block font-bold">
                          PORT-TO-PORT CABLE TRACING MATRIX
                        </span>
                        <span className="text-sm font-bold text-white">
                          Selected Device: U{selectedU} &bull; Fiber Fabric Routing
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-emerald-300 border border-emerald-500/30">
                        100Gbps Active
                      </span>
                    </div>

                    {/* Interactive Port Grid */}
                    <div className="space-y-3 mb-5">
                      <div className="text-xs text-slate-400 font-mono">
                        Select Switch Port to Trace Cable Path:
                      </div>
                      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                        {['Eth1/1', 'Eth1/2', 'Eth1/3', 'Eth1/4', 'Eth1/5', 'Eth1/6', 'Eth1/7', 'Eth1/8'].map((port) => (
                          <button
                            key={port}
                            onClick={() => setSelectedPort(port)}
                            className={`py-2 px-1 text-center rounded-lg text-xs font-mono font-bold transition-all ${
                              selectedPort === port
                                ? 'bg-cyan-500 text-slate-950 shadow-md ring-2 ring-cyan-400'
                                : 'bg-slate-900 text-slate-300 border border-white/10 hover:border-cyan-500/40'
                            }`}
                          >
                            {port}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tracing Diagnostics Card */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2 text-xs font-mono">
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Source Port:</span>
                        <span className="text-cyan-300 font-bold">R14-U{selectedU} &bull; {selectedPort}</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Patch Route:</span>
                        <span className="text-slate-200">Panel 01 [Port 14] &rarr; Backbone Trunk B</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pb-2 border-b border-white/10">
                        <span className="text-slate-400">Destination:</span>
                        <span className="text-emerald-300 font-bold">Rack 15 &bull; U41 (Aggregation Switch 02)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="text-slate-400">Cable Spec:</span>
                        <span className="text-slate-300">OM4 Multimode LC Duplex &bull; 15m &bull; Loss: 0.12dB</span>
                      </div>
                    </div>
                  </div>

                  {/* Relational DB Schema Snapshot */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Prisma Model: DevicePort &lt;&gt; CableRoute</span>
                    <span className="text-cyan-400">PostgreSQL (Neon) Synced</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT 2: FINPULSE AI INTERACTIVE DEMO */}
          {project.id === 'finpulse' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Real-time analytical chart & window function visual */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-5 border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold font-mono text-white">{ticker}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                        $185.32 (+2.48%)
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {['AAPL', 'NVDA', 'MSFT', 'TSLA'].map((t) => (
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

                  {/* Simulated Recharts Style SVG Chart */}
                  <div className="relative h-44 w-full bg-slate-900/90 rounded-lg p-2 border border-white/5 flex flex-col justify-end overflow-hidden">
                    {/* SVG Curve */}
                    <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <path
                        d="M0,90 Q40,65 80,75 T160,50 T240,30 T320,45 T400,15 L400,120 L0,120 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* 20-day SMA Line (Cyan) */}
                      <path
                        d="M0,90 Q40,65 80,75 T160,50 T240,30 T320,45 T400,15"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2.5"
                      />
                      {/* 50-day EMA Line (Emerald) */}
                      <path
                        d="M0,95 Q50,85 100,75 T200,60 T300,50 T400,35"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 bg-cyan-400" /> 20-Day SMA (SQL Window)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 bg-emerald-400 dashed" /> 50-Day EMA
                      </span>
                      <span>Real-time Ticks</span>
                    </div>
                  </div>

                  {/* SQL Window Query Underneath */}
                  <div className="p-3 bg-black/60 rounded-lg border border-white/5 text-[11px] font-mono text-cyan-300">
                    <span className="text-slate-400">PostgreSQL Execution: </span>
                    <span className="text-emerald-400">AVG(price) OVER (PARTITION BY ticker ORDER BY time ROWS 19 PRECEDING)</span>
                  </div>
                </div>

                {/* Gemini AI Sentiment Engine & Webhook Simulator */}
                <div className="lg:col-span-5 bg-slate-950/90 rounded-xl p-5 border border-white/10 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-mono font-bold text-purple-400">
                        GEMINI REASONING SENTIMENT
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">n8n Pipeline Hook</span>
                    </div>

                    <div className="mt-3 space-y-2">
                      <label className="text-xs text-slate-300 font-mono block">
                        News Stream Headline:
                      </label>
                      <textarea
                        value={sentimentQuery}
                        onChange={(e) => setSentimentQuery(e.target.value)}
                        rows={3}
                        className="w-full text-xs font-mono p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-200 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Autonomous Score:</span>
                        <span className="text-sm font-bold font-mono text-emerald-400">
                          {sentimentScore.score}/100 &bull; {sentimentScore.label}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${sentimentScore.score}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-slate-300 pt-1">
                        {sentimentScore.impact}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleRunSentiment}
                    disabled={analyzingSentiment}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    {analyzingSentiment ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>Evaluating Market Vectors...</span>
                      </>
                    ) : (
                      <>
                        <Zap size={14} />
                        <span>Trigger AI Sentiment &amp; Webhook Alert</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT 3: OMNISUPPLY AI INTERACTIVE DEMO */}
          {project.id === 'omnisupply' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Physical Hardware Document Scanner Mockup */}
                <div className="lg:col-span-5 bg-slate-950/90 rounded-xl p-5 border border-white/10 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        MULTIMODAL HARDWARE SCANNER
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">Camera / Vision Feed</span>
                    </div>

                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                      <img
                        src="/src/assets/images/project_omnisupply_1794249530138.jpg"
                        alt="Hardware inventory scan"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Bounding box simulation overlay */}
                      <div className="absolute inset-4 border-2 border-cyan-400/80 rounded bg-cyan-400/5 flex flex-col justify-between p-2 pointer-events-none">
                        <div className="text-[10px] font-mono bg-cyan-500 text-slate-950 px-1.5 py-0.5 rounded w-fit font-bold">
                          BOUNDING BOX: INVOICE_TABLE
                        </div>
                        <div className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-1 rounded w-fit">
                          OCR Confidence: 99.4%
                        </div>
                      </div>

                      {isScanning && (
                        <div className="absolute inset-0 bg-cyan-500/20 backdrop-blur-xs flex items-center justify-center">
                          <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-400">
                            <RefreshCw size={14} className="animate-spin" />
                            <span>Parsing Vision Tokens...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="mt-4 w-full py-2.5 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Scan size={15} />
                    <span>Scan New Hardware Invoice</span>
                  </button>
                </div>

                {/* Extracted Structured JSON Database Records */}
                <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono text-emerald-400 block font-bold">
                          EXTRACTED RELATIONAL RECORDS (POSTGRES)
                        </span>
                        <span className="text-sm font-bold text-white">
                          {extractedData.invoiceNumber} &bull; {extractedData.vendor}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded">
                        {extractedData.total}
                      </span>
                    </div>

                    <div className="mt-4 overflow-x-auto">
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
                          {extractedData.items.map((item, idx) => (
                            <tr key={idx} className="hover:bg-white/5">
                              <td className="py-2.5 text-cyan-300 font-bold">{item.serial}</td>
                              <td className="py-2.5 text-slate-200">{item.name}</td>
                              <td className="py-2.5 text-slate-400">{item.qty}</td>
                              <td className="py-2.5">
                                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                                  <CheckCircle2 size={10} /> {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Gemini 2.5 Flash Vision &bull; JSON Schema Ingestion</span>
                    <span className="text-emerald-400">Direct DB Insert Verified</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Modal Footer Technical Details */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white font-bold">Tech Stack:</span>
              {project.techBadges.map((badge, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                  {badge}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
            >
              Close Simulator
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
