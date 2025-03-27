import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg';
const Services = () => {
  return (
    <div>
       <div className='myservice'>
      <div className="serviceTitle">
        <h1>My Digital offerings</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="servicecontainer">
        <div className="servicecard">
        <div className="servicecard__content">
          <p className='num'>01</p>
          <h1 className='para heading'>Web Designing</h1>
          <p className='para'>I have acquired hands-on experience in web design, mastering HTML, CSS, JavaScript</p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>
        {/* card 2 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>02</p>
          <h1 className='para heading'>Frontend Development </h1>
          <p className='para'>I specialized in crafting sleek, interactive, and user-centric </p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>
        {/* card 3 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>03</p>
          <h1 className='para heading'>Backend Development</h1>
          <p className='para'>I architect powerful and scalable backend systems </p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>
        {/* card 4 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>04</p>
          <h1 className='para heading'>Full-stack Development</h1>
          <p className='para'>I am a full-stack developer, skilled in building dynamic web solutions</p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>
        {/* card 5 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>05</p>
          <h1 className='para heading'>Content Writting</h1>
          <p className='para'>I craft engaging, and impactful content that resonates with audiences and drives results. </p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>
        {/* card 6 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>06</p>
          <h1 className='para heading'>Social Media</h1>
          <p className='para'>I specialize in creating engaging and strategy-driven social media content that boosts brand presence </p>
          <button className="cssbuttons-io-button">
        Read more
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
        </div>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Services
