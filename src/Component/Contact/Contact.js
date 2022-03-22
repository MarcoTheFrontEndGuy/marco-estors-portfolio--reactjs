import React, { useState } from 'react'
import './Contact.css'
import contact1 from './contact1.png'

const Contact = () => {
  const [data, setData] = useState({ 
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
   })
  const InputEvent = (event) => {
    const {name,value} = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]:value,
      }
    })
  }

const formSubmit = (event) => {
  event.preventDefault();
  alert(`
  My Name is ${data.fullname}.
  My Phone Number is ${data.phone}.
  My Email Address is ${data.email}.
  My Subject on ${data.subject}.
  Here is my message, I want to say : ${data.message}
  `)
}


  return (
    <section className="Contact" id="contact">
      <div className="container top">
        <div className="heading text-center">
          <h4>CONTACT</h4>
          <h1>Contact with me</h1>
        </div>

        <div className="content d_flex">
          <div className="left">
            <div className="box box_shadow">
              <div className="img">
                <img src={contact1} alt="" />
              </div>

              <div className="details">
                <h1>Nevine Acotanze</h1>
                <p>I am available form freelance work. Connect with me</p>
                <p>Phone: 01234567890</p> <br />
                <p>Email: admin@exapmle.com</p><br />
                <p>FIND ME</p>
                <div className="button f_flex">
                  <button className="btn-shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn-shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn-shadow">
                    <i className="fab fa-twitter"></i>
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="right box_shadow">
            <form onSubmit={formSubmit} >
              <div className="f_flex">
                <div className="input row">
                  <span>YOUR NAME</span>
                  <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} />
                </div>
                <div className="input row">
                  <span>YOUR NUMBER</span>
                  <input type="phone" name="phone" value={data.phone} onChange={InputEvent} />
                </div>
                <div className="input">
                  <span>EMAIL</span>
                  <input type="email" name="email" value={data.email} onChange={InputEvent} />
                </div>
                <div className="input">
                  <span>SUBJECT</span>
                  <input type="text" name="subject" value={data.subject} onChange={InputEvent} />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE</span>
                  <textarea name="message" id="" cols="30" rows="10" onChange={InputEvent}></textarea>
                </div>
                <button className="btn-shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-down"></i>
                </button>
              </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact