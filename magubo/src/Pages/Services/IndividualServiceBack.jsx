import React from 'react'
import Dots from './Dots.jsx'
import Cart from './Cart.jsx'
const IndividualServiceBack = ({serviceDescription, serviceName, servicePrice, id}) => {
  return (
    <section className='individual-service back'>
        <h6>SERVICE DETAILS</h6>
        <p className='service-description'>{serviceDescription}</p>
        <Cart id={id} serviceName={serviceName} servicePrice={servicePrice} ></Cart>
        <Dots></Dots>
    </section>
  )
}

export default IndividualServiceBack
