import React, { useEffect, useState } from 'react'
import Dots from './Dots.jsx'
import Cart from './Cart.jsx'

const IndividualServiceFront = ({serviceName, id, serviceImage, servicePrice, serviceCategory}) => {
    
  return (
   <section className='individual-service'>
      <section className="service-image" style={{backgroundImage : `url(${serviceImage})`}}>
      </section>
       <h5>{serviceCategory}</h5> 
       <div className="individual-service-details">
        <p>{serviceName}</p>
        <p>R {servicePrice}</p>
       </div>
       <Cart id={id} serviceName={serviceName} servicePrice={servicePrice}></Cart>
       <Dots></Dots>
    </section>
  )
}

export default IndividualServiceFront
