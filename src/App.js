import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import './App.css'
import Features from './Component/Features/Features'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
// import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'
import ContactMarco from './Component/Contact/ContactMarco'
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Contact /> */}
      <ContactMarco />
      <Footer />
    </div>
  )
}

export default App