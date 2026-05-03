import React, { useState } from 'react'

export default function Experience(){
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      company: 'Techint Group – Tenaris',
      role: 'Industrial Process Innovation Researcher',
      dates: 'Jul 2025 – Present',
      location: 'Buenos Aires, Argentina',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Tenaris_Logo.svg/1200px-Tenaris_Logo.svg.png',
      tasks: [
        'Designed and developed robotic systems for automatic pipe quality testing',
      ]
    },
    {
      company: 'FZI Research Center for Information Technology',
      role: 'Research Assistant / Master Thesis Researcher',
      dates: 'Apr 2024 – Aug 2024',
      location: 'Karlsruhe, Germany',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FZI_ForschungszentrumInformatik_Logo.png/1200px-FZI_ForschungszentrumInformatik_Logo.png',
      tasks: [
        'Improved generalization of PPO-based deep reinforcement learning algorithm',
        'Achieved up to 1.3x higher rewards compared to standard PPO',
        'Reduced robot collisions by over 60% in novel scenarios',
        'Developed collision avoidance pipeline based on uncertainty estimation',
        'Co-authored IEEE IROS 2025 paper on safe social navigation with DRL'
      ]
    },
    {
      company: 'DataEvo',
      role: 'Python and Shiny Developer',
      dates: 'May 2019 – Oct 2019',
      location: 'Buenos Aires, Argentina',
      logo: 'https://via.placeholder.com/100x100?text=DataEvo',
      tasks: [
        'Automated data science workflows using Python',
        'Optimized dashboards using Shiny'
      ]
    },
    {
      company: 'Programming for Design (P4D)',
      role: 'Programming Intern',
      dates: 'Jan 2019 – Apr 2019',
      location: 'Buenos Aires, Argentina',
      logo: 'https://via.placeholder.com/100x100?text=P4D',
      tasks: [
        'Developed and improved website features using HTML, CSS, JavaScript'
      ]
    }
  ]

  return (
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-accordion">
          <button
            className={`accordion-header ${expanded === idx ? 'active' : ''}`}
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
