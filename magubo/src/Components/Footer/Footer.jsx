import React from 'react'
import "./Footer.css"
import Socials from '../Socials-Bar/Socials'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section id="footer">
        <div className="footer-content-container">
      <article className="sitemap">
        <h3>SITEMAP</h3>
        <ul className="sitemap-links">
            <li><Link to="/services#services-hr">SERVICES</Link></li>
            <li><Link to="/#gallery">GALLERY</Link></li>
            <li><Link to="/#about-us">ABOUT US</Link></li>
            <li><Link to="/#vision-mission">VISION AND MISSION</Link></li>
            <li><Link to="/#contact-us">CONTACT US</Link></li>
        </ul>
      </article>

      <article className="footer-services">
        <h3>SERVICES</h3>
        <ul className="footer-services-links">
           <li><Link to="/services#services-hr">BACKUP SYSTEM</Link></li>
           <li><Link to="/services#services-marketing">SOLAR SYSTEM</Link></li>
           <li><Link to="/services#services-analytics">OFF GRID SYSTEM</Link></li>
           <li><Link to="/services#services-logistics">PHASE SOLAR SYSTEM</Link></li>
           <li><Link to="/services#services-packages">PACKAGES</Link></li>
        </ul>
      </article>  

      <article className="footer-faqs">
        <h3>FAQS</h3>
        <ul className="footer-services-links">
           <li><Link to="/#faqs">CUSTOMIZED SOLAR</Link></li>
           <li><Link to="/#faqs">PROJECT SIZE</Link></li>
           <li><Link to="/#faqs">MAGUBO BENEFITS</Link></li>
           <li><Link to="/#faqs">COST SAVING</Link></li>
           <li><Link to="/#faqs">ENVIRONMENTAL BENEFITS</Link></li>
        </ul>
      </article>  

      <article className="get-started-and-socials">
        <section className="name-and-slogan">
        <h3>POWERED BY MAKHIWANE</h3>
        <p>Diversity leads to innovation culture</p>
        </section>
        <Link  to= "/services#services-hr"><button style={{width : "100%"}}>GET STARTED</button></Link>
        <Socials></Socials>
      </article>
      </div>
      <p>©MAGUBO X MAKHIWANE BUSINESS DEVELOPMENT 2024</p>
    </section>
  )
}

export default Footer
