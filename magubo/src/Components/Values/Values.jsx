import ValuesCard from "./ValuesCard"
import { valueSections } from "./values-data.js"
import { Carousel } from '@mantine/carousel';
import "./Values.css"
import classes from "./Demo.module.css"
const Values = () => {
  return (
    <section id="values">
        <p>THE BELIEF SYSTEM BEHIND US</p>
        <h3>Our Values</h3>

        <article className="value-cards-container">
         {/* {valueSections.map((value)=>{
            return (
                <ValuesCard key={value.id}{...value}></ValuesCard>
            )
         })} */}
          <Carousel
      withIndicators
      slideSize="25%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      className="value-carousel"
      classNames={classes}
    >
      {valueSections.map((value)=>{
            return (
               <Carousel.Slide> <ValuesCard key={value.id}{...value}></ValuesCard></Carousel.Slide>
            )
         })}
    </Carousel>
        </article>
    </section>
  )
}
export default Values