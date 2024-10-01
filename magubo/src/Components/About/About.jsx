import "./About.css"
const About = () => {
  return (
    <section id="about">
        <article className="who-we-are">
          <div className="orange-bar"></div>
          <p>ALL ABOUT US</p>  
          </article>
          <section className="about-us-main">
            <section className="founders-image">
              <img src="./img/founder.jpg" alt="Makhiwane Business Development Founder" />  
            </section>
            <article className="about-us-article">
                <h3>THE COLLABORATION BETWEEN MAGUBO AND <a href="https://makhiwane-business-development.com/" target="blank">MAKHIWANE</a></h3>
                <p>Magubo Solar Services specializes in the repair and installation of advanced backup and off-grid solar solutions. Our expert team is dedicated to delivering reliable and efficient energy systems tailored to your needs, ensuring uninterrupted power supply and optimal performance in any setting. With a commitment to quality and innovation, we provide sustainable energy solutions that keep you connected and empowered, whether you're managing power outages, load shedding, or remote off-grid locations. </p>
                <p>Founded to address the growing challenges of power problems and load shedding, Magubo Solar Services was established with a mission to provide effective solar solutions for uninterrupted energy supply. Our inception was driven by the need for reliable alternatives to traditional power sources, offering innovative backup and off-grid solar systems that ensure consistent performance even during power outages. By leveraging cutting-edge technology and a commitment to excellence, we aim to alleviate the impact of power disruptions and enhance energy independence for our clients.</p>
            </article>
          </section>    
    </section>
  )
}

export default About
