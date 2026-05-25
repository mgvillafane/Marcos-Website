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
import ProfilePic from './src/public/models/profile-pic.jpeg'
import TUBerlin from './src/public/models/TUBerlin.png'
import PaperSearch from './src/public/models/PaperSearch.png'

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
      tech: 'Python, Vector DB, LLM',
      image: PaperSearch,
      categories: ['Deep Learning']
    },
    {
      title: 'Antenna Position Estimator with AI',
      desc: 'Neural network-based antenna localization using signal data and GIS integration.',
      tech: 'TensorFlow, Python, GIS, SQL',
      image: WorkshopMOBCOM,
      categories: ['Deep Learning', 'Signal Processing']
    },
    {
      title: 'IoT Roadside Reboot System',
      desc: 'Traffic sensors reboot system with 5G MQTT and Node-Red',
      tech: 'Node-Red, MQTT, Communications',
      image: TUBerlin,
      categories: ['Signal Processing']
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
            <img src={ProfilePic} alt="My photo" className="about-image" />
            <div className="about-text">
              <h2>About me</h2>
              <p className="lead">Electronics Engineer passionate about robotics, AI, and innovation.</p>
              <p>I am an Electronics Engineer with strong expertise in reinforcement learning, robotics, and hardware design. Currently working at Techint Group (Tenaris) on innovative robotic systems for industrial applications.</p>
              <p>With experience in both research and industry, I've developed solutions ranging from IoT smart locks to advanced motion planning algorithms for autonomous robots. I'm passionate about solving complex engineering problems through a combination of hardware design and intelligent software.</p>
              
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
              <h3>Outstanding Student Award</h3>
              <p className="award-org">University of Buenos Aires (UBA)</p>
              <p className="award-desc">Recognition for international awards during the Electronics Engineering program at University of Buenos Aires.</p>
            </div>
            <div className="award-item">              
              <h3>DAAD Scholarship</h3>
              <p className="award-org">German Academic Exchange Service</p>
              <p className="award-desc">Full scholarship for study and research in Germany at Karlsruhe Institute of Technology (Oct 2023 - Oct 2024).</p>
            </div>
            
            <div className="award-item">
              <h3>Distinguished Student</h3>
              <p className="award-org">Cambridge IGCSE</p>
              <p className="award-desc">Recognition for distinguished academic performance during the IGCSE examinations.</p>
            </div>
            <div className="award-item">
              <h3>IEEE IROS 2025 Publication</h3>
              <p className="award-org">Intelligent Robots and Systems</p>
              <p className="award-desc">Co-authored the paper"Safe Social Navigation with Deep Reinforcement Learning" based on research at FZI. The conference was held at Guangzhou, China.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card fade-section" ref={contactRef}>
          <h2>Contact</h2>
          <p>Let's connect! I'm always interested in discussing robotics, AI, electronics projects, and new opportunities.</p>
          <SocialLinks />
          
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