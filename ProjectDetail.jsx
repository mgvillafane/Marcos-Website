import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import SmartlockImg from './src/public/models/Smartlock.png'
import RFAmpImg from './src/public/models/RF amplifier.jpg'
import LoopTestGif from './src/public/models/loop_final_test.gif'
import PenduloImg from './src/public/models/pendulo.jpeg'


const projectsData = {
  'smartlock-intelligent-lock': {
    title: 'Smartlock - Intelligent Lock',
    desc: 'Interactive educational platform with courses, videos and quizzes for users.',
    tech: 'React, Node.js, MongoDB',
    image: SmartlockImg,
  },
  'astar-orientation-estimation': {
    title: 'ASTAR - Orientation Estimation of Nanosatellites',
    desc: 'Mobile application to organize projects and tasks with real-time collaboration.',
    tech: 'React Native, Firebase, Redux',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
  },
  'multistage-voltage-regulator': {
    title: 'Multistage Voltage Regulator',
    desc: 'Interactive dashboard to visualize business metrics and reports in real time.',
    tech: 'Vue.js, D3.js, Express',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
    download: {
      url: '/models/tp-c2.stl',
      label: 'Download 3D Model (.STL)',
      filename: 'tp-c2.stl',
    },
    model3d: true,
  },
  'high-frequency-amplifier': {
    title: 'High Frequency Amplifier',
    desc: 'Social network focused on privacy with posts, comments and messaging.',
    tech: 'Next.js, PostgreSQL, WebSocket',
    image: RFAmpImg,
  },
  'robust-motion-planner': {
    title: 'Robust Motion Planner for Autonomous Robots',
    desc: 'Booking platform for hotels and restaurants with integrated payments.',
    tech: 'React, Stripe API, Django',
    image: LoopTestGif,
  },
  'pendulum-control-system': {
    title: 'Pendulum Control System',
    desc: 'Inventory management system with reports, alerts and stock control.',
    tech: 'TypeScript, MySQL, Electron',
    image: PenduloImg,
  },
  'vector-based-paper-search': {
    title: 'Vector-based Paper Search Agent',
    desc: 'Intelligent academic paper search engine using vector embeddings and semantic search.',
    tech: 'Python, FastAPI, Vector DB, LLM',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
  },
  'antenna-position-estimator': {
    title: 'Antenna Position Estimator with AI',
    desc: 'Antenna localization system using neural networks and signal data to optimize coverage.',
    tech: 'TensorFlow, Python, GIS, SQL',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

export default function ProjectDetail() {
  const { projectId } = useParams()
  
  const project = projectsData[projectId] || {
    title: 'Project Not Found',
    desc: 'The project you are looking for does not exist.',
    tech: '',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'resources', label: 'Resources' },
    { id: 'features', label: 'Features' },
    { id: 'technology', label: 'Technology' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'learnings', label: 'Learnings' },
  ]

  return (
    <div className="project-detail">
      {/* Hero Section with Image */}
      <div className="project-hero">
        <img src={project.image} alt={project.title} className="hero-image" />
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <p className="hero-subtitle">{project.desc}</p>
          <p className="hero-tech"><strong>Technologies:</strong> {project.tech}</p>
          {project.download && (
            <a href={project.download.url} download={project.download.filename} className="btn primary download-btn">
              {project.download.label}
            </a>
          )}
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="sections-wrapper">
        <div className="max-width-container">
          {/* Overview Section */}
          <section id="overview" className="detail-section">
            <h2>Overview</h2>
            <p>{loremIpsum}</p>
            <p>This project represents a significant milestone in my engineering career. The combination of hardware design and software implementation demonstrates my versatility in solving complex problems across multiple domains.</p>
            <p>{loremIpsum}</p>
          </section>

          {/* Resources Section */}
          <section id="resources" className="detail-section">
            <h2>Resources</h2>
            <p>{loremIpsum}</p>
            <ul>
              <li>Technical Documentation</li>
              <li>Source Code Repository</li>
              <li>Design Files and Schematics</li>
              <li>Research Papers and References</li>
              <li>Project Presentations</li>
            </ul>
            <p>{loremIpsum}</p>
          </section>

          {/* Features Section */}
          <section id="features" className="detail-section">
            <h2>Features</h2>
            <p>{loremIpsum}</p>
            <ul>
              <li>Responsive Design</li>
              <li>Real-time Updates</li>
              <li>Advanced Analytics</li>
              <li>User Authentication</li>
              <li>Performance Optimization</li>
            </ul>
            <p>{loremIpsum}</p>
          </section>

          {/* Technology Section */}
          <section id="technology" className="detail-section">
            <h2>Technology Stack</h2>
            <p>{loremIpsum}</p>
            <p>The project leverages cutting-edge technologies and frameworks to ensure scalability, performance, and maintainability. Each technology was carefully selected to address specific requirements and challenges.</p>
            <p>{loremIpsum}</p>
          </section>

          {/* Outcomes Section */}
          <section id="outcomes" className="detail-section">
            <h2>Outcomes</h2>
            <p>{loremIpsum}</p>
            <ul>
              <li>Achieved measurable improvements in efficiency</li>
              <li>Successfully delivered within timeline and budget</li>
              <li>Received positive feedback from stakeholders</li>
              <li>Established best practices for future projects</li>
              <li>Contributed to technical knowledge base</li>
            </ul>
            <p>{loremIpsum}</p>
          </section>

          {/* Learnings Section */}
          <section id="learnings" className="detail-section">
            <h2>Key Learnings</h2>
            <p>{loremIpsum}</p>
            <p>This project provided valuable insights into solving complex engineering problems. The experience reinforced the importance of thorough planning, collaborative teamwork, and continuous learning.</p>
            <p>{loremIpsum}</p>
          </section>

          {/* 3D Model Viewer Section - Only for Multistage Voltage Regulator */}
          {project.model3d && (
            <section id="model3d" className="detail-section">
              <h2>3D Model</h2>
              <div className="model-viewer-container">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 10]} />
                  <Suspense fallback={null}>
                    <Model />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}


function Model() {
  const { scene } = useGLTF("../src/public/models/tp-c2.glb");
  return <primitive object={scene} scale={1} />;
}
