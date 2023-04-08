import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Firstcontent from './Components/Firstcontent';
import ProjectCard from './Components/ProjectCard';
// import bgimg from "."
function App() {
  return (
    <div className="App" >
      <div className="bg-image"></div>
      <div className='final-nav'>

      <Navbar/>
      {/* <div className='Project-card'>
      
      <ProjectCard/>
    </div> */}
      <Firstcontent/>
      </div>
    </div>
  );
}

export default App;
