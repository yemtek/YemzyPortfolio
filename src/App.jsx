import React, { useState } from 'react';
import { Video, Code, PenTool, Play, Database, Image, Mail, Phone, MessageCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('video'); // Options: 'video', 'dev', 'design'

  // --- 1. VIDEO EDITOR DATA ---
  const videoData = {
    themeColor: '#38bdf8', // Blue
    role: "Performance Video Editor",
    headline: "I Turn Raw Footage Into Revenue.",
    desc: "Specializing in high-retention editing, UGC, and visual storytelling. I use data-driven hooks to stop the scroll on TikTok and Meta.",
    skills: ["Premiere Pro", "CapCut Expert", "Color Grading", "Sound Design", "Storytelling"],
    projects: [
      { title: "Saving Souls Studio", category: "Viral Storytelling", image: "https://images.unsplash.com/photo-1581888227599-779811985424?auto=format&fit=crop&w=800&q=80", desc: "AI-generated rescue stories tailored for maximum emotional retention." },
      { title: "Meta Ad Launch", category: "Performance Ad", image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80", desc: "Fast-paced product edits with dynamic captions for 3-second hook retention." },
      { title: "Link To Life", category: "Corporate Promo", image: "https://images.unsplash.com/photo-1544985338-7fe2c39d73d4?auto=format&fit=crop&w=800&q=80", desc: "Professional interview editing mixed with b-roll for brand awareness." }
    ]
  };

  // --- 2. DEVELOPER DATA ---
  const devData = {
    themeColor: '#a855f7', // Purple
    role: "Full Stack Developer",
    headline: "I Build Scalable Web Apps.",
    desc: "Bridging the gap between design and logic. I build responsive, database-backed applications using modern frameworks.",
    skills: ["React.js", "Node.js", "Supabase", "Tailwind CSS", "API Integration"],
    projects: [
      { title: "SwiftCargo Logistics", category: "Full Stack App", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", desc: "Complete logistics tracking system with Admin Dashboard and SQL database." },
      { title: "El Paso Rescue Site", category: "Frontend UI/UX", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80", desc: "Mobile-first responsive website with donation integration and forms." },
      { title: "Automation Scripts", category: "Backend Logic", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", desc: "Python scripts to automate content generation workflows." }
    ]
  };

  // --- 3. GRAPHIC DESIGNER DATA ---
  const designData = {
    themeColor: '#ec4899', // Pink
    role: "Creative Graphic Designer",
    headline: "I Craft Visual Identities That Sell.",
    desc: "From YouTube thumbnails that get clicks to full brand identities. I understand color theory, typography, and visual hierarchy.",
    skills: ["Adobe Photoshop", "Illustrator", "Canva Pro", "Brand Identity", "Social Media Kits"],
    projects: [
      { title: "Viral Thumbnails", category: "YouTube Graphics", image: "https://images.unsplash.com/photo-1626785774573-4b7993143a2d?auto=format&fit=crop&w=800&q=80", desc: "High-CTR thumbnails designed for Saving Souls Studio channel growth." },
      { title: "El Paso Brand Kit", category: "Logo & Identity", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80", desc: "Designed the Hexagon Logo, color palette, and typography system." },
      { title: "Ad Creatives", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80", desc: "Static carousel posts and banners for Meta ad campaigns." }
    ]
  };

  // Switch Logic
  let currentData;
  if (activeTab === 'video') currentData = videoData;
  else if (activeTab === 'dev') currentData = devData;
  else currentData = designData;

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">Yemzy<span style={{color: currentData.themeColor}}>Portfolio</span></div>
        
        {/* 3-WAY TOGGLE SWITCH */}
        <div className="toggle-container">
          <button className={`toggle-btn ${activeTab === 'video' ? 'active' : ''}`} onClick={() => setActiveTab('video')}>
            <Video size={16} /> Creator
          </button>
          <button className={`toggle-btn ${activeTab === 'dev' ? 'active' : ''}`} onClick={() => setActiveTab('dev')}>
            <Code size={16} /> Dev
          </button>
          <button className={`toggle-btn ${activeTab === 'design' ? 'active' : ''}`} onClick={() => setActiveTab('design')}>
            <PenTool size={16} /> Design
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div style={{color: currentData.themeColor, fontWeight:'bold', letterSpacing:'1px', marginBottom:'10px', textTransform:'uppercase'}}>
          {currentData.role}
        </div>
        <h1>{currentData.headline}</h1>
        <p>{currentData.desc}</p>

        <div className="skills-container">
          {currentData.skills.map((skill, index) => (
            <span key={index} className="skill-tag" style={{borderColor: currentData.themeColor, color: currentData.themeColor}}>
              {skill}
            </span>
          ))}
        </div>
      </header>

      {/* PROJECTS GRID */}
      <section className="grid">
        {currentData.projects.map((project, index) => (
          <div key={index} className="card" style={{borderColor: 'transparent'}}>
            <div style={{position:'relative'}}>
              <img src={project.image} className="card-img" alt={project.title} />
              <div style={{
                position:'absolute', top:'10px', right:'10px', 
                background:'rgba(0,0,0,0.7)', borderRadius:'50%', padding:'10px',
                color: currentData.themeColor
              }}>
                {/* Dynamic Icon based on tab */}
                {activeTab === 'video' ? <Play size={20} fill={currentData.themeColor}/> : 
                 activeTab === 'dev' ? <Database size={20}/> : 
                 <Image size={20}/>}
              </div>
            </div>
            <div className="card-content">
              <span style={{color: currentData.themeColor, fontSize:'0.75rem', fontWeight:'bold', textTransform:'uppercase'}}>
                {project.category}
              </span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA FOOTER */}
      <footer style={{textAlign:'center', padding:'60px 5%', borderTop:'1px solid #334155'}}>
        <h2>Ready to work together?</h2>
        <p style={{color:'#94a3b8', maxWidth:'500px', margin:'10px auto'}}>
          I bring a unique mix of technical logic, visual design, and storytelling emotion to every project.
        </p>
        
        <div style={{display:'flex', gap:'15px', justifyContent:'center', flexWrap:'wrap', marginTop:'30px'}}>
          
          {/* EMAIL BUTTON */}
          <a href="mailto:codedyemco@gmail.com" style={{
            background: currentData.themeColor, color: 'white', 
            padding:'12px 30px', borderRadius:'50px', textDecoration:'none', 
            fontWeight:'bold', display:'flex', alignItems:'center', gap:'10px',
            boxShadow: `0 4px 15px ${currentData.themeColor}40`
          }}>
            <Mail size={18}/> Email Me
          </a>

          {/* WHATSAPP BUTTON (Using your number) */}
          <a href="https://wa.me/2347053438904" target="_blank" style={{
            background: '#25D366', color: 'white', 
            padding:'12px 30px', borderRadius:'50px', textDecoration:'none', 
            fontWeight:'bold', display:'flex', alignItems:'center', gap:'10px',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
          }}>
            <MessageCircle size={18}/> WhatsApp
          </a>

        </div>
        
        <div style={{marginTop:'30px', color:'#64748b', fontSize:'0.9rem'}}>
          Joseph Yemi • +234 705 343 8904
        </div>
      </footer>
    </div>
  );
}
