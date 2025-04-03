import React from 'react'
import './Services.css'
import theme_pattern from '/theme_pattern.svg';
const Services = () => {
  return (
    <div>
       <section id="services" className='myservice'>
      <div className="serviceTitle">
        <h1>My Digital offerings</h1>
        <img loading='lazy'  src={theme_pattern} alt="" />
        </div>
        <div className="servicecontainer">
        <div className="servicecard">
        <div className="servicecard__content">
          <p className='num'>01</p>
          <h1 className='para heading'>Web Designing</h1>
          <p className='para paragraph'>I have acquired hands-on experience in web design, mastering HTML, CSS, JavaScript.</p>
        </div>
        </div>
        {/* card 2 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>02</p>
        <h1 className='para heading'>Frontend Development</h1>
        <p className='para'>
  I specialize in crafting sleek, interactive, and user-centric web experiences using modern technologies. 
</p>

        </div>
        </div>
        {/* card 3 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>03</p>
          <h1 className='para heading'>Backend Development</h1>
          <p className='para'>I build secure, efficient, and scalable backend systems using modern technologies, ensuring seamless data processing, API integrations, and smooth server-side operations. </p>
  
        </div>
        </div>
        {/* card 4 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>04</p>
          <h1 className='para heading'>Full-stack Development</h1>
          <p className='para'>I develop complete web solutions by handling both frontend and backend, creating seamless and scalable applications with modern technologies for an optimal user experience.</p>
     
        </div>
        </div>
        {/* card 5 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>05</p>
          <h1 className='para heading'>Content Writting</h1>
          <p className='para'>I create clear, engaging, and impactful content tailored to the audience, ensuring effective communication, SEO optimization, and a compelling brand voice. </p>
    
        </div>
        </div>
        {/* card 6 */}
        <div className="servicecard">
        <div className="servicecard__content">
        <p className='num'>06</p>
          <h1 className='para heading'>UI/UX Design</h1>
          <p className='para'>I design intuitive, user-friendly, and visually appealing interfaces by focusing on user experience, accessibility, and modern design principles to create engaging digital products. </p>
   
        </div>
        </div>

        </div>
    </section>
    </div>
  )
}

export default Services
