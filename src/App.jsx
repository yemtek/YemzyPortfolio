import React from 'react';
import './App.css';

function App() {
  // UPDATED DATA STRUCTURE: Now includes 'image' URLs
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "A full-stack admin panel to manage products and orders with real-time data.",
      stack: ["React", "Node.js", "MongoDB"],
      // Placeholder image for dashboard
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "AI Chat Assistant",
      desc: "An intelligent interface connecting to OpenAI API for natural language conversations.",
      stack: ["JavaScript", "API Integration", "CSS"],
      // Placeholder image for AI/Bot
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Crypto Tracker Pro",
      desc: "Track real-time cryptocurrency prices and market trends using public APIs.",
      stack: ["React", "Axios", "Tailwind"],
      // Placeholder image for crypto/finance
      image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div>
      <div className="background-glow"></div>

      <nav className="animate-up">
        <div className="nav-content">
          <div className="logo">&lt;Yemzy /&gt;</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container">
        
        {/* HERO SECTION - UPDATED WITH IMAGE & ANIMATION */}
        <section id="home" className="hero">
          {/* Left side text with fade up delays */}
          <div className="hero-text">
            <h1 className="animate-up delay-1">
              Building digital <br />
              <span className="gradient-text">experiences that matter.</span>
            </h1>
            <p className="animate-up delay-2">
              Hi, I'm Yemzy. A Computer Science graduate and Full Stack Developer focused on creating modern, performant web applications.
            </p>
            <div className="animate-up delay-3">
                 <a href="#work" className="btn-primary">View Projects</a>
            </div>
          </div>

          {/* Right side image with float animation */}
          <div className="profile-img-container animate-up delay-2">
            {/* PLACEHOLDER PROFILE IMAGE URL BELOW */}
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="Yemzy Profile" 
              className="profile-img"
            />
          </div>
        </section>

        {/* WORK SECTION - UPDATED CARDS */}
        <section id="work">
          <h2 className="animate-up" style={{fontSize: '2rem', marginBottom:'30px'}}>Selected Work</h2>
          <div className="card-grid animate-up delay-1">
            
            {projects.map((project, index) => (
              <div className="glass-card" key={index}>
                {/* New Image Area */}
                <img src={project.image} alt={project.title} className="project-image"/>
                
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p style={{color: '#94a3b8', fontSize:'0.95rem'}}>{project.desc}</p>
                  <div style={{marginTop: '20px'}}>
                    {project.stack.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section id="contact" style={{padding: '100px 0', textAlign: 'center'}} className="animate-up">
          <h2 className="gradient-text" style={{fontSize: '3rem'}}>Let's build together.</h2>
          <a href="mailto:yemzy@example.com" className="btn-primary animate-up delay-1">Get In Touch</a>
        </section>

        <footer>
          <p>© 2025 Yemzy. Crafted with React & CSS.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
