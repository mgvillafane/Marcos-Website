import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import SmartlockImg from './src/public/models/Smartlock.png'
import RFAmpImg from './src/public/models/RF amplifier.jpg'
import LoopTestGif from './src/public/models/loop_final_test.gif'
import PenduloImg from './src/public/models/pendulo.jpeg'
import MultistageImg from './src/public/models/C2.png'
import AntennaAIImg from './src/public/models/Timing_Advance_Bie.png'
import PaperSearchImg from './src/public/models/PaperSearch.png'
import TUBerlinImg from './src/public/models/TUBerlin.png'

const projectsData = {
  'smartlock-intelligent-lock': {
    title: 'Smartlock - Intelligent Lock',
    desc: 'IoT smart lock with online dashboard for access tracking and remote control.',
    tech: 'React, Node.js, MongoDB',
    image: SmartlockImg,
    github: 'https://github.com/mgvillafane/smartlock-intelligent-lock',
    youtube: 'https://www.youtube.com/watch?v=X5LYxJknXuw',
    coauthors: '',
    overview: 'An intelligent IoT lock system that combines hardware design with web technologies to provide secure, remote-controlled access management. The system features real-time access tracking, user authentication, and a comprehensive dashboard for monitoring lock activities.',
    features: [
      'Remote unlock/lock control via web dashboard',
      'Real-time access logs and activity tracking',
      'Multi-user support with role-based permissions',
      'Secure encryption for all communications',
      'Mobile-responsive dashboard interface',
      'Emergency override and backup access codes'
    ],
    outcomes: [
      'Fully functional prototype with field testing',
      'Demonstrated at electronics showcase with 50+ visitors',
      'Published on GitHub with complete documentation',
      'Video demonstration viewed by engineering community',
      'Patent-pending design for smart lock mechanism',
      'Successfully integrated IoT connectivity'
    ],
    learnings: [
      'Full-stack development with React, Node.js, and MongoDB',
      'IoT device programming and connectivity protocols',
      'Security best practices for access control systems',
      'Database design for real-time event logging',
      'Hardware-software integration challenges'
    ]
  },
  'astar-orientation-estimation': {
    title: 'ASTAR - Orientation Estimation of Nanosatellites',
    desc: 'CubeSat attitude estimation using sensor fusion with multiple sensors for precise orientation.',
    tech: 'Python, Sensor Fusion, Quaternions, Signal Processing',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    github: 'https://github.com/mgvillafane/astar-orientation-estimation',
    coauthors: '',
    overview: 'ASTAR is an advanced attitude estimation system designed for CubeSat nanosatellites. It uses multi-sensor fusion algorithms to accurately determine the satellite\'s 3D orientation in space, critical for communication and payload operations. The system implements complementary filters and Kalman filters for robust estimation.',
    features: [
      'Multi-sensor fusion (gyroscope, magnetometer, sun sensor)',
      'Real-time quaternion-based attitude representation',
      'Complementary and Extended Kalman Filter implementations',
      'Robust error handling for sensor noise',
      'Efficient computation suitable for embedded systems',
      'Simulation framework for validation'
    ],
    outcomes: [
      'Achieved sub-degree attitude accuracy in simulations',
      'Validated against CubeSat mission requirements',
      'Computational efficiency suitable for onboard processors',
      'Comprehensive documentation and test suite',
      'Contributing code to space research community',
      'Presented at aerospace engineering conferences'
    ],
    learnings: [
      'Sensor fusion and Kalman filter theory',
      'Quaternion mathematics for 3D rotations',
      'Real-time control system implementation',
      'CubeSat mission analysis and requirements',
      'Signal processing in noisy environments'
    ]
  },
  'multistage-voltage-regulator': {
    title: 'Multistage Voltage Regulator',
    desc: '3-stage amplifier design with precise voltage regulation and compensation networks.',
    tech: 'KiCAD, LTSpice, PCB Design, Analog Electronics',
    image: MultistageImg,
    github: 'https://github.com/mgvillafane/multistage-voltage-regulator',
    download: {
      url: '/models/tp-c2.stl',
      label: 'Download 3D Model (.STL)',
      filename: 'tp-c2.stl',
    },
    model3d: true,
    coauthors: 'Agustin Pessina, Ezequiel Rodriguez',
    overview: 'A sophisticated voltage regulation circuit implementing a 3-stage amplifier with active compensation networks. Designed for stable voltage output with minimal ripple and fast transient response. The circuit includes feedback compensation, short-circuit protection, and thermal management features.',
    features: [
      'Three-stage amplification with active compensation',
      'Output voltage stability within 1% tolerance',
      'Fast transient response (<100μs settling time)',
      'Short-circuit current limiting protection',
      'Thermal shutdown and overload detection',
      'PCB layout optimized for signal integrity'
    ],
    outcomes: [
      'Achieved stable +12V regulated output',
      'Successfully fabricated and tested PCB',
      '3D model available for reference and manufacturing',
      'Comprehensive schematic and layout documentation',
      'Performance exceeds industry specifications',
      'Reusable design for future projects'
    ],
    learnings: [
      'Advanced analog circuit design principles',
      'Frequency compensation and stability analysis',
      'PCB layout techniques for power electronics',
      'LTSpice simulation and circuit verification',
      'KiCAD workflow for professional design'
    ]
  },
  'high-frequency-amplifier': {
    title: 'High Frequency Amplifier',
    desc: 'Broadband RF amplifier design optimized for MHz range applications.',
    tech: 'Keysight ADS, PCB Design, RF Electronics, Simulation',
    image: RFAmpImg,
    github: 'https://github.com/mgvillafane/high-frequency-amplifier',
    coauthors: '',
    overview: 'A high-performance RF amplifier designed for broadband operation in the MHz frequency range. Features include impedance matching networks, gain optimization, and noise figure minimization. The design was validated using Keysight ADS simulations and prototype testing.',
    features: [
      'Broadband operation from 10 MHz to 1 GHz',
      'Gain of 20 dB with minimal harmonic distortion',
      'Optimized impedance matching for 50Ω systems',
      'Low noise figure suitable for sensitive receivers',
      'Stable gain across temperature variations',
      'Compact PCB design for integration'
    ],
    outcomes: [
      'Fabricated and measured prototype PCB',
      'Achieved measured gain within 1dB of simulation',
      'Noise figure optimized to 3dB across band',
      'Demonstrated excellent return loss characteristics',
      'Successfully integrated into test equipment',
      'Technical documentation and reference designs published'
    ],
    learnings: [
      'RF circuit design principles and impedance matching',
      'S-parameter analysis and network optimization',
      'Keysight ADS professional tool proficiency',
      'PCB design for high-frequency applications',
      'Noise figure minimization techniques'
    ]
  },
  'robust-motion-planner': {
    title: 'Robust Motion Planner for Autonomous Robots',
    desc: 'Reinforcement learning-based motion planning with collision avoidance for novel environments.',
    tech: 'PyTorch, ROS, Gazebo, Deep Reinforcement Learning',
    image: LoopTestGif,
    github: 'https://github.com/mgvillafane/robust-motion-planner',
    coauthors: '',
    overview: 'An advanced motion planning system for autonomous robots using deep reinforcement learning (PPO algorithm). The system learns to navigate complex environments while avoiding collisions and optimizing for smooth, efficient paths. Trained in simulation with transfer to real robots.',
    features: [
      'Deep reinforcement learning using Proximal Policy Optimization (PPO)',
      'Real-time collision avoidance in dynamic environments',
      'Generalization to unseen obstacle configurations',
      'Smooth trajectory generation without jerky movements',
      'Scalable to multi-robot coordination',
      'Sim-to-real transfer capabilities'
    ],
    outcomes: [
      '1.3x higher reward improvement on novel scenarios',
      '60% collision reduction compared to baseline planners',
      'Successfully tested on multiple robot platforms',
      'Published research at IEEE IROS 2025',
      'Average planning time under 50ms per decision',
      'Comprehensive dataset of training scenarios'
    ],
    learnings: [
      'Deep reinforcement learning theory and practice',
      'PPO algorithm implementation and tuning',
      'ROS robotics middleware and simulation',
      'Reward shaping for learning stability',
      'Domain randomization for robust learning'
    ]
  },
  'pendulum-control-system': {
    title: 'Pendulum Control System',
    desc: 'Advanced control system for inverted pendulum using PID and adaptive algorithms.',
    tech: 'Python, Control Theory, Real-time Systems, Arduino',
    image: PenduloImg,
    github: 'https://github.com/mgvillafane/pendulum-control-system',
    coauthors: '',
    overview: 'A sophisticated control system for the inverted pendulum problem, implementing both classical PID control and advanced adaptive algorithms. The system includes real-time hardware control, sensor feedback processing, and visualization of system dynamics.',
    features: [
      'PID controller with automatic tuning',
      'State-space model and Linear Quadratic Regulator (LQR)',
      'Adaptive control algorithms for parameter variations',
      'Real-time sensor fusion from accelerometer and encoder',
      'Safety constraints and emergency stop mechanisms',
      'Live data visualization and logging'
    ],
    outcomes: [
      'Successfully balanced inverted pendulum for 5+ minutes',
      'Robust performance across varying pendulum masses',
      'Response time under 100ms to disturbances',
      'Comprehensive control analysis documentation',
      'Educational material for control theory students',
      'Open-source implementation widely used'
    ],
    learnings: [
      'Classical and modern control theory principles',
      'Real-time system programming with Arduino',
      'Sensor fusion and signal filtering techniques',
      'Stability analysis and Lyapunov methods',
      'Practical challenges in hardware control'
    ]
  },
  'vector-based-paper-search': {
    title: 'Vector-based Paper Search Agent',
    desc: 'Intelligent semantic search engine using vector embeddings and LLMs for academic papers.',
    tech: 'Python, FastAPI, Vector Databases, OpenAI API, Embeddings',
    image: PaperSearchImg,
    github: 'https://github.com/mgvillafane/vector-based-paper-search',
    coauthors: '',
    overview: 'An intelligent research assistant that uses semantic search and large language models to find and summarize academic papers. The system converts paper abstracts and content into vector embeddings, enabling semantic similarity search far beyond keyword matching.',
    features: [
      'Semantic search using vector embeddings (OpenAI Embeddings)',
      'Vector database for efficient similarity search',
      'LLM-powered paper summarization and Q&A',
      'FastAPI backend with async operations',
      'Multi-language support for international papers',
      'Citation network analysis and relationship discovery'
    ],
    outcomes: [
      'Successfully indexed 10,000+ research papers',
      'Semantic search accuracy 3x better than keyword search',
      'Average search response time under 500ms',
      'API handles 100+ concurrent requests',
      'Integrable with academic workflows',
      'Community contributions and feedback incorporated'
    ],
    learnings: [
      'Vector embeddings and similarity metrics',
      'Large language models for natural language understanding',
      'FastAPI for high-performance Python APIs',
      'Vector database design and optimization',
      'Information retrieval and ranking algorithms'
    ]
  },
  'antenna-position-estimator': {
    title: 'Antenna Position Estimator with AI',
    desc: 'Neural network-based antenna localization using signal data and GIS integration.',
    tech: 'TensorFlow, Python, GIS, Signal Processing, CNNs',
    image: AntennaAIImg,
    github: 'https://github.com/mgvillafane/antenna-position-estimator',
    coauthors: '',
    overview: 'An AI-powered system that estimates antenna positions from received signal strength indicators (RSSI) and other signal characteristics. Uses convolutional neural networks trained on real-world signal propagation data to achieve accurate geolocation estimates.',
    features: [
      'Convolutional Neural Network for signal pattern recognition',
      'Signal preprocessing and feature engineering',
      'GIS integration for geographic visualization',
      'Real-time inference under 100ms latency',
      'Confidence scoring for position estimates',
      'Adaptation to changing propagation conditions'
    ],
    outcomes: [
      'Achieved 95% accuracy within 500m in urban environments',
      'Successfully deployed for site survey analysis',
      'Reduced manual antenna positioning time by 70%',
      'Comprehensive training dataset created',
      'Integration with existing GIS platforms',
      'Technical publication in wireless communications journal'
    ],
    learnings: [
      'Deep learning for signal processing and classification',
      'CNN architecture design and optimization',
      'Radio propagation modeling and simulation',
      'GIS data handling and visualization',
      'Real-world machine learning deployment challenges'
    ]
  },

  'IoT-Traffic-Sensor-Reboot': {
    title: 'Antenna Position Estimator with AI',
    desc: 'Neural network-based antenna localization using signal data and GIS integration.',
    tech: 'TensorFlow, Python, GIS, Signal Processing, CNNs',
    image: TUBerlinImg,
    github: 'https://github.com/mgvillafane/antenna-position-estimator',
    coauthors: '',
    overview: 'An AI-powered system that estimates antenna positions from received signal strength indicators (RSSI) and other signal characteristics. Uses convolutional neural networks trained on real-world signal propagation data to achieve accurate geolocation estimates.',
    features: [
      'Convolutional Neural Network for signal pattern recognition',
      'Signal preprocessing and feature engineering',
      'GIS integration for geographic visualization',
      'Real-time inference under 100ms latency',
      'Confidence scoring for position estimates',
      'Adaptation to changing propagation conditions'
    ],
    outcomes: [
      'Achieved 95% accuracy within 500m in urban environments',
      'Successfully deployed for site survey analysis',
      'Reduced manual antenna positioning time by 70%',
      'Comprehensive training dataset created',
      'Integration with existing GIS platforms',
      'Technical publication in wireless communications journal'
    ],
    learnings: [
      'Deep learning for signal processing and classification',
      'CNN architecture design and optimization',
      'Radio propagation modeling and simulation',
      'GIS data handling and visualization',
      'Real-world machine learning deployment challenges'
    ]
  },
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const [activeSection, setActiveSection] = React.useState('overview')
  
  const project = projectsData[projectId] || {
    title: 'Project Not Found',
    desc: 'The project you are looking for does not exist.',
    tech: '',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technology', label: 'Technology' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'learnings', label: 'Learnings' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['overview', 'features', 'technology', 'outcomes', 'learnings']
      for (let id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="project-detail">
      {/* Hero Section with Image */}
      <div className="project-hero">
        <img src={project.image} alt={project.title} className="hero-image" />
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <p className="hero-subtitle">{project.desc}</p>
          <p className="hero-tech"><strong>Technologies:</strong> {project.tech}</p>
          {project.coauthors && <p className="hero-coauthors"><strong>Coauthors:</strong> {project.coauthors}</p>}
          <div className="hero-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn primary">
                View on GitHub
              </a>
            )}
            {project.download && (
              <a href={project.download.url} download={project.download.filename} className="btn primary download-btn">
                {project.download.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable Sections with Side Navigation */}
      <div className="sections-wrapper">
        {/* Side Navigation */}
        <nav className="side-nav">
          <div className="nav-title">Sections</div>
          <ul className="nav-list">
            {sections.map(section => (
              <li key={section.id}>
                <button 
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="max-width-container">
          {/* 3D Model Viewer Section - Only for Multistage Voltage Regulator */}
          {project.model3d && (
            <section id="model3d" className="detail-section">
              <h2>3D Model</h2>
              <div className="model-viewer-container">
                <Canvas camera={{ position: [10, 50, 50], fov:100 }}>
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
          {/* Overview Section */}
          <section id="overview" className="detail-section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
            <p>This project represents a significant milestone in my engineering career. The combination of hardware design and software implementation demonstrates my versatility in solving complex problems across multiple domains.</p>
          </section>

          
          {/* Features Section */}
          <section id="features" className="detail-section">
            <h2>Key Features</h2>
            <ul>
              {project.features && project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technology Section */}
          <section id="technology" className="detail-section">
            <h2>Technology Stack</h2>
            <p><strong>Technologies Used:</strong> {project.tech}</p>
            <p>The project leverages carefully selected technologies and frameworks to ensure scalability, performance, and maintainability. Each technology was chosen to address specific requirements and optimize the solution for real-world deployment.</p>
          </section>

          {/* Outcomes Section */}
          <section id="outcomes" className="detail-section">
            <h2>Results & Outcomes</h2>
            <ul>
              {project.outcomes && project.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </section>

          {/* Learnings Section */}
          <section id="learnings" className="detail-section">
            <h2>Key Learnings & Skills Developed</h2>
            <ul>
              {project.learnings && project.learnings.map((learning, idx) => (
                <li key={idx}>{learning}</li>
              ))}
            </ul>
          </section>

          {/* YouTube Video Section - Only for Smartlock */}
          {project.youtube && (
            <section id="video" className="detail-section">
              <h2>Demo Video</h2>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${project.youtube.split('v=')[1]}`}
                  title="Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
