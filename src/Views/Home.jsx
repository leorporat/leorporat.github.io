import Timeline from "../components/Timeline"

function Home() {

  const experiences = [
    {
      "company": "Apple",
      "description": "Built a distributed data aggregation system to improve lab observability"
    },
    {
      "company": "UIUC",
      "description": "CA for CS 341 (System Programming), covering memory allocators, multithreading, and networking"
    },
    {
      "company": "Brunswick",
      "description": "Worked on simulation verification of a boat self-docking system"
    },
    {
      "company": "GroupLens Research Lab",
      "description": "Built an AI agent + video conferencing platform to study how agents can improve meeting inclusivity",
      "paper": {
        "url": "https://dl.acm.org/doi/abs/10.1145/3772318.3791135",
        "label": "Paper"
      }
    }
  ]

    return (
      <div className='content-container'>
        <h1 id='bio-hi'>Hi!</h1>
        <p id='bio'> I'm Leor, a recent Math & Computer Science graduate from the <strong>University of Illinois at Urbana-Champaign</strong>.</p>
        <p id='interests'>I'm interested in the <strong>intersection between human-computer interaction and machine learning.</strong> I also love cooking, watching new movies (especially comedies and dramas), spending time outdoors.</p>
        <h2>Previous Experience</h2>
        <Timeline experiences={experiences} />
        <p>I'm always looking for opportunities to meet new people and learn new things. If you'd like to talk, please reach out at <a href="mailto:lrporat@gmail.com">lrporat@gmail.com</a>!</p>
      </div>

    )
  }

  export default Home
