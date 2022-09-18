import React from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}