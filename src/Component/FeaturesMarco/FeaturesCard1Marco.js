import React from 'react'
import { useState, useEffect } from 'react'

const FeaturesCard1 = (props) => {
  const [element1Blue, setElement1Blue] = useState(true);

  useEffect(()=>{
    function removeDefaultStyle() {
      setElement1Blue(false);
    }
    function setDefaultStyle() {
      setElement1Blue(true);
    }

    const allFeatureCards = document.querySelectorAll(".feature");
    allFeatureCards.forEach((eachone) => {
      // eachone.addEventListener("mouseover", hoverToRemoveBlueFromCards1);
      eachone.addEventListener("mouseover", removeDefaultStyle);
      eachone.addEventListener("mouseout", setDefaultStyle);
    })
  },[])


  return (
    <>
      <section className={element1Blue ? "feature firstSectionElement" : "feature"} >
        <header className="feature__header">

          <img className="feature__header__img" src={props.image} alt="" />
          <h4 className="feature__header__h4">{props.title}</h4>
        </header>
        <p>{props.desc}</p>

      </section>
    </>
  )
}



export default FeaturesCard1

