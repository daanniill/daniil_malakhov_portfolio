import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import ProjectCard from './components/ProjectCard/ProjectCard'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            <ProjectCard
              title="Sample Project 1"
              description="A custom-trained language model designed to understand and solve complex mathematical problems, providing step-by-step solutions and explanations."
              tags={["AI", "Machine Learning", "Mathematics"]}
              githubLink="https://github.com/daanniill/restaurant-page"
              liveLink="https://daanniill.github.io/restaurant-page/"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
