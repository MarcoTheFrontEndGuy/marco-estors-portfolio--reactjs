import React from 'react'

const ResumeCardMarco = (props) => {
  return (
    <>
    {/* <div className="box box_shadow"> */}
    <section className="resumeCard">
      <header className="resumeCard__header">
        <div className="resumeCard__header__title">
          <h4 className="resumeCard__header__title__h4">{props.title}</h4>
          <span>{props.year}</span>
        </div>
        {/* <div className="resumeCard__header__rate"> */}
          {/* <button className="resumeCard__header__rate__button">{props.rate}</button> */}
        {/* </div> */}
      </header>
      <hr />
      <p className="resumeCard__description">{props.desc}</p>
    </section>
    </>
  )
}

export default ResumeCardMarco