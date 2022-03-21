import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import './App.css'
import Features from './Component/Features/Features'
import Portfolio from './Component/Portfolio/Portfolio'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
    </div>
  )
}

export default App