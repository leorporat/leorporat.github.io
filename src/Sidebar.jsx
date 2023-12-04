import './App.css'
import personal_photo from './assets/personal_photo.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'

function Sidebar() {
  
    return (
      <div className='sidebar_container'>
        <h1 id='name'>Leor Porat</h1>
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
        {/* <p className='link_word'>[projects]</p> */}
      </div>
    )
  }
  
  export default Sidebar