import React, { useState } from 'react'

export default function Education(){
  const [expanded, setExpanded] = useState(0)

  const education = [
    {
      school: 'University of Buenos Aires (UBA)',
      degree: 'Bachelor Degree in Electronics Engineering',
      dates: 'Mar 2019 – Apr 2025',
      location: 'Buenos Aires, Argentina',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/UBA_logo.svg/1200px-UBA_logo.svg.png',
      details: [
        'GPA: 8.66 / 10',
        'Award: Outstanding student',
        'Thesis: Development of a Robust Reinforcement Learning-Based Motion Planner for Autonomous Robots in Novel Scenarios',
        'Final grade: 10/10'
      ]
    },
    {
      school: 'Karlsruhe Institute of Technology (KIT)',
      degree: 'Scholarship (DAAD)',
      dates: 'Oct 2023 – Oct 2024',
      location: 'Karlsruhe, Germany',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/KIT_logo.svg/1200px-KIT_logo.svg.png',
      details: [
        'Full scholarship for study and research in Germany',
        'Research in reinforcement learning and robotics'
      ]
    },
    {
      school: 'Technical University of Berlin (TU Berlin)',
      degree: 'Exchange Semester',
      dates: 'Oct 2022 – Mar 2023',
      location: 'Berlin, Germany',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_TU_Berlin.svg/1200px-Logo_TU_Berlin.svg.png',
      details: [
        'Study abroad exchange program',
        'Developed IoT traffic sensor system project'
      ]
    }
  ]

  return (
    <div className="experience-list">
      {education.map((edu, idx) => (
        <div key={idx} className="experience-accordion">
          <button
            className={`accordion-header ${expanded === idx ? 'active' : ''}`}
            onClick={() => setExpanded(expanded === idx ? -1 : idx)}
          >
            <div className="header-content">
              {edu.logo && <img src={edu.logo} alt={edu.school} className="edu-logo" />}
              <div className="header-text">
                <h3>{edu.school}</h3>
                <p className="position">{edu.degree}</p>
                <p className="dates">{edu.dates}</p>
              </div>
            </div>
            <span className="toggle-icon">
              {expanded === idx ? '−' : '+'}
            </span>
          </button>
          {expanded === idx && (
            <div className="accordion-content">
              <ul>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
