import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}