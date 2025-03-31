import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import aboutimg from '../../assets/aboutimg.png';

const About = () => {
  return (
    <section id="about-me" className="about">
      <div className="aboutTitle">
        <h1>About me</h1>
        <img loading='lazy' src={theme_pattern} alt="" />
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
          <img loading='lazy'  src={aboutimg} alt="Profile" />
        </div>
        <div className="aboutRight">
          <div className="aboutPara">
            <p>
              I am an experienced Frontend Developer with over a decade of professional expertise in the field.
              Throughout my career, I have had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my extensive experience but also in
              the enthusiasm and dedication I bring to each project.
            </p>
          </div>
          <div className="aboutSkills">
            <div className="aboutmyskill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
              </div>
              <div className="aboutmyskill">
              <p>React JS</p> <hr style={{ width: "65%" }} />
              </div>
              <div className="aboutmyskill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
              </div> 
               <div className="aboutmyskill">
              <p>Next JS</p> <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
        
      </div>
      <div className="aboutAchivements">
          <div className="ach">
            <h1>6+</h1>
            <p> MONTHS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="ach">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="ach">
            <h1>8+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
    </section>
  );
};
export default About;
