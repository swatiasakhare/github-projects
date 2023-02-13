import React from 'react'
import Project from "./Project"

const Projects = ({projectsData}) => {
  return (
    <div className='portfolio_projects'>
        {
            projectsData.map(project =>
                <Project key={project.id} project = {project}/>)
        }
    </div>
  )
}

export default Projects