import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='heroimg'>
<img src='https://i.postimg.cc/nc6k6JzJ/heroimg-removebg-preview.png' border='0' width='200px'  alt='heroimg-removebg-preview'/>
</div>
<h1> <span>I'm Rashi Madan,</span> Aspiring MERN Stack developing | Passionate about Full Stack development</h1>
<p>"Dedicated to continuous learning, embracing new technologies, and refining my skills to stay ahead in the fast-evolving web landscape."</p>
<div className='heroAction'>
  <button className='heroConnect'>Get in touch</button>
  {/* <button className='heroConnect'>Download My CV</button> */}
  <div className="container">
        <label className="label">
          <input type="checkbox" className="input" />
          <span className="circle"><svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
            </svg>
            <div className="square" />
          </span>
          <p className="title">My CV</p>
          <p className="title">Open</p>
        </label>
      </div>
</div>
</div>
  )
}

export default Hero