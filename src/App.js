import React from 'react'
import HeaderMarco from './Component/HeadMarco/HeaderMarco'
import Home from './Component/Hero/Home'
import './App.css'
import './App_Typography.css'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Footer from './Component/Footer'
import ContactMarco from './Component/Contact/ContactMarco'
import FeaturesMarco from './Component/FeaturesMarco/FeaturesMarco'
import PORTFOLIO_NEW_ONE from './Component/PortfolioNewOne/PORTFOLIO_NEW_ONE'
// import Responsive_Fonts from './Component/RESPONSIVE_FONTS/Responsive_Fonts'
// import Work from './Component/Work/Work'
const App = () => {
  return (
    <>
      {/* <Responsive_Fonts /> */}

      <HeaderMarco />
      <Home />
      <FeaturesMarco />
      <PORTFOLIO_NEW_ONE />
      {/* <Portfolio /> */}
      {/* <Work /> */}
      <Resume />
      <ContactMarco />
      <Footer />
    </>
  )
}

export default App