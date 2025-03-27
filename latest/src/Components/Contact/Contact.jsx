import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently available for new projects and open to collaboration opportunities. Whether you need a seamless frontend experience, a robust backend system, or a full-stack solution, I am here to deliver high-quality, scalable results.</p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src="/src/assets/mail_icon.svg" alt="" />
                <p>rashimadan@70@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src="/src/assets/call_icon.svg" alt="" />
                    <p>+91 83645-33571</p>
                    </div>
                    <div className="contact-detail">
                    <img src="/src/assets/location_icon.svg" alt="" />
                    <p>Patiala,Punjab</p>
                    </div>
            </div>
        </div>
        <form action="" className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your e-mail</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
            <button className="full-rounded">
        <span>Submit</span>
        <div className="border full-rounded" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
