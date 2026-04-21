import React, { useState } from 'react'

export default function Experience(){
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      company: 'Tech Innovations Co',
      role: 'Senior Frontend Developer',
      dates: '2022 - Presente',
      tasks: [
        'Desarrollé aplicaciones React escalables para 5+ clientes',
        'Optimicé performance reduciendo load time en 40%',
        'Lideré equipo de 3 desarrolladores junior'
      ]
    },
    {
      company: 'Digital Solutions LLC',
      role: 'Full Stack Developer',
      dates: '2020 - 2022',
      tasks: [
        'Construcción de APIs REST con Node.js y Express',
        'Diseño de bases de datos en PostgreSQL',
        'Implementación de autenticación JWT'
      ]
    },
    {
      company: 'StartUp Labs',
      role: 'Junior Developer',
      dates: '2019 - 2020',
      tasks: [
        'Primeros pasos en desarrollo web full stack',
        'Aprendizaje de buenas prácticas y clean code',
        'Contribuciones a proyectos open source'
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
