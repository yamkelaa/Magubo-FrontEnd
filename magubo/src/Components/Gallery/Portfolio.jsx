import "./Portfolio.css"
import { useNavigate } from 'react-router-dom'
const Portfolio = () => {
    const navigate = useNavigate();
  return (
    <section id="portfolio">
        <p>MAGUBO'S GALLERY</p>
        <h3>Our work in action</h3>

        <section className="gallery">
            <section className="video-container">
                <video src="./img/gallery-1.mp4" loop  controls  autoPlay  ></video>
            </section>
            <article className="marketing">
                <h3>OFF-GRID SYSTEMS</h3>
                <p>
                Our off-grid solar systems operate independently of Eskom, offering a reliable and sustainable energy source without relying on the traditional power grid.</p>
                <a href="#" onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
            <section className="image-container">
                <img src="./img/gallery-2.jpg" alt="Makhiwane Marketing Services" />
            </section>
            <section className="image-container">
                <img src="./img/gallery-3.jpg" alt="Makhiwane Logistics Services" />
            </section>
            <section className="video-container">
                <video src="./img/gallery-4.mp4"  autoPlay  loop controls></video>
            </section>
            <article className="marketing">
                <h3>BACKUP SYSTEMS</h3>
                <p>Our backup systems are engineered to seamlessly handle power outages and load shedding, ensuring uninterrupted energy supply and peace of mind during disruptions.</p>
                <a href="#" style={{backgroundColor : "lightseagreen"}} onClick={()=>navigate("/services#services-hr")}>GET STARTED</a>
            </article>
             
        </section>
    </section>
  )
}

export default Portfolio


