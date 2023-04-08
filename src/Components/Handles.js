import React from 'react'
import "../handles.css"
export default function handles() {
  return (
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
         <a href="#">
            <div className="layer">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span className="fab fa-github"></span>
            </div>
            <div className="text">
               Linkedin
            </div>
         </a>
      </div>
  )
}
