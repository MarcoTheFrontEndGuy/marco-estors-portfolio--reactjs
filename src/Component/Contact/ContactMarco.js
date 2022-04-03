import React from 'react'
import contact1 from './contact1.png'
import './ContactMarco.css'
import {FaGithub, FaLinkedin, FaYahoo} from 'react-icons/fa'
const ContactMarco = () => {
  return (
    <section className="contact">
       <header className="contact__header">
          <h2>CONTACT ME</h2>
       </header>
       <div className="contact__content">
         <div className="contact__left">
            <img className="contact__left__bigImageForm" src={contact1} alt="this is an image" />
         </div>
         <div className="contact__right">
            <form action="">
               <label htmlFor="" className="form__label-inline">NAME:
                  <input type="text" />
               </label>

               <label htmlFor="" className="form__label-inline">PHONE
                  <input type="text" />
               </label>

               <label htmlFor="" className="form__label-block">EMAIL
                  <input type="text" />
               </label>
               
               <label htmlFor="" className="form__label-block">GET IN TOUCH
                  <textarea name="" id="" cols="5" rows="7"></textarea>
               </label>
               <button className="contact__right__button-submit" type="submit">SEND MESSAGE</button>
            </form>
         </div>
       </div>
    </section>
  )
}

export default ContactMarco