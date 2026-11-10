import React from 'react';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import NavigationDock from './components/NavigationDock';
import './App.css';

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">
      
      {/* 1. HERO (Brief, Straight, Impactful with CV Download) */}
      <Hero
        onExploreProjects={() => scrollTo('projects')}
        onGetInTouch={() => scrollTo('contact')}
      />

      <main>
        {/* 2. CORE TECHNICAL COMPETENCIES (Exact from CV) */}
        <SkillsSection />

        {/* 3. FLAGSHIP ENGINEERING PROJECTS (InfraTrack, FinPulse AI, OmniSupply AI) */}
        <ProjectsSection />

        {/* 4. PROFESSIONAL EXPERIENCE (KPR Consulting, Software Consulting, Digital Solutions) */}
        <ExperienceTimeline />

        {/* 5. EDUCATION & CERTIFICATIONS (NOUN B.Sc., Google IT Support, Diploma, ALX) */}
        <EducationSection />
      </main>

      {/* 6. USER-FRIENDLY CONTACT & SOCIAL PROFILES */}
      <ContactSection />

      {/* 7. MINIMAL FLOATING QUICK NAVIGATION DOCK */}
      <NavigationDock />

    </div>
  );
}
