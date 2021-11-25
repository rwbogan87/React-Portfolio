import Project from './project'

const ProjectString = 'Projects'

function ProjectComponent() {
    return (
      <div className="ProjectComponent">
        {ProjectString}
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
  
  export {ProjectComponent, ProjectString};
  