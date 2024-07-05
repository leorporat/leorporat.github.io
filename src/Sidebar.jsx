import './App.css'
import personal_photo from './assets/personal_photo.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
import arrow from './assets/link-arrow.svg'
import {Link} from 'react-router-dom'

function Sidebar() {
  
    return (
      <div className='sidebar_container'>
        <Link id='name-link' to='/'>
          <h1 id='name'>Leor Porat</h1>
        </Link>
        <img id='personal_photo' src={personal_photo} alt='Personal photo did not load'></img>
        <div id='icon_holder'>
          <a href="mailto:porat2@illinois.edu">
            <img className='link_icon' id='mail_icon' src={mail}></img>
          </a>
          <a href="http://www.github.com/leorporat" target="_blank">
            <img className='link_icon' id='github_icon' src={github}></img>
          </a>
          <a href="http://www.linkedin.com/in/leor-porat" target="_blank">
            <img className='link_icon' id='linkedin_icon' src={linkedin}></img>
          </a>
        </div>
        <Link to='/projects' className='link-word'>
          <span className='link-text'>projects</span>
          <span className='link-arrow'>
            <svg width="15" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74996 8.75H19.4825L6.61621 21.6162L8.38371 23.3838L21.25 10.5175V21.25H23.75V6.25H8.74996V8.75Z" fill="#6DB9FF"/>
            </svg>
          </span>
        </Link>
        {/* <Link to='/cooking' className='link-word'>
          <span className='link-text'>cooking</span>
          <span className='link-arrow'>
            <svg width="15" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.74996 8.75H19.4825L6.61621 21.6162L8.38371 23.3838L21.25 10.5175V21.25H23.75V6.25H8.74996V8.75Z" fill="#6DB9FF"/>
            </svg>
          </span>
        </Link> */}
      </div>
    )
  }
  
  export default Sidebar