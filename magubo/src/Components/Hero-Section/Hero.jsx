import React from 'react'
import "./Hero.css"
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate();
  return (
    <main id='landing-main'>
       <h1>MAGUBO SOLAR SERVICES
       ----LET US LIGHT UP 
     YOUR WORLD</h1>

       <p>At Magubo Solar Services, we're dedicated to harnessing the power of the sun to deliver innovative and sustainable energy solutions. Our commitment to excellence ensures that each solar installation not only reduces your carbon footprint but also provides reliable, cost-effective energy for years to come.</p>

       <section className="user-actions">
        <button onClick={()=> navigate("/services#services-hr")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p>PRODUCTS</p>
        </button>
        <button onClick={()=> navigate("/#contact-us")}>BOOK A CONSULTATION</button>
       </section>

       
        <aside className="background-address-description">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>

            <article onClick={()=>navigate("/services#services-packages")}>
                <p>Places of Operation</p>
                <p>All Around South Africa</p>
            </article>
       </aside>

    </main>
  )
}

export default Hero
