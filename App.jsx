import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import SocialLinks from './SocialLinks.jsx'
import useIntersectionObserver from './useIntersectionObserver.js'

export default function App(){
  const aboutRef = useIntersectionObserver()
  const experienceRef = useIntersectionObserver()
  const educationRef = useIntersectionObserver()
  const projectsRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()

  return (
    <div className="app">
      <Header />
      <Hero />

      <main className="container">
        <section id="about" className="card fade-section" ref={aboutRef}>
          <div className="about-content">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="My photo" className="about-image" />
            <div className="about-text">
              <h2>About me</h2>
              <p className="lead">Electronics Engineer passionate about technology and innovation.</p>
              <p>I am a professional dedicated to creating exceptional digital experiences. With experience in electronics and software development, I always seek to improve my skills and deliver high-quality solutions.</p>
              <p>I love learning new technologies and collaborating with talented teams to transform ideas into reality.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="card fade-section" ref={experienceRef}>
          <h2>Experience</h2>
          <Experience />
        </section>

        <section id="education" className="card fade-section" ref={educationRef}>
          <h2>Education</h2>
          <Education />
        </section>

        <section id="projects" className="card fade-section" ref={projectsRef}>
          <h2>Projects</h2>
          <div className="projects-grid">
            <ProjectCard 
              title="Smartlock - Intelligent Lock" 
              desc="Interactive educational platform with courses, videos and quizzes for users." 
              tech="React, Node.js, MongoDB" 
              url="#"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="ASTAR - Orientation Estimation of Nanosatellites" 
              desc="Mobile application to organize projects and tasks with real-time collaboration." 
              tech="React Native, Firebase, Redux" 
              url="#"
              image="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="Multistage Voltage Regulator" 
              desc="Interactive dashboard to visualize business metrics and reports in real time." 
              tech="Vue.js, D3.js, Express" 
              url="#"
              image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="High Frequency Amplifier" 
              desc="Social network focused on privacy with posts, comments and messaging." 
              tech="Next.js, PostgreSQL, WebSocket" 
              url="#"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="Robust Motion Planner for Autonomous Robots" 
              desc="Booking platform for hotels and restaurants with integrated payments." 
              tech="React, Stripe API, Django" 
              url="#"
              image="https://images.unsplash.com/photo-1460925895917-afdab036c0b2?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="Inventory Manager" 
              desc="Inventory management system with reports, alerts and stock control." 
              tech="TypeScript, MySQL, Electron" 
              url="#"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="Vector-based Paper Search Agent" 
              desc="Intelligent academic paper search engine using vector embeddings and semantic search." 
              tech="Python, FastAPI, Vector DB, LLM" 
              url="#"
              image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="Antenna Position Estimator with AI" 
              desc="Antenna localization system using neural networks and signal data to optimize coverage." 
              tech="TensorFlow, Python, GIS, SQL" 
              url="#"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
            />
          </div>
        </section>

        <section id="awards" className="card fade-section" ref={contactRef}>
          <h2>Awards and Publications</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best Innovation Project</h3>
              <p className="award-org">Hackathon Tech 2023</p>
              <p className="award-desc">Winning project in the innovation category for its social impact and practical application.</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🥈</div>
              <h3>Developer of the Year</h3>
              <p className="award-org">Tech Community Awards 2023</p>
              <p className="award-desc">Recognition for significant contributions to the development community.</p>
            </div>
            <div className="award-item">
              <div className="award-icon">📄</div>
              <h3>Machine Learning in Production</h3>
              <p className="award-org">Journal of Software Engineering</p>
              <p className="award-desc">Paper published on best practices in ML model deployment.</p>
            </div>
            <div className="award-item">
              <div className="award-icon">📚</div>
              <h3>Microservices Architecture</h3>
              <p className="award-org">Tech Conference Proceedings 2022</p>
              <p className="award-desc">Research article on patterns and anti-patterns in distributed architecture.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card fade-section" ref={contactRef}>
          <h2>Contact</h2>
          <p>Interested in working together? Connect with me on:</p>
          <SocialLinks />
          <p style={{marginTop: '16px'}}>Or send me a direct email to <a href="mailto:tu@correo.com">tu@correo.com</a></p>
          <a href="mailto:tu@correo.com" className="btn primary">Send email</a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Marcos Gomez Villafañe. Made with React. Palette: soft green + dark mode.</p>
      </footer>
    </div>
  )
}
