import React from 'react'
import { Container, Title, Accordion, useMantineTheme } from '@mantine/core';
import classes from './FaqSimple.module.css';
const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const FAQCard = ({id, question, answer}) => {

  return (
    <Accordion.Item className={classes.item} value={`${id}`}>
          <Accordion.Control><p className='question ' style={{color : "lightseagreen", fontSize : "14px" , textTransform : "capitalise"}}>{question}</p></Accordion.Control>
          <Accordion.Panel><p className={classes.answer}>{answer}</p></Accordion.Panel>
    </Accordion.Item>
  )
}

export default FAQCard
