import React from 'react'
import './PORTFOLIO_NEW_ONE.css'
import reactImage from './images/react-image.jpg'
import { MdConnectedTv } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const PORTFOLIO_NEW_ONE = () => {
  return (
   //  <section className="portfolio">
   <section className="portfolio">
      <header className="portfolio__header">
         <h2 className="portfolio__header__h2">Portfolio</h2>
         <h3 className="portfolio__header__h3">My latest and more relevant work only</h3>
      </header>
      <div className="portfolio__projects">
       
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  {/* <img src="./images/react-image.jpg" alt="" /> */}
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
            <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
            <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
            <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
               <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
               <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>
         <div className="portfolio__project">
            <div className="portfolio__project__header">
               <div className="portfolio__project__header__image">
                  <img src={reactImage} alt="" />
               </div>
               <h4 className="portfolio__project__header__h4">Project 1 Name: Title </h4>
            </div>
          
            <div className="portfolio__project__buttons">
               <a href="#goLive">
                  <FaRocket className="portfolio__project__buttons__icon"/>
               </a>
               <a href="#github1">
                  <FaGithubSquare className="portfolio__project__buttons__icon"/>
               </a>
            </div>
         </div>

      </div>
   </section>
  )
}

export default PORTFOLIO_NEW_ONE

