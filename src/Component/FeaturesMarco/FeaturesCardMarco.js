import React from 'react'

const FeaturesCard = (props) => {
  return (
    <>
      <section className="feature">
        <header>

          <img src={props.image} alt="" />
          <h2 className="feature__h2">{props.title}</h2>
        </header>
        <p>{props.desc}</p>

         <a href="">
            <i className="fas fa-arrow-right"></i>
         </a>
      </section>
    </>
  )
}

export default FeaturesCard