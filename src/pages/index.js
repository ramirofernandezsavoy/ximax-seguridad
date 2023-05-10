import * as React from "react"
import Hero from "../components/Hero/Hero"
import Servicios from "../components/Servicios/Servicios"
import About from "../components/About/About"
import Logos from "../components/Logos/Logos"
import Contact from "../components/Contact/Contact"
import Wplogo from "../components/Wplogo/Wplogo"
import Toplogo from "../components/Toplogo/Toplogo"




const IndexPage = () => {
  return (    
      
        <>
          <Wplogo/>
          <Toplogo/>
          <Hero/>
          <Servicios/>
          <About/>
          <Logos/>          
          <Contact/>
        </>      
      
      
  )
}

export default IndexPage

export const Head = () => <title>Ximax Seguridad</title>