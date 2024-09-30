import React from 'react'
import "./Meaning.css"
import { useNavigate } from 'react-router-dom'
const Meaning = () => {
  const navigate = useNavigate()
  return (

 <section id="meaning">
    <article className="who-we-are">
        <div className="orange-bar"></div>
        <p>BLOG: WHY SOLAR?</p>  

        <section className="mission-article-content">
            <aside className="meaning-article-image"></aside>
            <article className="mission-article-writing-and-button">
                <section className="">
                    <h3>WHY SOLAR?</h3>
                    <p>At Magubo Solar Services, we are passionate about the transformative power of solar energy. Switching to solar offers numerous advantages: it significantly reduces your reliance on traditional energy sources, lowers your utility bills, and provides a sustainable solution for your energy needs. Solar power is a clean, renewable resource that decreases your carbon footprint and helps combat climate change. By investing in solar energy, you're not only saving money but also contributing to a greener planet. Our mission is to make the transition to solar as seamless and beneficial as possible, ensuring that you enjoy both economic and environmental benefits.</p>
                </section>

                <button onClick={() => navigate("/services#services-hr")}>GET STARTED</button>
            </article>
        </section>
    </article>  
</section>


  )
}

export default Meaning;
