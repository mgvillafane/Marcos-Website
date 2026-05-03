import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import SocialLinks from './SocialLinks.jsx'
import ProjectDetail from './ProjectDetail.jsx'
import useIntersectionObserver from './useIntersectionObserver.js'
import SmartlockImg from './src/public/models/Smartlock.png'
import RFAmpImg from './src/public/models/RF amplifier.jpg'
import LoopTestGif from './src/public/models/loop_final_test.gif'
import PenduloImg from './src/public/models/pendulo.jpeg'
import MultistageImg from './src/public/models/C2.png'
import WorkshopMOBCOM from './src/public/models/Timing_Advance_Bie.png'

function HomePage(){
  const aboutRef = useIntersectionObserver()
  const experienceRef = useIntersectionObserver()
  const educationRef = useIntersectionObserver()
  const projectsRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const projectsList = [
    {
      title: 'Smartlock - Intelligent Lock',
      desc: 'IoT smart lock with online dashboard for access tracking and remote control.',
      tech: 'React, Node.js, MongoDB',
      image: SmartlockImg,
      categories: ['Electronics', 'Automation']
    },
    {
      title: 'ASTAR - Orientation Estimation of Nanosatellites',
      desc: 'CubeSat attitude estimation using sensor fusion with multiple sensors for precise orientation.',
      tech: 'React Native, Firebase, Redux',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      categories: ['Deep Learning', 'Signal Processing']
    },
    {
      title: 'Multistage Voltage Regulator',
      desc: '3-stage amplifier design with precise voltage regulation and compensation networks.',
      tech: 'Vue.js, D3.js, Express',
      image: MultistageImg,
      categories: ['Electronics', 'Signal Processing']
    },
    {
      title: 'High Frequency Amplifier',
      desc: 'Broadband RF amplifier design optimized for MHz range applications.',
      tech: 'Next.js, PostgreSQL, WebSocket',
      image: RFAmpImg,
      categories: ['Electronics', 'Signal Processing']
    },
    {
      title: 'Robust Motion Planner for Autonomous Robots',
      desc: 'Reinforcement learning-based motion planning with collision avoidance for novel environments.',
      tech: 'React, Stripe API, Django',
      image: LoopTestGif,
      categories: ['Deep Learning', 'Automation']
    },
    {
      title: 'Pendulum Control System',
      desc: 'Advanced control system for inverted pendulum using PID and adaptive algorithms.',
      tech: 'TypeScript, MySQL, Electron',
      image: PenduloImg,
      categories: ['Automation', 'Electronics']
    },
    {
      title: 'Vector-based Paper Search Agent',
      desc: 'Intelligent semantic search engine using vector embeddings and LLMs for academic papers.',
      tech: 'Python, FastAPI, Vector DB, LLM',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      categories: ['Deep Learning']
    },
    {
      title: 'Antenna Position Estimator with AI',
      desc: 'Neural network-based antenna localization using signal data and GIS integration.',
      tech: 'TensorFlow, Python, GIS, SQL',
      image: WorkshopMOBCOM,
      categories: ['Deep Learning', 'Signal Processing']
    }
  ]

  const categories = ['All', 'Deep Learning', 'Signal Processing', 'Automation', 'Electronics']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsList 
    : projectsList.filter(project => project.categories.includes(selectedCategory))

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
              <p className="lead">Electronics Engineer passionate about robotics, AI, and innovation.</p>
              <p>I am an Electronics Engineer with strong expertise in reinforcement learning, robotics, and hardware design. Currently working at Techint Group (Tenaris) on innovative robotic systems for industrial applications.</p>
              <p>With experience in both research and industry, I've developed solutions ranging from IoT smart locks to advanced motion planning algorithms for autonomous robots. I'm passionate about solving complex engineering problems through a combination of hardware design and intelligent software.</p>
              <div className="contact-info" style={{marginTop: '20px'}}>
                <p><strong>📧 Email:</strong> <a href="mailto:mgomezvillafane@gmail.com">mgomezvillafane@gmail.com</a></p>
                <p><strong>📱 Phone:</strong> +54 11 5331 0379</p>
                <p><strong>🔗 LinkedIn:</strong> <a href="https://linkedin.com/in/marcos-gomez-villafane" target="_blank" rel="noopener noreferrer">linkedin.com/in/marcos-gomez-villafane</a></p>
                <p><strong>💻 GitHub:</strong> <a href="https://github.com/mgvillafane" target="_blank" rel="noopener noreferrer">github.com/mgvillafane</a></p>
              </div>
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

        <section id="skills" className="card fade-section">
          <h2>Skills</h2>
          <div className="skills-section">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Assembly</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MATLAB</span>
                <span className="skill-tag">LaTeX</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Hardware & Design</h3>
              <div className="skill-tags">
                <span className="skill-tag">KiCAD</span>
                <span className="skill-tag">FreeCAD</span>
                <span className="skill-tag">LTSpice</span>
                <span className="skill-tag">Keysight ADS</span>
                <span className="skill-tag">Proteus</span>
                <span className="skill-tag">Mbed OS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI & Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Simulink</span>
                <span className="skill-tag">Node-RED</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spanish (Native)</span>
                <span className="skill-tag">English (Advanced - TOEFL 114)</span>
                <span className="skill-tag">German (Advanced - TestDaF C1)</span>
                <span className="skill-tag">Italian (Conversational)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="card fade-section" ref={projectsRef}>
          <div className="projects-header">
            <h2>Projects</h2>
            
            {/* Filter Bar */}
            <div className="filter-bar">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                url="#"
                image={project.image}
                categories={project.categories}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects found in this category.</p>
            </div>
          )}
        </section>

        <section id="awards" className="card fade-section" ref={contactRef}>
          <h2>Awards, Achievements & Publications</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Outstanding Student Award</h3>
              <p className="award-org">University of Buenos Aires (UBA)</p>
              <p className="award-desc">Recognition for exceptional academic performance throughout the Electronics Engineering program with a GPA of 8.66/10.</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎓</div>
              <h3>DAAD Scholarship</h3>
              <p className="award-org">German Academic Exchange Service</p>
              <p className="award-desc">Full scholarship for study and research in Germany at Karlsruhe Institute of Technology (Oct 2023 - Oct 2024).</p>
            </div>
            <div className="award-item">
              <div className="award-icon">📄</div>
              <h3>IEEE IROS 2025 Publication</h3>
              <p className="award-org">Intelligent Robots and Systems</p>
              <p className="award-desc">Co-authored paper on "Safe Social Navigation with Deep Reinforcement Learning" based on research at FZI.</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🤖</div>
              <h3>Reinforcement Learning Research</h3>
              <p className="award-org">FZI Research Center</p>
              <p className="award-desc">Achieved 1.3x higher rewards improvement and 60% collision reduction in novel scenarios using advanced PPO algorithms.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card fade-section" ref={contactRef}>
          <h2>Contact</h2>
          <p>Let's connect! I'm always interested in discussing robotics, AI, electronics projects, and new opportunities.</p>
          <SocialLinks />
          <p style={{marginTop: '16px'}}>You can reach me at <a href="mailto:mgomezvillafane@gmail.com">mgomezvillafane@gmail.com</a> or call +54 11 5331 0379</p>
          <a href="mailto:mgomezvillafane@gmail.com" className="btn primary">Send me an email</a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Marcos Gomez Villafañe. Electronics Engineer. Made with React.</p>
      </footer>
    </div>
  )
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}