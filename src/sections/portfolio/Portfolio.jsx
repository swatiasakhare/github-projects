import React, { useState } from 'react'
import './portfolio.css'
import data from './data'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'

const Portfolio = () => {
  const[projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]
  return (
    <section id='portfolio'>
      <h2>Recent projects</h2>
      <p>check out Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quia, reprehenderit!</p>
        <div className="container portfolio_container">
          <ProjectsCategories categories={uniqueCategories}/>
          <Projects projectsData={projects} />
        </div>
    </section>
  )
}

export default Portfolio