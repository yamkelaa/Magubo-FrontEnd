import React from 'react'
import { quotesArray } from './mission-data.js'
import './Mission.css'
const Mission = () => {
  return (
    <section id="mission">
        <p>THE VALUES THAT DEFINE US</p>
        <h3>Magubos's Mission Statement</h3>

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
