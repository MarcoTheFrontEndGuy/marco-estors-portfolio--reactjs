import React, { useState } from 'react'
import './HeaderMarco.css'
// import logo from '../pic/marco-profile-picture.png'
const Header = () => {
// when scroll header at top 
   // window.addEventListener("scroll", function() {
   //    const header = document.querySelector(".header");
   //    header.classList.toggle("active", window.scrollY > 100)
   // })

   // toggle menu 
   const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
         {/* <div className="container d_flex"> */}
            <div className="header__logo">
               <span className="header__logo__myName">Marco Estors</span>
               {/* <span className="header__logo__myJob">Front End Developer</span> */}
            </div>

            <nav className="header__nav">
               
               {/* <ul className={Mobile ? "header__nav__ul-mobile" : "header__nav__ul"} onClick={() => setMobile(false)}   > */}
               <ul className={Mobile ? "header__nav__ul header__nav__ul-mobile" : "header__nav__ul"} onClick={() => setMobile(false)}   >

               {/* <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}   > */}
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
                  {/* <li>
                     <button className="home-btn">BUY NOW</button>
                  </li> */}
               </ul>
               
               {/* <button className="toggle" onClick={() => setMobile(!Mobile)}>
                  {Mobile ? <i className="fas fa-times close home-btn"></i> 
                          : <i className="fas fa-bars open"></i> }
               </button> */}

               <button className="toggle" onClick={() => setMobile(!Mobile)}>
                  {Mobile ? <i className="fas fa-times close"></i> 
                          : <i className="fas fa-bars open"></i> }
               </button> 
            </nav>
         {/* </div> */}
      </header>
       
    </>
  )
}

export default Header