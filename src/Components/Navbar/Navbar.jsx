import React, { useRef } from "react";
import './Navbar.css';

const Navbar = ({menu,handleScroll}) => {
const menuRef=useRef();
const openMenu=()=>{
  menuRef.current.style.right="0";
}
const closeMenu=()=>{
  menuRef.current.style.right="-350px";
}
  return (
    <div className="navbar">
          <h1 className='logo'> <img src="./nav_underline.svg" alt="underline" /> Rashi</h1>
     <img onClick={openMenu}
     src="./menu_open.svg" className="nav-mob-open"  alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu}
        src="./menu_close.svg" alt="" className="nav-mob-close" />
    
        {["Home", "About me", "Services", "Portfolio", "Contact"].map((item) => (
          <li key={item} onClick={() => handleScroll(item)}>
            <p>{item}</p>
            {menu === item ? <img src="./nav_underline.svg" alt="underline" /> : null}
          </li>
        ))}
      </ul>
      <button className="connect" onClick={() => handleScroll("Contact")}>
        Connect with me
      </button>
    </div>
  );
};

export default Navbar;