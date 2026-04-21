import React from 'react'

export default function ProjectCard({title, desc, tech, url, image}){
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="desc">{desc}</p>
        <p className="tech"><strong>Tecnologías:</strong> {tech}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn">Ver proyecto</a>
      </div>
    </article>
  )
}
