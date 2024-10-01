import React from 'react'
import { quotesArray } from './mission-data.js'
import './Mission.css'
const Mission = () => {
  return (
    <section id="mission">
        <p>IN COLLABORATION WITH <a target= "blank" href="https://makhiwane-business-development.com/">MAKHIWANE BUSINESS DEVELOPMENT</a></p>
        <h3>Makhiwanes Business Values</h3>

        <section className="mission-statement-container">
            {quotesArray.map((quote)=>{
                return <article key={quote.id} className='quote'>
                    <div className="top-section">
                        <p>0{quote.id}</p>
                        <div className="horizontal-bar"></div>
                        <h3>{quote.author}</h3>
                     </div>
                    <section className="bottom-section">
                        <p>"{quote.quote}"</p>
                     </section>
                    
                     
                </article>
            })}
        </section>
    </section>
  )
}

export default Mission
