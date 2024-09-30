import React from 'react'
import "./ServicesPage.css"
import IndividualService from './IndividualService.jsx'
import Quotation from './Components/Quotation'
const ServicesPage = () => {
  return (
    <section id="services-page">
      {/*  <p>KEY OFFERINGS</p>
       <h3>Featured Services</h3> */}
       <IndividualService/>
       <Quotation/>
    </section>
  )
}

export default ServicesPage
