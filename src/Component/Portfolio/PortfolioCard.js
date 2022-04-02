import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import './PortfolioCSS.css'


const PortfolioCard = (props) => {
  return (
   <section className="portfolio__project">
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

export default PortfolioCard