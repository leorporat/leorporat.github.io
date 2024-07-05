
import {Fragment} from 'react'

function Project({Title, Description, Link, technologies}) {

    const data = ["test1", "test2"]

    const TechnologiesMap = technologies.map((technology) => {technology});

    return (

        <>
            <a href={Link} target="_blank" className='project-container'>
                <div className="project-text">
                    <span className='project-title'>{Title}</span>
                    <span className='link-arrow'>
                        <svg width="20" height="20" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='project-link-arrow'>
                        <path d="M8.74996 8.75H19.4825L6.61621 21.6162L8.38371 23.3838L21.25 10.5175V21.25H23.75V6.25H8.74996V8.75Z" fill="#6DB9FF"/>
                        </svg>
                    </span>
                    <p className='project-description'>{Description}</p>
                </div>
                <div className='technologies-container'>
                    {technologies.map((technology) => 
                        <Fragment key={technology.id}>
                            {technology.component}
                        </Fragment> 
                    )}    
                </div> 
            </a>
            
        </>
    )

}

export default Project;