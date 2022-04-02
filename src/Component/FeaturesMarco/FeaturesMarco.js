import React from 'react'
import FeaturesCard from './FeaturesCardMarco'
import FeaturesCard1 from './FeaturesCard1Marco'
import './FeaturesMarco.css'
import data from './FeaturesApiMarco'




const FeaturesMarco = () => {

  return (
    <>
       <section className="features" id="features">
         
             <header className="features__header">
                <h2>What I Do</h2>
                <h3>Features</h3>
             </header>
             <div className="features__content">
                {data?.map((val, index) => {
                   if(index === 0 || index === 2 || index === 4) {
                      return <FeaturesCard1 key={index} image={val.image} title={val.title} desc={val.desc} />
                  }else{  
                     return <FeaturesCard key={index} image={val.image} title={val.title} desc={val.desc} />
                   }
                })}
             </div>

       </section>
    </>
  )
}

export default FeaturesMarco