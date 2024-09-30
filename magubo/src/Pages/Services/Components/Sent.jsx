import "./ModalQuotation.css"
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Socials from "../../../Components/Socials-Bar/Socials";

const Sent = ({name, surname, companyName, email, country, city, address, postalCode, setUserInformation, userInformation, updateCounter, setUpdateCounter}) => {
  const currentDate = new Date().toDateString();
  const invoiceNumber = Math.floor(100 + Math.random() * 900);
  const {cartItems, total} = useSelector((store)=>store.cart)
  const dispatch = useDispatch();

  useEffect(()=>{
    submitData()
    console.log("Hello")
  },[updateCounter])
  const  submitData = async()=>{
  try {
      const emailResponse =  await axios.post('https://makhiwane-server-backend.onrender.com/send-email', {
        recipient_email: userInformation.email,
        userInformation : userInformation,
        cartItems : cartItems,
        total : total,
        date: currentDate, 
        invoiceNumber: invoiceNumber,
      });
      console.log('Email request sent successfully', emailResponse);
      console.log(country, city, postalCode, address)
      console.log(userInformation);
      setUserInformation (
        {name : "",
        surname : "",
        companyName : "",
        email : "",
        country : "",
        city : "",
        postalCode : "",
        address : ""}
      )
    } catch (error) {
      console.error('Error sending email', error);
      console.log(userInformation.email);
    }
  }
  return (
    <div className="sent-form-modal">
    <div className="tick">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
        <h3>THANK YOU {name}!</h3>
        <p>Your invoice has been sent and our team we will be contacting you shortly to discuss the offerings you have selected. If you would like to speak to someone immediately, feel free to call</p>
        <div className="tick">
          <a className='modal-phone' href="tel:+27834842554">083-484-2554</a>
        </div>
        <p>FOLLOW US</p>
       <Socials></Socials>
    </div>
  )
}
export default Sent