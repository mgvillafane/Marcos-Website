import React from 'react'
import { Link } from 'react-router-dom'
import SmartlockImg from './src/public/models/Smartlock.png'

const projectSlugs = {
  'Smartlock - Intelligent Lock': 'smartlock-intelligent-lock',
  'ASTAR - Orientation Estimation of Nanosatellites': 'astar-orientation-estimation',
  'Multistage Voltage Regulator': 'multistage-voltage-regulator',
  'High Frequency Amplifier': 'high-frequency-amplifier',
  'Robust Motion Planner for Autonomous Robots': 'robust-motion-planner',
  'Pendulum Control System': 'pendulum-control-system',
  'Vector-based Paper Search Agent': 'vector-based-paper-search',
  'Antenna Position Estimator with AI': 'antenna-position-estimator',
}

export default function ProjectCard({title, desc, tech, url, image, categories, shouldAnimate, animationIndex}){
  const projectSlug = projectSlugs[title] || title.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
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
        <Link to={`/project/${projectSlug}`} target="_blank" className="btn">View project</Link>
      </div>
    </article>
  )
}
