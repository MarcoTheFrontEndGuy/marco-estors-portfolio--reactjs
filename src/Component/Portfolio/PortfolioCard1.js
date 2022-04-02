import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import './PortfolioCSS.css'
import { useState, useEffect } from 'react'




const PortfolioCard1 = (props) => {
   const [portfolioCard1Styling, setPortfolioCard1Styling] = useState(true);

   useEffect( () => {
      function removePortfolioCard1DefaultStyling(){
         setPortfolioCard1Styling(false);
      }

      function addPortfolioCard1DefaultStyling(){
         setPortfolioCard1Styling(true);
      }

      const portfolioProjectAll = document.querySelectorAll(".portfolio__project");
      portfolioProjectAll.forEach((eachproject) => {
         eachproject.addEventListener("mouseover", removePortfolioCard1DefaultStyling);
         eachproject.addEventListener("mouseout", addPortfolioCard1DefaultStyling);
      })

   },[]);


  return (
   // <section className="portfolio__project portfolioCard1Styling">
   <section className={ portfolioCard1Styling ? "portfolio__project portfolioCard1Styling" : "portfolio__project" }>
   <div className="portfolio__project__header">
      <div className="portfolio__project__header__image">
         <img src={props.image} alt="" />
      </div>
      <h4 className="portfolio__project__header__h4">{props.title}</h4>
   </div>
   <div className="portfolio__project__buttons">
      <a href="#goLive">
         <FaRocket className="portfolio__project__buttons__icon"/>
      </a>
      <a href="#github1">
         <FaGithubSquare className="portfolio__project__buttons__icon"/>
      </a>
   </div>
</section>
  )
}

export default PortfolioCard1