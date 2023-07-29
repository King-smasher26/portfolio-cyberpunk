import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Firstcontent from './Components/Firstcontent';
import ProjectCard from './Components/ProjectCard';
import Progressbar from './Components/Progressbar';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
alert("Portfolio under development!");

function App() {


    return (
    <div className="App" >
      <Parallax className='animation' pages={2} style={{top: '0',left: '0'}}>
        <ParallaxLayer offset={0} speed={1} factor={2}>
          <div className='animation_layer parallax' id='img1_parallax'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className='animation_layer parallax' id='img3_parallax'><Firstcontent className='first-content'/></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className='animation_layer parallax' id='img2_parallax'><Navbar className='nav-element'/></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.995} speed={1} factor={2}>
          <div className='animation_layer parallax' id='img4_parallax'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.995} speed={1} factor={2}>
          <div className='animation_layer parallax'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.997} factor={1} speed={2} >
          <div className='animation_layer parallax' id='progress-bar_parallax'>
          <h1 id='skills-text'><span>Skill</span><span>Set</span></h1>
            <div id='progress-bar_parallax2'><Progressbar/></div></div>
        <ParallaxLayer offset={1} speed={2} factor={2}>
          <div id='myprojects_parallax'>

          <h1 id='skills-text'><span>My</span><span>Projects</span></h1>
          <div className='animation_layer parallax'><ProjectCard/></div>
          </div>
        </ParallaxLayer>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;
