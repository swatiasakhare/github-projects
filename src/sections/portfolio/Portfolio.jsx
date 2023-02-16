import React, { useState } from 'react'
import './portfolio.css'
import data from './data'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'

const Portfolio = () => {
  const[projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]

  const filterProjectsHandler = (category) => {
    if (category === 'all'){
      setProjects(data);
      return
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id='portfolio'>
      <h2>Recent projects</h2>
      <p>check out Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quia, reprehenderit!</p>
        <div className="container portfolio_container">
          <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projectsData={projects} />
        </div>
    </section>
  )
}

export default Portfolio