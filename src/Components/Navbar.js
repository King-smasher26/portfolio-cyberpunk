import React from 'react'
import "../style.css"
import { gsap } from 'gsap';
import "../button.css"
import "../handles.css"
export default function Navbar() {
  
  return (
    <>
    {/* this is trial */}
    <nav className='nav' id="mynav">
      <div className='nav-left'>
              <span className='aman' id="aman">Portfolio</span>
            <div className="icons">
         <a href="#">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-instagram"></span>
            </div>
            <div className="text">
               Instagram
            </div>
         </a>
         <a href="#">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-linkedin-in"></span>
            </div>
            <div className="text">
               Linkedin
            </div>
         </a>
         <a href="https://github.com/King-smasher26">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-github"></span>
            </div>
            <div className="text">
               Github
            </div>
         </a>
      </div>

            </div>
        <ul className='nav-ul'>


            <li className='navbar-section'>
              <div className='skills-sectionIn'>
              <button class='glowing-btn2'><span class='glowing-txt'>SK<span class='faulty-letter'>I</span>LLS</span></button>
              </div>
            </li>            
            <li className='navbar-section'>
              <div className='skills-sectionIn'>
              <button class='glowing-btn'><span class='glowing-txt'>PR<span class='faulty-letter'>OJ</span>ECTS</span></button>
              </div>
            </li>            
            
        </ul>
    </nav>
    
    </>
  )
}
// VANTA.HALO({
  //     el: "#mynav",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     xOffset: -0.41,
//     yOffset: -0.02
//   })

