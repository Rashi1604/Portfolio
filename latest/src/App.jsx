import './App.css'
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/services/Services'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App =() =>{

  const [menu, setMenu] = useState("Home");

  const handleScroll = (section) => {
    setMenu(section);
    const element = document.getElementById(section.toLowerCase().replace(" ", "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
          {/* <Navbar handleScroll={handleScroll} /> */}
          <Navbar menu={menu} handleScroll={handleScroll} />
      <Hero handleScroll={handleScroll} />
    <About/>
  <Services/>
   <Work/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
