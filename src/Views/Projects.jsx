import Project from "../components/Project.jsx"
import ProjectTechnology from "../components/ProjectTechnology.jsx";

function Projects() {
  
const dartfrog_description = "A web app that uses the Gemini API to automatically perform parsing, analysis, and visualization of the data in any CSV file. Built for HackIllinois 2024.";
    const DartfrogTechnologies = [ {id: "JavaScript", component: ProjectTechnology("JavaScript")}, {id: "Python", component: ProjectTechnology("Python")}, {id: "React", component: ProjectTechnology("React")}, {id: "Firebase", component: ProjectTechnology("Firebase")}, {id: "Flask", component: ProjectTechnology("Flask")}, {id: "Gemini API", component: ProjectTechnology("Gemini API")}]
    const beaches_description = "An application that uses machine learning to predict E. coli and viral content of Chicago beaches. Part of UIUC's Research Park 2024 Hackthon"
    const BeachesTechnologies = [ {id: "TypeScript", component: ProjectTechnology("TypeScript")}, {id: "Python", component: ProjectTechnology("Python")}, {id: "Next.js", component: ProjectTechnology("Next.js")}, {id: "pandas", component: ProjectTechnology("pandas")}, {id: "Flask", component: ProjectTechnology("Flask")}]

    return (
      <>
      
      <div className='projects-container'>
        <Project
          Title="Dartfrog - AI CSV File Analysis Tool"
          Link="https://github.com/orgs/DartFrogHackillinois/repositories"
          Description={dartfrog_description}
          technologies={DartfrogTechnologies}
        />
        <Project
          Title="Chicago Beaches Health Predictor"
          Link="https://github.com/aditi135/rphackathon"
          Description={beaches_description}
          technologies={BeachesTechnologies}
        />
        {/* <Project 
        Title="Congress Member Comparison"
        Description={congress_description}
        Link="https://github.com/leorporat/houseofrizzpresentatives"
        technologies={CongressTechnologies}
        /> */}
        
      </div>
      </>
    )
  }
  
  export default Projects