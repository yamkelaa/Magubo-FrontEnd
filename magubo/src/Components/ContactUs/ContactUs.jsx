import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { address } from "./address.js"
import {AiFillPhone} from "react-icons/ai/index.js"
import {HiLocationMarker} from "react-icons/hi/index.js"
import { useState } from "react"
import React from "react"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import FormModal from "./FormModal"
import "./Contact-Us.css"

import Map from "./Map"
import Socials from "../Socials-Bar/Socials.jsx"
 const ContactUs = () => {
const form = useRef(); 
const [opened, { open, close }] = useDisclosure(false);
const [isOpenModal, setIsOpenModal] = useState(false)
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [nameError, setNameError] = useState(false);
const [nameMessage, setNameMessage] = useState("")
const [emailError, setEmailError] = useState(false);
const [emailMessage, setEmailMessage] = useState("")
const [messageError, setMessageError] = useState(false);
const [messageMessage, setMessageMessage] = useState("")
const [username, setUsername] = useState("")
  const validateEmail = (input) => {
    // Regular expression for basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
  };
const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(name, email, message)
  setEmailError(false);
  setMessageError(false);
  setNameError(false);
  if(!name || !email || !message){
  if (!name){
    setNameError(true);
    setNameMessage("Name cannot be empty")
  }
  if(!email){
    setEmailError(true);
    setEmailMessage("Email cannot be empty")
  }
  if(!message){
    setMessageError(true);
    setMessageMessage("Message cannot be empty")
  }
}

else if(message.length < 5){
  setMessageError(true);
  setMessageMessage("Message must be over 5 characters")
}
else if (! validateEmail(email)){
     setEmailError(true)
     setEmailMessage("Invalid Email")
}
else{
  emailjs.sendForm('service_rpzhhrn', 'template_7z52at9', form.current, 'z7NIr18F1ewNJ0RSe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  setUsername(name) 
  setEmail("")
  setName("")
  setMessage("")
  setIsOpenModal(true);
}






}
  return (
    <section id="contact-us">
       <section className="get-in-touch">
        <section className="get-in-touch-heading">
            <h3>GET IN TOUCH WITH MAGUBO</h3>
            <div className="orange-divider"></div>
        </section>

        <section className="get-in-touch-content">
            <section className="links-and-map">
               <section className="links">
                <article className="address">
  <HiLocationMarker/>
  <address>17 Ferero Street Glenanda South <br />Johannesburg 2091</address>
</article>
<article className="phone">
 <AiFillPhone/>
  <a href="tel:+">+27 834 842 554</a>
</article>
<article className="email">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>

  <a href="mailto:xola.qhogwana@bosch.com">makhiwanebusinessdevelopment@gmail.com</a>
</article>

               </section>  
<Socials></Socials>

    <section className="map" >
      <Map address={address.address} city={address.city} country={address.country}  >
            </Map>

        </section>
            </section>
          <form action="

          "
          onSubmit={handleSubmit} ref={form}>
            <p>Leave us a message</p>
            <input type="text" placeholder="Name" name="from_name" value={name} onChange={((e)=>setName(e.target.value))} className={` ${nameError && "red"}`} />
            {nameError && <p className="nameEmpty">{nameMessage}</p>}
            <input type="text" name="from_email" id="" placeholder="Email" value={email} onChange={((e)=>setEmail(e.target.value))} className={`${emailError && "red"}`}/>
            {emailError && <p className="emailEmpty">{emailMessage}</p>}
            <textarea name="message" id="" cols="30" rows="10" placeholder="Leave your message here" value={message} onChange={((e)=>setMessage(e.target.value))} className={` ${messageError && "red"}`}></textarea>
            {messageError && <p className="messageEmpty">{messageMessage}</p>}
            <button type="submit" >Send</button>
            </form>  
           
        </section>
       </section>

       {isOpenModal && <FormModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} username={username}/>}
    </section>
  )
}
export default ContactUs