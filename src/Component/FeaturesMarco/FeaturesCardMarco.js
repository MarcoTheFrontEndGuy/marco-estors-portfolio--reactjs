import React from 'react'

const FeaturesCard = (props) => {
  return (
    <>
      <section className="feature">
        <header className="feature__header">

          <img className="feature__header__img" src={props.image} alt="" />
          <h4 className="feature__header__h4">{props.title}</h4>
        </header>
        <p>{props.desc}</p>

      </section>
    </>
  )
}



export default FeaturesCard

