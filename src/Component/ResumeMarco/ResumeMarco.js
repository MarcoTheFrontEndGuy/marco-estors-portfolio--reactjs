import React from 'react'
import Card from './ResumeCardMarco'
import './ResumeMarco.css'
import ResumeApi from './ResumeApiMarco'

const ResumeMarco = () => {
  return (
    <section className="resume" id="resume">
          <header className="resume__header">
             <h2 className="resume__header__h2">My Resume</h2>
             {/* <h3 className="resume__header__h3">7+ YEARS OF EXPERIENCE</h3> */}
          </header>
          <div className="resume__content">
             <section className="resume__content__left">
                {/* <div className="heading">
                   <h4>YEARS</h4>
                   <h5>Education</h5>
                </div> */}
                <div className="content">
                   {ResumeApi.map((val, id) => {
                      if(val.category === "education") {
                         return <Card key={id} title={val.title} year={val.year} 
                         rate={val.rate} desc={val.desc}/>
                      }
                   })}
                </div>
             </section>
             <section className="resume__content__left">
                {/* <div className="heading">
                   <h4>YEARS</h4>
                   <h5>Experience</h5>
                </div> */}
                <div className="content">
                   {ResumeApi.map((val, id) => {
                      if(val.category === "experience") {
                         return <Card key={id} title={val.title} year={val.year} 
                         rate={val.rate} desc={val.desc}/>
                      }
                   })}
                </div>
             </section>
          </div>
    </section>
  )
}

export default ResumeMarco