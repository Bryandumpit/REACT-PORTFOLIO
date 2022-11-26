import React  from 'react';

function Works (props) {
  const {
    projects
  } = props;

  console.log(projects);
  
  projects.map(project=>{console.log(project.name)})
  
  return(
    <div className="flex-row">
        {projects.map( (project) => (
          <div className={`mx-1 ${project.name}`} key={project.name}>
            <span> {project.name} </span>
            <div>
              <p> {project.description}</p>
            </div>
            <ul>
              {project.builtWith.map(tech=>(
                <li>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
} 
    
export default Works;