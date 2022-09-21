import React from 'react'
import About from './components/About'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='app-container'>
      <header className='grid-item'>
        <Navbar />
      </header>
      <main className='grid-item'>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className='grid-item'>
        <Footer />
      </footer>
    </div>
  )
}