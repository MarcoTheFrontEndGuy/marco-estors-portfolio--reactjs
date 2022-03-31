import React, { useState } from 'react'
import './HeaderMarco.css'

const Header = () => {

// toggle menu 
 const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
            <div className="header__logo">
               <span className="header__logo__myName">Marco Estors</span>
            </div>

            <nav className="header__nav"> 
               <ul className={Mobile ? "header__nav__ul header__nav__ul-mobile" : "header__nav__ul"} onClick={() => setMobile(false)}   >
                  <li>
                     <a href="#home">home</a>
                  </li>
                  <li>
                     <a href="#portfolio">portfolio</a>
                  </li>
                  <li>
                     <a href="#resume">resume</a>
                  </li>
                
                  <li>
                     <a href="#blog">blog</a>
                  </li>
                  <li>
                     <a href="#contact">contact</a>
                  </li>
               </ul>
               
               <button className="toggle" onClick={() => setMobile(!Mobile)}>
                  {Mobile ? <i className="fas fa-times close"></i> 
                          : <i className="fas fa-bars open"></i> }
               </button> 
            </nav>
      </header>
       
    </>
  )
}

export default Header