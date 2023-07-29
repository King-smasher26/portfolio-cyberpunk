import React, {useState, useEffect} from 'react'
import { useRef} from 'react';
import htmlimg from "../images/HTML5_logo_and_wordmark.svg.png"
import cssimg from "../images/css-3-logo-svgrepo-com.svg"
import jsimg from "../images/logo-javascript.svg"
import cimg from "../images/c.svg"
import reactimg from "../images/react-2.svg"
import gitimg from "../images/github-mark.svg"
import '../progressbar.css'
export default function Progressbar() {
	const myRef=useRef();

	useEffect(()=>{
		const observer=new IntersectionObserver((entries)=>{
			const entry1 = entries[0];
			setIsRunning(entry1.isIntersecting)
			// console.log('entry',entry);

		})
		observer.observe(myRef.current)
	},[]) 

	const [filled, setFilled] = useState(0);
	const [filled2, setFilled2] = useState(0);
	const [filled3, setFilled3] = useState(0);
	const [filled4, setFilled4] = useState(0);
	const [filled5, setFilled5] = useState(0);
	const [filled6, setFilled6] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 90 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 1), 20)
		}
	},[filled, isRunning])
	useEffect(() => {
		if (filled2 < 75 && isRunning) {
			setTimeout(() => setFilled2(prev => prev += 1), 20)
		}
	},[filled2, isRunning])
	useEffect(() => {
		if (filled3 < 80 && isRunning) {
			setTimeout(() => setFilled3(prev => prev += 1), 20)
		}
	},[filled3, isRunning])
	useEffect(() => {
		if (filled4 < 80 && isRunning) {
			setTimeout(() => setFilled4(prev => prev += 1), 20)
		}
	},[filled4, isRunning])
	useEffect(() => {
		if (filled5 < 75 && isRunning) {
			setTimeout(() => setFilled5(prev => prev += 1), 20)
		}
	},[filled5, isRunning])
	useEffect(() => {
		if (filled6 < 60 && isRunning) {
			setTimeout(() => setFilled6(prev => prev += 1), 20)
		}
	},[filled6, isRunning])


  return (
	  <div className='allprogbars'>
	
	<div className='prog-row'>

		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={htmlimg}/></p>
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
		</div>
		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={cssimg}/></p>
			
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled2}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled2 }%</span>
		  </div>
	    </div>

	</div>
		<div className='prog-row'>


		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={jsimg}/></p>
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled3}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled3 }%</span>
		  </div>
		</div>
		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={cimg}/></p>
			
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled4}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled4 }%</span>
		  </div>
	    </div>
	
		</div>
	<div className='prog-row'>

		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={reactimg}/></p>
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled5}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled5 }%</span>
		  </div>
		</div>
		<div className='setprog'>
		<p className='barname'><img className='skill-logos' src={gitimg}/></p>
			
		  <div ref={myRef} className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled6}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
				}}></div>
			  <span className="progressPercent">{ filled6 }%</span>
		  </div>
	    </div>
	</div>
	
	</div>
  )
}
