import React, { useEffect, useState } from 'react'
import {addItem, removeItem} from "../../Features/Cart/cartSlice.js"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Cart = ({id, serviceName, servicePrice}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const {cartItems} = useSelector((store)=>store.cart);

  
  useEffect(() => {
    const itemSearch = cartItems.find((item) => item.id === id);
    setActive(itemSearch !== undefined);
  }, [cartItems, id]);
  return (
    <button onClick={()=>{
      console.log(id , serviceName, servicePrice)
      const itemSearch = cartItems.find((item)=> item.id === id)

      if(!itemSearch){
          dispatch(addItem({id, serviceName, servicePrice}))
      }
      if(itemSearch){
        dispatch(removeItem({id, servicePrice}))
      }
      
    }} className={active ? 'active-button' : 'inactive-button'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'lightseagreen' : 'gray'}  class="w-6 h-6">
          <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
    </svg>
    </button>
  )
}

export default Cart
