import React from 'react'
import contact1 from './contact1.png'
import './ContactMarco.css'
import {FaGithub, FaLinkedin, FaYahoo} from 'react-icons/fa'
const ContactMarco = () => {
  return (
    <section className="contact">
       <header>
          <h2>CONTACT ME</h2>
       </header>
       <div className="contact__left">
          <img src={contact1} alt="this is an image" />
          <div className="contact__social" >
            <a href="https://www.paradise.com" alt="_blank" className="contact_social__icon" >
               <FaGithub />
            </a>
            <a className="contact_social__icon" >
               <FaLinkedin />
            </a>
            <a className="contact_social__icon" >
               <FaYahoo />
            </a>
          
          </div>
        
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
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <button type="submit">SEND MESSAGE</button>
           </form>
       </div>
    </section>
  )
}

export default ContactMarco