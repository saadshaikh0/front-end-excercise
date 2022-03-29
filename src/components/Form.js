import React ,{useState}from 'react';
import TextField from '@mui/material/TextField';


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    textField: {
        flexGrow:1,margin:"10px"

    },
    email:{
        margin:"10px"
    }
  });
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
const Form=(props)=>{
    const {data,setData}=props;
    const classes=useStyles();
    const [userData,setUserData]=useState({id:data.length+1});
    const [errText,setErrText]=useState("")
    const [emailErrText,setEmailErrText]=useState("");
    const handleOnChange=(key,value)=>{

        setUserData({...userData,[key]:value})
    }
    const handleSubmit=()=>{

        if(userData.first_name && userData.last_name && userData.email && userData.gender &&validEmail.test(userData.email)){
            setData([...data,userData]);
            setUserData({id:data.length+2})
            setErrText("")
        }
        else{
            setErrText("Please fill all the fields in proper format")
        }

       
    }
    const validateEmail=(email)=>{
        
         if (!validEmail.test(email)) {
            setEmailErrText("Email should be in Proper format");
         }else{
             setEmailErrText("")
         }

    }
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <TextField value={userData.first_name??""} onChange={e=>handleOnChange("first_name",e.target.value)} className={classes.textField} placeholder="First Name"/>
                <TextField value={userData.last_name??""} onChange={e=>handleOnChange("last_name",e.target.value)}className={classes.textField} placeholder="Last Name"/>
            </div>
            <TextField value={userData.email??""} onChange={e=>{
                
                validateEmail(e.target.value)
                handleOnChange("email",e.target.value)}}className={classes.email} fullWidth={true}  placeholder='Email'/>
                 <p style={{color:"red"}}>{emailErrText}</p>
            <div>
                <input checked={userData.gender==="Male"?true:false} type={"radio"}  onChange={e=>handleOnChange("gender",e.target.value)} name="Gender" value="Male"/>Male
                <input checked={userData.gender==="Female"?true:false} type={"radio"} onChange={e=>handleOnChange("gender",e.target.value)}name="Gender"  value="Female"/> Female
                <button onClick={handleSubmit}>ADD</button>
            </div>
            <p style={{color:"red"}}>{errText}</p>
        </div>
    )
}

export default Form