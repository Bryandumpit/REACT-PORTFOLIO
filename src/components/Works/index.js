import React  from 'react';


function Works (props) {
  const {
    projects
  } = props;

  return(
    <div className="flex-row" >
        {projects.map( (project) => (
          <div className={`mx-1 ${project.name}`} key={project.name}>
            <span> {project.name} </span>
            <div>
              <a target='_blank' href={`${project.url}`} rel="noreferrer">
                <img alt={`${project.name}`} src={require(`../../assets/portfolio-images/${project.screenshot}`)}/>
              </a>
              <p> {project.description}</p>
            </div>
            <ul>
              {project.builtWith.map((tech,index)=>(
                <li key={index}>
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