import React from 'react'
import data from './PortfolioApi'
import './PortfolioCSS.css'
import PortfolioCard from './PortfolioCard'
import PortfolioCard1 from './PortfolioCard1'

// const PortfolioComponent = () => {
//   return (
//      <>
//       {data?.map((eachelement, index) => {
//          if(index === 0) {
//             console.log('this is the one that people built from scratch');
//             return <PortfolioCard title={eachelement.title} image={eachelement.image} />
//          } else {
//             return <PortfolioCard1 title={eachelement.title} image={eachelement.image} />
//          }
//       })}
//      </>
//   )
// }


const PortfolioComponent = () => {
  return (
   <section className="portfolio">
      <header className="portfolio__header">
         <h2 className="portfolio__header__h2">Portfolio</h2>
         <h3 className="portfolio__header__h3">My latest and more relevant work only</h3>
      </header>
      <div className="portfolio__projects">

      {/* {data?.map((eachelement, index) => {
         if(index === 0) {
            console.log('this is the one that people built from scratch');
            return <PortfolioCard1 title={eachelement.title} image={eachelement.image} />
         } else {
            return <PortfolioCard title={eachelement.title} image={eachelement.image} />
         }
      })} */}

      {data?.map((eachelement, index) => {
         if(index === 0 || index === 2 || index === 4) {
            console.log('this is the one that people built from scratch');
            return <PortfolioCard1 title={eachelement.title} image={eachelement.image} />
         } else {
            return <PortfolioCard title={eachelement.title} image={eachelement.image} />
         }
      })}


      </div>
   </section>


  )
}

export default PortfolioComponent