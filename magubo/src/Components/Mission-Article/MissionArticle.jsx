import React from 'react'
import "./Mission-Article.css"
import { useNavigate } from 'react-router-dom'
const MissionArticle = () => {
  const navigate = useNavigate()
  return (

    <section id="mission-article">
    <article className="who-we-are">
        <div className="orange-bar"></div>
        <p>VISION AND MISSION STATEMENT</p>  

        <section className="mission-article-content">
            <aside className="mission-article-image"></aside>
            <article className="mission-article-writing-and-button">
                <section className="">
                    <h3>OUR MISSION</h3>
                    <p>At Magubo Solar Services, our mission is to revolutionize energy solutions by delivering innovative and sustainable solar power systems. We are committed to enhancing energy independence and reducing environmental impact through cutting-edge technology and exceptional service, tailored to meet the diverse needs of our clients.</p>
                </section>
                <section className="">
                    <h3>OUR VISION</h3>
                    <p>Our vision is to lead the solar energy industry with excellence in innovation, sustainability, and customer satisfaction. We aim to drive the global transition to renewable energy by empowering communities with advanced solar solutions, fostering a greener and more sustainable world.</p>
                </section>

                <button onClick={() => navigate("/services#services-hr")}>GET STARTED</button>
            </article>
        </section>
    </article>  
</section>

  )
}

export default MissionArticle
