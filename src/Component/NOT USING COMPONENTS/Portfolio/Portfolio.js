import React from 'react'
// import './Portfolio.css'
import './Portfolio_Marco.css'

import Card from './Card'
import Portfolio_data from './Portfolio_data'
import PortfolioCard from './Card'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
          <header className="portfolio__header">
             <h2 className="portfolio__header__h2">My Portfolio</h2>
             <h3>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
          </header>
          <div className="portfolio__content">
             {Portfolio_data.map((val, index) => {
               return <PortfolioCard key={index} image={val.image} category={val.category} totalLike={val.totalLike}
               title={val.title}
               />
             })}
            
       </div>
    </section>
  )
}

export default Portfolio