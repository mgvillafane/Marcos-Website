import React, { useState } from 'react'

export default function Experience(){
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      company: 'Tech Innovations Co',
      role: 'Senior Frontend Developer',
      dates: '2022 - Present',
      tasks: [
        'Developed scalable React applications for 5+ clients',
        'Optimized performance reducing load time by 40%',
        'Led a team of 3 junior developers'
      ]
    },
    {
      company: 'Digital Solutions LLC',
      role: 'Full Stack Developer',
      dates: '2020 - 2022',
      tasks: [
        'Built REST APIs with Node.js and Express',
        'Designed databases in PostgreSQL',
        'Implemented JWT authentication'
      ]
    },
    {
      company: 'StartUp Labs',
      role: 'Junior Developer',
      dates: '2019 - 2020',
      tasks: [
        'First steps in full stack web development',
        'Learned best practices and clean code',
        'Contributed to open source projects'
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
              <h3>{exp.company}</h3>
              <p className="position">{exp.role}</p>
              <p className="dates">{exp.dates}</p>
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
