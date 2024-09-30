import React, { useEffect, useState } from 'react'
import { validateEmail,  validateString, validatePostalCode} from '../../../Utils/common.js'
import { useForm } from '@mantine/form';
import { Select, TextInput } from '@mantine/core';
import { Group } from '@mantine/core';
import { Button } from '@mantine/core';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {clearCart} from "../../../Features/Cart/cartSlice.js"
import useCountries from '../../../Hooks/useCountries.jsx';
import { useDispatch } from 'react-redux';
const AddressDetails = ({userInformation, setUserInformation, nextStep, prevStep, updateCounter, setUpdateCounter}) => {
    const {getAll} = useCountries();
    const currentDate = new Date().toDateString();
    const dispatch = useDispatch();
    const form = useForm({
       initialValues : {
        country : userInformation?.country,
        city: userInformation?.city,
        postalCode : userInformation?.postalCode,
        address : userInformation?.address,
       }, 
       validate : {
        country : (value)=> validateString(value),
        city : (value)=> validateString(value),
        postalCode : (value)=> validatePostalCode(value),
        address: (value)=>validateString(value)
       }

        
    })

    const {country, city, postalCode, address} = form.values;
      
    const handleSubmit = async  () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
     setUserInformation((prev) => ({ ...prev, country, city, postalCode, address })) ;
     nextStep();
     setUpdateCounter((prev)=>prev +1)
};


    
  }
  return (
    <form action="" className='personal-details' onSubmit={(e)=>{
      e.preventDefault()
      handleSubmit()
    }}>
      <Select
       w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
      >
        
      </Select>
      <TextInput
      w={"100%"}
      withAsterisk
      label="Street"
      radius={0}
      {...form.getInputProps("address", { type: "input" })}
      ></TextInput>
      <TextInput
      w={"100%"}
      radius={0}
      withAsterisk
      label="City"
      {...form.getInputProps("city", { type: "input" })}
      ></TextInput>
      <TextInput
      w={"100%"}
      radius={0}
      withAsterisk
      label="Postal Code"
      {...form.getInputProps("postalCode", { type: "input" })}
      ></TextInput>

      <Group position="center" mt={"xl"}>
        <Button 
        color='black'
        radius={0}
        fw={"lighter"}
        onClick={prevStep}
        >Previous Step</Button>
        <Button type="submit"
        color='orangered'
        radius={0}
        fw={"lighter"}
        >Finish</Button>
      </Group>


    </form>
  )
}

export default AddressDetails
