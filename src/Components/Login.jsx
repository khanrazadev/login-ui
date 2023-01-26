import React from 'react';
import { Grid, Container,Typography, Button, TextField } from "@mui/material";
import logo from "../utils/logo.png";
import email from "../utils/email.png";



import google from "../utils/google.png";
import { useState } from 'react';
import VerifyMobile from './VerifyMobile';


const Login = () => {

    const [inputPhone,setInputPhone] = useState("");
    const [loginPage,showLoginPage] = useState(true);
    const [verifyMobile, showVerifyMobile] = useState(false);

    const handleChange = (e)=>{
        setInputPhone(e.target.value);
        
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(inputPhone.length === 10){
            alert("Your Magic Code is : 3419");
            showVerifyMobile(true);
            showLoginPage(false);
            


        }
        else{
            alert("Enter correct number");
        }

    }
  return (
   <>

     {
        loginPage && (

            <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap:'20px'
            }}
            item
            lg={6}
            xs={12}
          >
            <img style={{ width: "120px" }} src={logo} alt="logo" />
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Login</Typography>
            <Typography>Continue with your mobile number.</Typography>
            <TextField value={inputPhone} onChange={handleChange} size="small" sx={{width:'40%'}} placeholder="Mobile Number.">
            
            </TextField>
            <Button onClick={handleSubmit} size='large' sx={{ bgcolor: "#5538e8", color: "white" ,width:'40%'}}>Get Started</Button>
            {/* <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <hr />
              or<hr></hr>
            </Box> */}
            <Button
              sx={{
                border: "1px black solid",
                textTransform: "none",
                color: "black",
                width:'40%'
                
              }}
              variant="outlined"
            >
              <img src={email} style={{ height: "19px", marginRight: "7px" }}  alt="email"/>
              Continue with Email
            </Button>
            <Button
              sx={{
                border: "1px black solid",
                textTransform: "none",
                color: "black",width:'40%'
              }}
              variant="outlined"
            >
              <img src={google} style={{ height: "19px", marginRight: "7px" }}  alt="google"/>
              Continue with Google
            </Button>
            
            <Container sx={{marginTop:'80px',fontSize:'12px',textAlign:'center',width:'70%'}}>
    
    
            <p>
              By clicking "Continue with Google/Email" above, you acknowledge that
              you have read
               and understood, and agree to Pensil's Terms and
              Conditions and Privacy Policy
            </p>
            </Container>
          </Grid>
        )
     }
     {
        verifyMobile && (
            <VerifyMobile inputPhone={inputPhone} />
        )
     }
   </>
  )
}

export default Login