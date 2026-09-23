import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import SocialLinks from './SocialLinks.jsx'
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
import AstarFinished from './src/public/models/Astar_finished.jpeg'

const ProjectDetail = React.lazy(() => import('./ProjectDetail.jsx'))

function HomePage(){
  const aboutRef = useIntersectionObserver()
  const experienceRef = useIntersectionObserver()
  const educationRef = useIntersectionObserver()
  const projectsRef = useIntersectionObserver()
  const awardsRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  React.useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  const projectsList = [
    {
      title: 'Smartlock - An IoT Wi-Fi Doorlock',
      desc: 'C++ IoT smart lock with RFID, keypad, Wi-Fi connectivity, and a dashboard for real-time access monitoring.',
      tech: 'C++, Github, MQTT',
      image: SmartlockImg,
      categories: ['Electronics', 'Automation', 'Signal Processing']
    },
    {
      title: 'ASTAR - Orientation Estimation of Nanosatellites',
      desc: 'CubeSat attitude estimation using fusion of data from magnetometer, light sensor and IMU.',
      tech: 'Matlab, Github, LTspice,Kicad,FreeCAD,Arduino IDE',
      image: AstarFinished,
      categories: ['Electronics', 'Signal Processing']
    },
    {
      title: 'Multistage Voltage Regulator',
      desc: '5V and 3.3V voltage regulator for wide input voltage using Buck and LDO stages with frequency compensation .',
      tech: 'LTSpice, Kicad',
      image: MultistageImg,
      categories: ['Electronics']
    },
    {
      title: 'High Frequency Amplifier',
      desc: 'Broadband RF amplifier design optimized for MHz range applications.',
      tech: 'KiCad, Keysight ADS, RF Electronics',
      image: RFAmpImg,
      categories: ['Electronics']
    },
    {
      title: 'Robust Motion Planner for Autonomous Robots',
      desc: 'Reinforcement learning-based motion planning with collision avoidance for novel environments.',
      tech: 'Python, TensorFlow, Pytorch',
      image: LoopTestGif,
      categories: ['Deep Learning', 'Automation']
    },
    {
      title: 'Pendulum Control System',
      desc: 'Control system for pendulum using PID, PI, P and discrete controllers.',
      tech: 'MATLAB, FreeCAD, Arduino IDE',
      image: PenduloImg,
      categories: ['Automation', 'Electronics', 'Signal Processing']
    },
    {
      title: 'Vector-based Paper Search Agent',
      desc: 'Arxiv paper searcher using vector embeddings and generative AI.',
      tech: 'Python, Vector DB, LLMs',
      image: PaperSearch,
      categories: ['Deep Learning']
    },
    {
      title: 'Cellular Base-Station Location Estimation',
      desc: 'Differential Evolution for estimating cellular base-station locations from GPS and timing-advance measurements.',
      tech: 'Python',
      image: WorkshopMOBCOM,
      categories: ['Deep Learning', 'Signal Processing']
    },
    {
      title: 'IoT Roadside Reboot System',
      desc: 'Traffic sensors reboot system with 5G MQTT and Node-Red',
      tech: 'Node-Red, MQTT, Python',
      image: TUBerlin,
      categories: ['Signal Processing','Automation','Electronics']
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
            <img src={ProfilePic} alt="Marcos Gómez Villafañe" className="about-image" width="144" height="144" loading="lazy" decoding="async" />
            <div className="about-heading">
              <p className="eyebrow">A little about me</p>
              <p className="about-focus">Robotics &middot; AI &middot; Electronics</p>
            </div>
            <div className="about-text">
              <p>I'm Marcos, an Electrical Engineer and Computer Scientist specializing in robotics, embedded software, and machine learning.</p>
              <p>My work spans multi-agent reinforcement learning, autonomous vehicles, industrial robotics, signal processing, and connected embedded systems.</p>
              <a className="about-project-link" href="#projects">Explore my projects <span aria-hidden="true">&#8599;</span></a>
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
                  aria-pressed={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                desc={project.desc}
                tech={project.tech}
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

        <section id="experience" className="card fade-section" ref={experienceRef}>
          <h2>Experience</h2>
          <Experience />
        </section>

        <section id="education" className="card fade-section" ref={educationRef}>
          <h2>Education</h2>
          <Education />
        </section>

        <section id="awards" className="card fade-section" ref={awardsRef}>
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
              <p className="award-desc">Co-authored the paper "Disentangling Uncertainty for Safe Social Navigation using Deep Reinforcement Learning" based on research at FZI. The paper was presented at IROS 2025 in Hangzhou, China.</p>
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
        <p>© {new Date().getFullYear()} Marcos Gómez Villafañe. Robotics and Machine Learning Engineer. Made with React.</p>
      </footer>
    </div>
  )
}

export default function App(){
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={
          <React.Suspense fallback={<p className="container" role="status">Loading project...</p>}>
            <ProjectDetail />
          </React.Suspense>
        } />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
