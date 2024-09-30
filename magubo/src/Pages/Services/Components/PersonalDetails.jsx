import React from 'react'
import { validateEmail,  validateString } from '../../../Utils/common.js'
import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';
import { Group } from '@mantine/core';
import { Button } from '@mantine/core';
import useCountries from '../../../Hooks/useCountries.jsx';
const PersonalDetails = ({userInformation, setUserInformation, nextStep}) => {
    const {getAll} = useCountries();
    const form = useForm({
       initialValues : { name : userInformation?.name,
        surname : userInformation?.surname,
        companyName : userInformation?.companyName,
        email : userInformation?.email,
       }, 
       validate : {
        name : (value)=> validateString(value),
        surname: (value)=> validateString(value),
        companyName : (value)=> validateString(value),
        email : (value)=>validateEmail(value)
       }
        
    })

   

    const {name, surname, companyName, email} =form.values;

    const handleSubmit = ()=>{
      const {hasErrors} = form.validate();
      if(!hasErrors){
        setUserInformation((prev)=>({...prev, name, surname, companyName, email}))
        console.log(userInformation)
        nextStep()
      }
    }
  return (
    <form action="" className='personal-details' onSubmit={(e)=>{
      e.preventDefault()
      handleSubmit()
    }}>
      <TextInput
      w={"100%"}
      withAsterisk
      label="Name"
      radius={0}
      {...form.getInputProps("name", { type: "input" })}
      ></TextInput>
      <TextInput
      w={"100%"}
      withAsterisk
      label="Surname"
      radius={0}
      {...form.getInputProps("surname", { type: "input" })}
      ></TextInput>
      <TextInput
      w={"100%"}
      radius={0}
      withAsterisk
      label="Company Name"
      {...form.getInputProps("companyName", { type: "input" })}
      ></TextInput>
      <TextInput
      w={"100%"}
      radius={0}
      withAsterisk
      label="Email Address"
      {...form.getInputProps("email", { type: "input" })}
      ></TextInput>

      <Group position="center" mt={"xl"}>
        <Button type="submit"
        color='orangered'
        radius={0}
        fw={"lighter"}
        >Next Step</Button>
      </Group>


    </form>
  )
}

export default PersonalDetails
