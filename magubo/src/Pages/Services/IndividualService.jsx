import React from 'react'
import { Suspense } from 'react';
import { Carousel } from '@mantine/carousel';
import { FaSpinner } from 'react-icons/fa';
import { useRef } from 'react';
import { useEffect } from 'react';
import classes from './Demo.module.css';
import { backupSystemServices } from './individual-services.js';
import { solarSystemServices } from './individual-services.js';
import { offGridSystemServices } from './individual-services.js';
import { businessPackages } from './individual-services.js';
import LoadingIndicator from '../../LoadingIndicator';
const IndividualServiceFront = React.lazy(()=>import('./IndividualServiceFront'));
const IndividualServiceBack = React.lazy(()=>import('./IndividualServiceBack'));
import { phaseSolarSystemServices } from './individual-services.js';
import { useLocation } from 'react-router-dom';


const IndividualService = () => {
  const backupSystemRef = useRef(null);
  const solarSystemRef = useRef(null);
  const offGridSystemRef = useRef(null);
  const phaseSolarSystemRef = useRef(null);
  const packagesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#services-backup') {
      backupSystemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-solar') {
      solarSystemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-offgrid') {
      offGridSystemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-phase-solar') {
      phaseSolarSystemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#services-packages') {
      packagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
    
  return (
   
    <section className='categories-container'>
    <section className="backup" id="services-backup" ref={backupSystemRef}>
      
      <h3>BACKUP SYSTEM</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {backupSystemServices.map((service)=>{
        return(
           <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}>
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="solar" id="services-solar" ref={solarSystemRef}>
      
      <h3>SOLAR SYSTEM</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {solarSystemServices.map((service)=>{
        
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="off-grid" id="services-offgrid" ref={offGridSystemRef}>
      
      <h3>OFF GRID SYSTEM</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {offGridSystemServices.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="phase-solar" id="services-phase-solar" ref={phaseSolarSystemRef}>
      
      <h3>PHASE SOLAR SYSTEM</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {phaseSolarSystemServices.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    <section className="packages" id="services-packages" ref={packagesRef}>
      
      <h3>PACKAGES</h3>
      <div className="goldenrod-bar"></div>
      <article>
      {businessPackages.map((service)=>{
        return(
          <Suspense fallback ={<LoadingIndicator></LoadingIndicator>}>
             <Carousel classNames={classes} slideSize= "100%" withControls={false} className='carousel' key={service.id}
    >
      <Carousel.Slide>
        <IndividualServiceFront
          key={service.key} // Don't forget to add a unique key
          {...service}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <IndividualServiceBack
          key={service.key} 
          {...service
          }
          ></IndividualServiceBack>
      </Carousel.Slide>
    </Carousel>
    </Suspense>
        )
      })}
      </article>
     
    </section>
    </section>
   
  
  )
}

export default IndividualService

