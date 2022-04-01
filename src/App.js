import React from 'react'
import HeaderMarco from './Component/HeadMarco/HeaderMarco'
import Home from './Component/Hero/Home'
import './App.css'
import './App_Typography.css'
import ResumeMarco from './Component/ResumeMarco/ResumeMarco'
import Footer from './Component/Footer'
import ContactMarco from './Component/Contact/ContactMarco'
import FeaturesMarco from './Component/FeaturesMarco/FeaturesMarco'
import PORTFOLIO_NEW_ONE from './Component/PortfolioNewOne/PORTFOLIO_NEW_ONE'


const App = () => {
  return (
    <>
      <HeaderMarco />
      <Home />
      <FeaturesMarco />
      <PORTFOLIO_NEW_ONE />
      <hr />
      <ResumeMarco />
      <ContactMarco />
      <Footer />
    </>
  )
}

export default App