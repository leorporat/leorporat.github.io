import Timeline from "../components/Timeline"
import brunswicklogobetter from "../assets/brunswicklogobetter.jpeg"
import gl_lab from "../assets/gl_lab.png"
import umnicon from "../assets/umnicon.jpg"

function Home() {
  
  const brunswick_description = "Working on the Autonomy Simulation Team to develop CI/CD pipelines to automate the testing of self-docking simulations and improve the simulation interface. I'm also contributing to the embedded features of the self-docking program in C++."
  const experiences = [
    {
      "company": "Brunswick",
      "position": "Software Engineer Intern",
      "description": brunswick_description, 
      "date": "May 2024 - Present",
      "icon": brunswicklogobetter
    },
    {
      "company": "GroupLens Research Lab",
      "position": "Undergraduate Research Assistant",
      "description": "Using React, Express.js, MySQL, and the OpenAI API to build a web app for custom video conferencing alongside several other developers.",
      "date": "September 2023 - Present",
      "icon": gl_lab
    },
    {
      "company": "University of Minnesota",
      "position": "Undergraduate Teaching Assistant",
      "description": "Teaching assistant for CSCI 1933 - Introduction to Algorithms & Data Structures (Java), and CSCI 1133 - Introduction to Computing (Python).",
      "date": "January 2023 - December 2023",
      "icon": umnicon
    }
  ]

    return (
      <div className='content-container'>
        <h1 id='bio-hi'>Hi!</h1>
        <p id='bio'> I'm Leor, a third-year Math & Computer Science student at the <strong>University of Illinois at Urbana-Champaign</strong>.</p>
        <p id='interests'>I'm interested in <strong>software engineering, mathematics, and the intersection
        between human-computer interaction and machine learning.</strong> I also love cooking, watching new movies (especially comedies and dramas), spending time outdoors, and coffee (currently waiting for any excuse to buy an espresso machine).</p>
        {/* <p>I'm currently interning at Brunswick, working on the Autonomy Simulation Team to develop CI/CD pipelines to automate the testing of self-docking simulations. I'm also contributing to the embedded features of the self-docking program in C++.</p> */}
        {/* <p id='current-work'>Currently, I'm a research assistant at the <a href="https://grouplens.org/" target="_blank">GroupLens lab</a>, advised by <a href="https://cse.umn.edu/cs/stevie-chancellor" target="_blank">Stevie Chancellor</a>.
        There, I'm helping build a full-stack application and chatbot that helps facilitate virtual meetings. I was also a teaching assistant for <a href="https://umtc.catalog.prod.coursedog.com/courses/8103461" target="_blank">CSCI 1933</a>, my old university's
        Introduction to Algorithms & Data Structures course, and have taught <a href="https://umtc.catalog.prod.coursedog.com/courses/8096661" target="_blank">CSCI 1133</a>, the Introduction
        to Computing course.</p> */}
        <h2>Experience</h2>
        <Timeline experiences={experiences} />
        <p>I'm always looking for opportunities to meet new people and learn new things. If you'd like to talk, please reach out at <a href="mailto:porat2@illinois.edu">porat2@illinois.edu</a>!</p>
      </div>
      
    )
  }
  
  export default Home