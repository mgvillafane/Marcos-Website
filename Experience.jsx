import React, { useState } from 'react'
import DataEvo from './src/public/models/DataEvo.png'
import Tenaris from './src/public/models/Tenaris.png'

export default function Experience(){
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      company: 'Techint Group – Tenaris',
      role: 'Industrial Process Innovation Researcher',
      dates: 'Jul 2025 – Present',
      location: 'Buenos Aires, Argentina',
      logo: 'https://www.tenaris.com/media/z0bal0tu/microsoftteams-image-8.png?v=1db50eb66c4c5f0',
      tasks: [
        'Designed and developed robotic systems for automatic pipe quality testing',
      ]
    },
    {
      company: 'FZI Research Center for Information Technology',
      role: 'Research Assistant / Master Thesis Researcher',
      dates: 'Apr 2024 – Aug 2024',
      location: 'Karlsruhe, Germany',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRk62XCWaxs7uN8FlSQgr19SogdI93ICVrg&s',
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
      logo: DataEvo,
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
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHaO2xvf4A9AA/company-logo_100_100/company-logo_100_100/0/1631315773744?e=1779321600&v=beta&t=YbWlhUNPwy1s94Ul2XYHrS4bR1uYM6nkoB5GF10Cf7k',
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
