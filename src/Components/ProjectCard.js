import React from 'react';
import "../card.css"
export default function ProjectCard() {
  return (
      <div className="card">
        <div className="bg"></div>
        <div className="content">
            <h1 className="heading" id="thecard">IQ <br/><br/>Test</h1>
            <br/>
            <p className="info">A website to test relative IQ using vanila HTML, CSS, JS, Bootstrap and JQuery </p>
        </div>
    </div>
    
  )
}
