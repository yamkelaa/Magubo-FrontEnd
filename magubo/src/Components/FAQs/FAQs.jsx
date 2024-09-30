import React from 'react'
import { Container, Title, Accordion, useMantineTheme } from '@mantine/core';
import classes from './FaqSimple.module.css';
import { faqs } from './questions.js';
import FAQCard from './FAQCard.jsx';
import './FAQ.css';


const FAQs = () => {
    const theme = useMantineTheme();
  return (
    <section id="faqs">
      <article className="who-we-are">
          <div className="orange-bar"></div>
          <p>FREQUENTLY ASKED QUESTIONS</p>  
        </article> 

        
         <Container size="x-lg" className={classes.wrapper}>
         

      <Accordion variant="separated" className={classes.container}>
       {faqs.map((faq)=>{
        return <FAQCard key={faq.id} {...faq}/>
       })}
      </Accordion>
    </Container>
         
    </section>
  )
}

export default FAQs
