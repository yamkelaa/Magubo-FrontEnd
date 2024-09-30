import React, { useEffect, useState } from 'react'
import "./Quote.css"
import Product from './Product.jsx';
import { template } from 'lodash';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearCart } from '../../../Features/Cart/cartSlice';
import ModalQuotation from './ModalQuotatation.jsx';

const Quotation = () => {
    const dispatch = useDispatch();
    const {cartItems, total} = useSelector((store)=>store.cart)
    const [isEmpty, setIsEmpty] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false);


    useEffect(()=>{
       if(cartItems.length > 0) {
        setIsEmpty(false)
       }
       else {
        setIsEmpty(true)
       }
    }, [cartItems])
    
  return (
    <section id="quotation">
      <section className="heading">
        <p>YOUR CART</p>
        <div className="gold-bar"></div>
      </section>

      <section className="product-list">
        {!isEmpty&& <h5>SERVICES</h5>}
        <article className="products-container">
          { !isEmpty &&cartItems.map((service)=>{
            return (
                <Product key={service.id} id={service.id} serviceName={service.serviceName} servicePrice={service.servicePrice} ></Product>
            )
          })}
          {isEmpty &&  ( <h5 style={{color : "red"}}>EMPTY CART</h5>
          )}
        </article>
      </section>

       <section className="total">
            <h5>TOTAL : </h5>
            <h5> R {total}</h5>
     </section>

     {!isEmpty && <button onClick={()=>setIsOpenModal(true)}>REQUEST INSTANT QUOTATION</button>}
     {!isEmpty && <button style={{backgroundColor : "red"}} onClick={()=>dispatch(clearCart())}>EMPTY MY CART</button>}
     {isOpenModal && <ModalQuotation isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
    </section>
  )
}

export default Quotation
