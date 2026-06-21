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
import AstarFinished from './src/public/models/Astar_finished.jpeg'

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
    
  },
  'astar-orientation-estimation': {
    title: 'ASTAR - Orientation Estimation of Nanosatellites',
    desc: 'CubeSat attitude estimation using sensor fusion with multiple sensors for precise orientation.',
    tech: 'Python, FreeCAD, Kicad, Matlab',
    image: AstarFinished,
    github: 'https://github.com/mgvillafane/astar-orientation-estimation',
    coauthors: '',
    overview: 'ASTAR is an advanced attitude estimation system designed for CubeSat nanosatellites. It uses multi-sensor fusion algorithms to accurately determine the satellite\'s 3D orientation in space, critical for communication and payload operations. The system implements complementary filters and Kalman filters for robust estimation.',
    features: [
      'Multi-sensor fusion (IMU, magnetometer, light sensor)',
      'TRIAD algorithm',
      'Kalman Filter for noise reduction',
      'Self-made PCB',
      'Self-made light sensor'

    ],
    outcomes: [
      'Working prototype',
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
      'Two-stage amplification with active compensation',
      'Output voltage stability within 1% tolerance',
      'Low dropout voltage',
      'Short-circuit current limiting protection',
      'Overvoltage and Undervoltage protection (OVLO and UVLO)',
      'PCB layout optimized for signal integrity'
    ],
    outcomes: [
      'Achieved Stable + regulated output',
      'Successfully fabricated and tested PCB',
      'Low Dropout Voltage of 0.21V achieved',
      'Efficiency of 99,13%',
      'Working Current Foldback, OVLO and UVLO'
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
      'Uncertainty estimation with two estimation methods: MC-Dropout and Deep Ensembles',
      'Control algorithm for policy switching and collision avoidance',
    ],
    outcomes: [
      'Over 60% collision reduction in 3 novel scenarios',
      'Published research at IEEE IROS 2025',
      'Disentangled uncertainty into epistemic predictive and aleatoric uncertainty',
      'Implemented policy switching based on uncertainty estimation',
      'Identified sources of uncertainty during the motion planning of the DRL policy'
    ]

  },
  'pendulum-control-system': {
    title: 'Pendulum Control System',
    desc: 'Control system for stabilizing pendulum using 3 types of control algorithms.',
    tech: 'Control Theory, IMU, MATLAB, Arduino',
    image: PenduloImg,
    github: 'https://github.com/mgvillafane/pendulum-control-system',
    coauthors: 'Alexis Romero, Manuel Rodriguez',
    overview: 'A control system for the pendulum problem, implementing both classical P, PI and PID control as well as discrete control algorithms. The system includes real-time hardware control, sensor feedback processing, and visualization of system dynamics with data from an IMU.',
    features: [
      'P, PI and PID controllers',
      'Fast control against system perturbations',
      'Real-time sensor fusion from accelerometer and gyroscope',
      'Live data visualization',
    ],
    outcomes: [
      'Robust performance with several types of controllers',
      'Response time under 1s to disturbances',
      'Comprehensive control analysis documentation, analyzing the performance of different controllers',
      'Open-source implementation'
    ]
    
  },
  'vector-based-paper-search': {
    title: 'Vector-based Paper Search Agent',
    desc: 'Semantic search agent that uses vector embeddings and LLMs to search academic papers in Arxiv.',
    tech: 'Python, FastAPI, Vector Databases, OpenAI API, Embeddings',
    image: PaperSearchImg,
    github: 'https://github.com/mgvillafane/vector-based-paper-search',
    coauthors: '',
    overview: 'Implemented for 5-day Kaggle genAI competition. An intelligent research assistant that uses semantic search and large language models to find and summarize academic papers. The system converts paper abstracts and content into vector embeddings, enabling semantic similarity search.',
    features: [
      'Semantic search using vector embeddings',
      'Arxiv vector database for similarity search',
      'LLM-powered paper summarization and Q&A',
    ],
    outcomes: [
      'Successfully tested the agent and filtered papers with description and keywords',
    ]

  },
  'antenna-position-estimator': {
    title: 'Antenna Position Estimator with Differential Evolution',
    desc: 'Antenna localization using signal intensity data and differential evolution optimization algorithm.',
    tech: 'Python, Signal Processing',
    image: AntennaAIImg,
    github: 'https://github.com/mgvillafane/antenna-position-estimator',
    coauthors: 'Morris Priester',
    overview: 'Based on signal intensity from the antenna, the algorithm uses differential evolution to localize the antenna position.',
    features: [
      'Differential Evolution',
      'Vienna Simulation',
    ],
    outcomes: [
      'Achieved high precision with limited intensity data',
    
    ]

  },

  'IoT-Traffic-Sensor-Reboot': {
    title: 'IOT-Based Dashboard and Reboot System for Roadside Traffic Sensors',
    desc: 'A system for monitoring and managing roadside traffic sensors using IoT technologies.',
    tech: 'Python, IoT, MQTT, C++',
    image: TUBerlinImg,
    github: 'https://github.com/mgvillafane/antenna-position-estimator',
    coauthors: '',
    overview: 'A system for monitoring and managing roadside traffic sensors using IoT technologies. The system includes a dashboard for real-time monitoring of sensor status, a hardware interface for remote rebooting of sensors, and an automated alert system for sensor failures. ',
    features: [
      'Dashboard for real-time monitoring of traffic sensor status',
      'Hardware interface for remote rebooting of roadside sensors',
      'Automated alert system for sensor failures',
      'Integration with 5G networks',
    ],
    outcomes: [
      'Successful hardware rebooting of failing roadside traffic sensors',
      'Created a scalable dashboard for monitoring sensor status and gathering data',
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
      const sectionIds = ['overview', 'features', 'technology', 'outcomes']
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
