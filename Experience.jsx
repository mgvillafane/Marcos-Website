import React, { useState } from 'react'
import DataEvo from './src/public/models/DataEvo.png'
import p4d from './src/public/models/p4dlogo.jfif'
export default function Experience(){
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      company: 'University of California, Berkeley',
      role: 'Graduate Student Researcher',
      dates: 'Aug 2026 – Present',
      location: 'Berkeley, California, USA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Cal_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
      tasks: [
        'Developing multi-agent reinforcement learning algorithms to coordinate autonomous vehicles in dense driving scenarios.',
        'Using JAX, PyTorch, and the Waymo Open Motion Dataset to synthesize safety-critical scenarios.'
      ]
    },
    {
      company: 'Techint Group – Tenaris',
      role: 'Industrial Process Innovation Researcher',
      dates: 'Jul 2025 – Aug 2026',
      location: 'Buenos Aires, Argentina',
      logo: 'https://www.tenaris.com/media/z0bal0tu/microsoftteams-image-8.png?v=1db50eb66c4c5f0',
      tasks: [
        'Designed signal processing systems for automatic pipe quality testing, achieving micrometer precision, 4% measurement variance, and 25-second measurement cycles.',
        'Developed robot-to-pipe alignment algorithms that reduced variance by 50% and measurement error by 30%.'
      ]
    },
    {
      company: 'Forschungszentrum Informatik (FZI)',
      role: 'Research Assistant & Thesis Researcher',
      dates: 'Apr 2024 – Aug 2024',
      location: 'Karlsruhe, Germany',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRk62XCWaxs7uN8FlSQgr19SogdI93ICVrg&s',
      tasks: [
        'Improved the generalization of a PPO-based deep reinforcement learning algorithm, obtaining up to 1.3x higher rewards than classic PPO.',
        'Prevented over 60% of robot collisions in three novel scenarios with an uncertainty-based collision avoidance pipeline.',
        'Co-authored and published a peer-reviewed IROS 2025 paper on safe social navigation with deep reinforcement learning.'
      ]
    },
    {
      company: 'DataEvo',
      role: 'Python and Shiny Developer',
      dates: 'May 2019 – Oct 2019',
      location: 'Buenos Aires, Argentina',
      logo: DataEvo,
      tasks: [
        'Built Python data pipelines and interactive R/Shiny analytics dashboards for client reporting.'
      ]
    },
    {
      company: 'Programming for Design (P4D)',
      role: 'Programming Intern',
      dates: 'Jan 2019 – Apr 2019',
      location: 'Buenos Aires, Argentina',
      logo: p4d,
      tasks: [
        'Developed and improved website features using HTML, CSS, JavaScript.'
      ]
    }
  ]

  return (
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-accordion">
          <button
            className={`accordion-header ${expanded === idx ? 'active' : ''}`}
            aria-expanded={expanded === idx}
            onClick={() => setExpanded(expanded === idx ? -1 : idx)}
          >
            <div className="header-content">
              {exp.logo && <img src={exp.logo} alt={exp.company} className="company-logo" />}
              <div className="header-text">
                <h3>{exp.company}</h3>
                <p className="position">{exp.role}</p>
                <p className="dates">{exp.dates}</p>
              </div>
            </div>
            <span className="toggle-icon">
              {expanded === idx ? '−' : '+'}
            </span>
          </button>
          {expanded === idx && (
            <div className="accordion-content">
              <ul>
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
