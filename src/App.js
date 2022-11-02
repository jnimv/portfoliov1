import './App.css';
import './Contact';
import Contact from './Contact';
import { useState } from 'react';
import Experience from './Experience';
import Projects from './Projects';


function App() {

const [ContactShown, setContactShown] = useState(false);
const [experienceShown, setExperienceShown] = useState(false);
const [projectsShown, setProjectsShown] = useState(false);

const handleContactClick = () => {
   setContactShown(true);
   setExperienceShown(false);
   setProjectsShown(false);
}

const handleExperienceClick = () => {
  setContactShown(false);
  setExperienceShown(true);
  setProjectsShown(false);
}

const handleProjectsClick = () => {
  setContactShown(false);
  setExperienceShown(false);
  setProjectsShown(true);
}

  return (
    <div className="App">
      <header><h1>Welcome to my portfolio!</h1>
      </header>
      <nav className="NavButtons">
        <button onClick={handleExperienceClick}>Experience</button>
        <button onClick={handleProjectsClick}>Projects</button>
        <button onClick={handleContactClick}>Contact</button>
      </nav>
    {experienceShown &&
      <div>
        <Experience />
      </div>}
    {projectsShown &&
      <div>
        <Projects />
      </div>}
    {ContactShown &&
      <div className='Contact'>
        <Contact />
      </div>}      
    </div>
  );
}

export default App;
