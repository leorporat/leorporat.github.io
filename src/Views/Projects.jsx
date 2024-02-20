import Project from "../components/Project.jsx"
import ProjectTechnology from "../components/ProjectTechnology.jsx";

function Projects() {
  
    const listenify_description = "A full-stack application that visualizes your Spotify listening history & provides insightful analytics. Fixes the \"shoot, I really liked that song but I forgot the name\" issue.";
    const congress_description = "A fun web app to compare US Congress members based on preference and affiliation. Built for MinneHack 2023"
    const ListenifyTechnologies = [ {id: "JavaScript", component: ProjectTechnology("JavaScript")}, {id: "Python", component: ProjectTechnology("Python")}, {id: "React", component: ProjectTechnology("React")}, {id: "Spotify API", component: ProjectTechnology("Spotify API")}, {id: "Django", component: ProjectTechnology("Django")}]
    const CongressTechnologies = [ {id: "JavaScript", component: ProjectTechnology("JavaScript")}, {id: "Python", component: ProjectTechnology("Python")}, {id: "React", component: ProjectTechnology("React")}, {id: "Beautiful Soup", component: ProjectTechnology("Beautiful Soup")}]

    return (
      <>
      <div className='projects-container'>
        <Project Title="Listenify - Spotify Tracking Tool"
        Description={listenify_description}
        Link="https://github.com/mulupuruvikas/Listenify"
        technologies={ListenifyTechnologies}
        />
        <Project 
        Title="Congress Member Comparison"
        Description={congress_description}
        Link="https://github.com/leorporat/houseofrizzpresentatives"
        technologies={CongressTechnologies}
        />
      </div>
      </>
    )
  }
  
  export default Projects