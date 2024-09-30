import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Container, Stepper } from '@mantine/core';
import "./Quote.css"
import Sent from './Sent';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
const ModalQuotation = ({isOpenModal, setIsOpenModal}) => {
    const[active, setActive] = useState(0)
    const [updateCounter, setUpdateCounter] = useState(0);
    const [userInformation, setUserInformation] = useState({
      name : "",
      surname : "",
      companyName : "",
      email : "",
      country : "",
      city : "",
      postalCode : "",
      address : ""
    })

     const nextStep = () => {
    setActive((current) => (current < 2 ? current + 1 : current));
  };

   const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
   <Modal opened={isOpenModal} Modal  onClose={()=>setIsOpenModal(false)}  centered className='quote-form-modal'>
        <Container  w={"100%"} >
            <Stepper
            active={active}
            onStepClick={setActive}
            breakpoint = "sm"
            w={"100%"}
            allowNextStepsSelect ={false}>
              <Stepper.Step label="Personal Details" description="Invoice Information">
                      <PersonalDetails userInformation={userInformation} setUserInformation={setUserInformation} nextStep={nextStep}/>
              </Stepper.Step>
              <Stepper.Step label="Invoice Address" description="Invoice Information">
                      <AddressDetails userInformation={userInformation} setUserInformation={setUserInformation} nextStep={nextStep} prevStep={prevStep} updateCounter={updateCounter} setUpdateCounter={setUpdateCounter}/>
              </Stepper.Step>
              <Stepper.Completed>
                <Sent userInformation={userInformation} {...userInformation} setUserInformation={setUserInformation} updateCounter={updateCounter} setUpdateCounter={setUpdateCounter}></Sent>
              </Stepper.Completed>
            </Stepper>
        </Container>
    </Modal>

  )
}

export default ModalQuotation
