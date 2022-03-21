import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import './App.css'
import Features from './Component/Features/Features'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
    </div>
  )
}

export default App