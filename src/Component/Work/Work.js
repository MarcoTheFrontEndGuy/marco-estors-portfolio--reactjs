import React from 'react'
import './Work.css'
import imageTECH from '../pic/imageTECH.jpg'


const Work = () => {
  return (
    <section className="work">
       <div className="work__header">
          <h2>PORTFOLIO. theme: Marco got the job</h2>
       </div>
       <div className="work__portfolio">
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
         <div className="work__holder">
            <img src={imageTECH} alt="" />
            <h2>Hello World</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, sed!</p>
         </div>
      

       </div>
      
    </section>
  )
}

export default Work