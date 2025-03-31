import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerTop">
        <div className="topleft">
              <h2 className='footlogo'> <img src="/src/assets/nav_underline.svg" alt="underline" />Rashi</h2>

            <p>I am a full-stack developer from, India with 6+ months of experience.</p>
        </div>
        <div className="footerRight">
            <div className="footer-email-input">
                <img src="/src/assets/user_icon.svg" alt="" />
                <input type="email"  placeholder='Enter your email'/>
            </div>
            <div className="button  b"> Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2025 Rashi Madan. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
