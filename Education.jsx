import React, { useState } from 'react'

export default function Education(){
  const [expanded, setExpanded] = useState(0)

  const education = [
    {
      school: 'University of California, Berkeley (UC Berkeley)',
      degree: 'Master of Engineering in Electrical Engineering and Computer Science',
      dates: 'Aug 2026 – May 2027',
      location: 'Berkeley, California, USA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Cal_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
      details: [
        'Specialization in Robotics and Embedded Software',
        'Relevant courses: Robotics, Machine Learning, Robotic Manipulation & Interaction, Deep Reinforcement Learning',
        'Leadership: Robotics Affinity Group Leader, organizing site visits and workshops for a 70+ member community'
      ]
    },
    {
      school: 'University of Buenos Aires (UBA)',
      degree: 'Bachelor degree in Electronics Engineering (6-year engineering degree)',
      dates: 'Mar 2019 – Apr 2025',
      location: 'Buenos Aires, Argentina',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF-QztqGXBokQ/company-logo_200_200/company-logo_200_200/0/1631310205614?e=2147483647&v=beta&t=uxXG_R09K4IQ3F3YVAhjFmHV9PZeD1J_Urr-D2onJc4',
      details: [
        'GPA: 8.66 / 10 (US equivalent: 3.7 / 4.0)',
        'Award: University of Buenos Aires Outstanding Student',
        'Thesis: Development of a Robust Reinforcement Learning-Based Motion Planner for Autonomous Robots in Novel Scenarios',
        'Final grade: 10/10'
      ]
    },
    {
      school: 'Karlsruhe Institute of Technology (KIT)',
      degree: 'Scholarship (DAAD)',
      dates: 'Oct 2023 – Oct 2024',
      location: 'Karlsruhe, Germany',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_KIT.svg',
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGnwhO3hEjGSJ-X9-UxEe1sklwiH4IJFtow&s',
      details: [
      
        
      ]
    }
  ]

  return (
    <div className="experience-list">
      {education.map((edu, idx) => (
        <div key={idx} className="experience-accordion">
          <button
            className={`accordion-header ${expanded === idx ? 'active' : ''}`}
            aria-expanded={expanded === idx}
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
