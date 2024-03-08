import React,{useEffect, useState} from 'react'
import {API_URL} from './constant/URL'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {callGetAPI} from './constant/api'

const Update = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [checked, setChecked] = useState(false)
  const id = localStorage.getItem("userId")

  const callGetAPI = async()=>{
    const res = await axios.get(API_URL);
    console.log(res.data)
    setFirstName(res.data.firstName)
}
  useEffect(()=>{
    callGetAPI
  },[])
  const updateData = async(id)=>{
    await axios.post(API_URL+id ,{
       firstName,
       lastName,
       checked
     })
     navigate('/read')
   }
  return (
    <div>
    <FormControl sx={{marginTop:"15px"}}>
   <InputLabel htmlFor="component-outlined">First Name</InputLabel>
   <OutlinedInput
     id="component-outlined"
     label="Name"
     value={firstName}
     onChange={(event)=>setFirstName(event.target.value)}
    
   />
 </FormControl>
 <br/>
 <FormControl sx={{marginTop:"15px"}}>
   <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
   <OutlinedInput
     id="component-outlined"
     label="Name"
     value={lastName}
     onChange={(event)=>setLastName(event.target.value)}
   />
 </FormControl>
 <br />
<div style={{marginTop:"15px"}}>
<Checkbox checked={checked}
 onChange={()=>setChecked(!checked)}

size="small" />
 <span>Agree terms and Conditions</span>
</div>
 <br />

 <Button variant="contained" onClick={updateData(id)}>Submit</Button>

</div>
  )
}

export default Update
