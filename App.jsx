import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import Experience from './Experience.jsx'
import SocialLinks from './SocialLinks.jsx'
import useIntersectionObserver from './useIntersectionObserver.js'

export default function App(){
  const aboutRef = useIntersectionObserver()
  const experienceRef = useIntersectionObserver()
  const projectsRef = useIntersectionObserver()
  const skillsRef = useIntersectionObserver()
  const contactRef = useIntersectionObserver()

  return (
    <div className="app">
      <Header />
      <Hero />

      <main className="container">
        <section id="about" className="card fade-section" ref={aboutRef}>
          <div className="about-content">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Mi foto" className="about-image" />
            <div className="about-text">
              <h2>Sobre mí</h2>
              <p className="lead">[Tu elevator pitch completo]</p>
              <p>Soy un profesional apasionado por crear experiencias digitales excepcionales. Con experiencia en desarrollo full-stack, siempre busco mejorar mis habilidades y entregar soluciones de calidad.</p>
              <p>Me encanta aprender nuevas tecnologías y colaborar con equipos talentosos para transformar ideas en realidad.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="card fade-section" ref={experienceRef}>
          <h2>Experiencia</h2>
          <Experience />
        </section>

        <section id="projects" className="card fade-section" ref={projectsRef}>
          <h2>Proyectos</h2>
          <div className="projects-grid">
            <ProjectCard 
              title="[Nombre proyecto]" 
              desc="[Descripción]" 
              tech="[Stack usado]" 
              url="[URL]"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
            />
            <ProjectCard 
              title="[Nombre proyecto]" 
              desc="[Descripción]" 
              tech="[Stack usado]" 
              url="[URL]"
              image="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop"
            />
          </div>
        </section>

        <section id="skills" className="card fade-section" ref={skillsRef}>
          <h2>Habilidades</h2>
          <div className="skills-grid">
            <div>
              <h4>Lenguajes</h4>
              <p>[Lista]</p>
            </div>
            <div>
              <h4>Frontend</h4>
              <p>[Lista]</p>
            </div>
            <div>
              <h4>Backend</h4>
              <p>[Lista]</p>
            </div>
            <div>
              <h4>Herramientas</h4>
              <p>[Lista]</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card fade-section" ref={contactRef}>
          <h2>Contacto</h2>
          <p>¿Interesado en trabajar juntos? Conéctate conmigo en:</p>
          <SocialLinks />
          <p style={{marginTop: '16px'}}>O envíame un correo directo a <a href="mailto:tu@correo.com">tu@correo.com</a></p>
          <a href="mailto:tu@correo.com" className="btn primary">Enviar email</a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} [Tu nombre]. Hecho con React. Paleta: verde suave + dark mode.</p>
      </footer>
    </div>
  )
}
