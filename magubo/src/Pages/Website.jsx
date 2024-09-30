import React, { Suspense } from 'react'
import Hero from "../Components/Hero-Section/Hero.jsx"
import Services from "../Components/Services-Section/Services.jsx"
import Portfolio from '../Components/Gallery/Portfolio.jsx'
import About from '../Components/About/About.jsx'
import Mission from '../Components/Mission/Mission.jsx'
import Values from "../Components/Values/Values"
import MissionArticle from "../Components/Mission-Article/MissionArticle.jsx"
import FAQs from "../Components/FAQs/FAQs.jsx"
import { useLocation } from 'react-router-dom'
import ContactUs from "../Components/ContactUs/ContactUs.jsx"
import { FaSpinner } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import Meaning from '../Components/Meaning/Meaning.jsx'

const isLoading = () =>{
  
  return (
       <div className="loading" style={{ width : "98%", minHeight : "600px", display : "grid", placeContent : "center"}}>
         <FaSpinner className="loading-spinner" style={{height : "100px", width : "100px", fill : "lightseagreen"}} />
      </div>
  )
}
const Website = () => {
   const contactUsRef = useRef(null);
   const aboutUsRef = useRef(null);
   const galleryRef = useRef(null);
   const visionRef = useRef(null);
   const faqsRef = useRef(null);
   const location = useLocation();

   useEffect(() => {
    // Check if the URL has a fragment #contact-us
    if (location.hash === '#contact-us') {
      // Scroll to the Contact Us section
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    if (location.hash === '#about-us') {
      // Scroll to the Contact Us section
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    if (location.hash === '#gallery') {
      // Scroll to the Contact Us section
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    if (location.hash === '#vision-mission') {
      // Scroll to the Contact Us section
      visionRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    if (location.hash === '#faqs') {
    // Scroll to the Contact Us section
    faqsRef.current.scrollIntoView({ behavior: 'smooth' });
  } 
  }, [location]);
  

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
     <div className='App'>
      <Hero id="hero"></Hero>
      <Services></Services>
      <div ref={galleryRef}>
        <Portfolio id="#gallery"></Portfolio>
      </div>
      <Mission></Mission>
      <div ref={aboutUsRef}>
        <About id="about-us"></About>
      </div>
      <Values></Values>
      <div ref={visionRef}>
        <MissionArticle id="#vision-mission" ref={visionRef}></MissionArticle>
      </div>
      <div>
        <Meaning></Meaning>
      </div>
      <div ref={faqsRef}>
        <FAQs id="#faqs" ref={faqsRef}></FAQs>
      </div>
      <div ref={contactUsRef}>
        <ContactUs id="contact-us"></ContactUs>
      </div>
      
    </div>
  )
}

export default Website
