import React from 'react'
import './Home.css'
import hero from '../pic/marco-estors--hero-picture.jpg'
import skill1 from '../pic/skill1.png'
import skill2 from '../pic/skill2.png'
import skill3 from '../pic/skill3.png'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
     <>
         <section className="hero" id="home">
               <div className="hero__left">
                
                  <h1>I'm a Front End Developer</h1>


                  <h2>{`{ /* WELCOME TO MY WORLD */ }`}</h2>
               
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus hic optio est voluptatibus voluptates ut!</p>
                  {/* <div className="no-class-yet"> */}
                  <div className="hero__left__social-group">
                     <button className="btn_shadow">
                        <i className="fab fa-facebook-f"></i>
                     </button>
                     <button className="btn_shadow">
                        <i className="fab fa-instagram"></i>
                     </button>
                     <button className="btn_shadow">
                        <i className="fab fa-linkedin-in"></i>
                     </button>
                  </div>
                  {/* </div> */}
               </div>
               <div className="hero__right">
               
                  <figure className="hero__right__figure">
                     <img src={hero} alt="" />
                  </figure>

                  <div className="hero__right__social-group">
                     <button className="btn_shadow">
                        <i className="fab fa-facebook-f"></i>
                     </button>
                     <button className="btn_shadow">
                        <i className="fab fa-instagram"></i>
                     </button>
                     <button className="btn_shadow">
                        <i className="fab fa-linkedin-in"></i>
                     </button>
                  </div>
               </div>
         </section>
     
     </>
  )
}

export default Home