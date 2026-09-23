import React from 'react'
import { Link } from 'react-router-dom'

const projectSlugs = {
  'Smartlock - An IoT Wi-Fi Doorlock': 'smartlock-intelligent-lock',
  'ASTAR - Orientation Estimation of Nanosatellites': 'astar-orientation-estimation',
  'Multistage Voltage Regulator': 'multistage-voltage-regulator',
  'High Frequency Amplifier': 'high-frequency-amplifier',
  'Robust Motion Planner for Autonomous Robots': 'robust-motion-planner',
  'Pendulum Control System': 'pendulum-control-system',
  'Vector-based Paper Search Agent': 'vector-based-paper-search',
  'Cellular Base-Station Location Estimation': 'antenna-position-estimator',
  'IoT Roadside Reboot System': 'IoT-Traffic-Sensor-Reboot',
}

export default function ProjectCard({title, desc, tech, image, categories}){
  const projectSlug = projectSlugs[title] || title.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" loading="lazy" decoding="async" />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="desc">{desc}</p>
        <p className="tech"><strong>Technologies:</strong> {tech}</p>
        {categories && categories.length > 0 && (
          <div className="project-categories">
            {categories.map((category) => (
              <span key={category} className="category-badge">{category}</span>
            ))}
          </div>
        )}
        <Link to={`/project/${projectSlug}`} className="btn">View project</Link>
      </div>
    </article>
  )
}
