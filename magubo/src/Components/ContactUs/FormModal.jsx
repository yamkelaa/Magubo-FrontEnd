import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Socials from '../Socials-Bar/Socials';

const FormModal = ({isOpenModal, setIsOpenModal, username}) => {
  return (
    <>
       <Modal opened={isOpenModal} Modal size="90%" onClose={()=>setIsOpenModal(false)}  centered className='form-modal'>
        <div className="tick">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
        <h3>THANK YOU {username}!</h3>
        <p>Your message has been received, and out team we will be contacting you shortly to follow up. If you would like to speak to someone immediately, feel free to call</p>
        <div className="tick">
          <a className='modal-phone' href="tel:+27834842554">083-484-2554</a>
        </div>
        <p>FOLLOW US</p>
        <Socials/>
      </Modal>

    </>
  )
}

export default FormModal
