import React,{useRef} from 'react'
import Navbar from './Navbar'

import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Services from './pages/Services'

const MainComponent = () => {

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const serviceRef = useRef(null);

  // const scrollTo = (section) => {
  //   switch (section) {
  //     case 'about':
  //       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 'experience':
  //       experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 'projects':
  //       projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 'contact':
  //       contactRef.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     default:
  //       break;
  //   }
  // };


  const scrollTo = (section) => {
    let targetRef;
    switch (section) {
      case 'about':
        targetRef = aboutRef;
        break;
      case 'experience':
        targetRef = experienceRef;
        break;
      case 'projects':
        targetRef = projectsRef;
        break;
      case 'service':
        targetRef = serviceRef;
        break;
      case 'contact':
        targetRef = contactRef;
        break;
      default:
        break;
    }
  
    if (targetRef && targetRef.current) {
      const navbarHeight = document.querySelector('nav').offsetHeight; // Adjust selector if needed
      const offsetTop = targetRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY + offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };
  


  return (
    <main className=' p-0 relative overflow-hidden font-serif'>
    <Navbar scrollTo={scrollTo}/>
    <Hero/>
    <About ref={aboutRef}/>
    <Projects ref={projectsRef}/>
    <Experiences ref={experienceRef}/>
    <Services ref={serviceRef} />
    <Contact ref={contactRef} />
    <Footer/>
    </main>
  )
}

export default MainComponent