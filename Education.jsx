import React, { useState } from 'react'

export default function Education(){
  const [expanded, setExpanded] = useState(0)

  const education = [
    {
      school: 'Universidad Tecnológica Nacional',
      degree: 'Bachelor of Systems Engineering',
      dates: '2016 - 2020',
      details: [
        'GPA: 8.5/10',
        'Specialization in Software Development',
        'Thesis: "Algorithm Optimization in Distributed Environments"'
      ]
    },
    {
      school: 'University of Buenos Aires',
      degree: 'Electronics Engineering',
      dates: '2019 - 2025',
      details: [
        'Degree completed with honors',
        'Courses: Machine Learning, Deep Learning, NLP',
        'Final Project: Image classifier using CNN'
      ]
    },
    {
      school: 'Google Cloud Academy',
      degree: 'Professional Cloud Architect',
      dates: '2022',
      details: [
        'Validated GCP Certification',
        'Cloud infrastructure design',
        'Implementation of scalable solutions'
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
              <h3>{edu.school}</h3>
              <p className="position">{edu.degree}</p>
              <p className="dates">{edu.dates}</p>
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
