import React, { useState } from 'react'
import niceCar from '../../images/nice-car-demo-image-portfolio.jpg'
import imageTECH from '../pic/imageTECH.jpg'

const PortfolioCard = (props) => {
 const [modal, setModal] = useState(false)

 const toggleModal = () => {
    setModal(!modal);
    {modal ? console.log("modal is true") : console.log("modal is false")}
 }

//  const stopInheritingFunctionFromParent = (e) => {
//    e.currentTarget.preventDefault();
//    console.log("I click this and I don't toggle modal");
//  }

  return (
   <>
   {/* <div className="box btn_shadow" > */}
   <section className="portfolio__card" >
      <header className="portfolio__card__header">
         {/* <img src={niceCar} alt="" onClick={toggleModal} />  I use this for testing */}
         <img src={imageTECH} alt="" />
      </header>
      <div className="category d_flex">
         <span onClick={toggleModal} >{props.category}</span>
         <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
         </label>
      </div>
      <div className="title">
         <h2 onClick={toggleModal} >{props.title}</h2>
         <a href="#popup" className="arrow">
            <i className="fas fa-arrow-right"></i>
         </a>
      </div>
   </section>

   { /*POPUP BOX */}
   {modal && (
   <div className="modal">
      <div className="overlay" onClick={toggleModal} ></div>
      <div className="modal-content d_flex">
         <div className="modal-img left">
            <img src={niceCar} alt="" />
         </div>
         <div className="modal-text right">
            <span>Featured - Design</span>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laudantium ipsa quo quia eius!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laudantium ipsa quo quia eius!</p>
            <div className="button f_flex mtop">
               <button className="btn_shadow">
                  GitHub <i className="far fa-thumbs-up"></i>
               </button>
               <button className="btn_shadow">
                  Go Live <i className="fas fa-chevron-right"></i>
               </button>
            </div>
            <button className="close-modal btn_shadow" onClick={toggleModal}>
               <i className="fas fa-times"></i>
            </button>
         </div>
      </div>
   </div>
   )}

   </>
  )
}

export default PortfolioCard