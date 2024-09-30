import React, { useEffect, useState } from 'react';
import { businessDevelopmentSolutions } from './services-data.js';
import "./Services.css"
import { Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './Demo.module.css';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard.jsx';


const isLoading = () =>{
  return (
       <div className="loading" style={{ width : "30%", height : "300px", display : "grid", placeContent : "center"}}>
         <FaSpinner className="loading-spinner" style={{height : "40px", width : "40px", fill : "lightseagreen"}} />
      </div>
  )
}

const Services = () => {
  
  const navigate = useNavigate()
  return (
    <>
    <section id='services'>
      <p>AREAS OF EXPERTISE</p>
      <h2>Our Products</h2>

    
      <Carousel
      slideSize="20%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      classNames={classes}
      className='carousel-container'
      
    >
      {businessDevelopmentSolutions.map((solution)=>{
        return (
          <Carousel.Slide key={solution.id}>
            <Suspense fallback={<isLoading></isLoading>}>
           <ServiceCard {...solution}/> 
           </Suspense>
         
            
          </Carousel.Slide>
        )
      })}
    </Carousel>
      
      <button onClick={()=> navigate("/services#services-hr", {replace : true})}>SEE ALL SERVICES →</button>
    </section>

       
    </>
  );
};

export default Services;
