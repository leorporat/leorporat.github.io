import Sidebar from './Sidebar.jsx'
import './App.css'
import Home from './Views/Home.jsx'
import Projects from './Views/Projects.jsx'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <div className='app-container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personal-web/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
