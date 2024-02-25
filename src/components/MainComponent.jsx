import React from 'react'
import Navbar from './Navbar'

import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const MainComponent = () => {
  return (
    <main className='  p-0 relative overflow-hidden font-serif'>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Experiences/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default MainComponent