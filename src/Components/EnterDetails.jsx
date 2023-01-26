import React from "react";
import { Container, Typography, Box, Button,TextField } from "@mui/material";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

import CloseIcon from '@mui/icons-material/Close';

const EnterDetails = () => {
  return (
    <Container
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:'50px',
        gap:'10px'
      }}
    >
      <Typography variant="h6">👋 Hi, Tell us a little bit about yourself</Typography>

      <Container
        sx={{
          borderRadius: "50%",
          width: "90px",
          height: "90px",
          marginTop: "20px",
          border: "1px dashed #BDD4E6",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            bgcolor: "#C5E6F7",
            borderRadius: "50%",
            width: "85px",
            height: "85px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhotoOutlinedIcon
            sx={{ color: "#5538e8", width: "30px", height: "30px" }}
          />
        </Container>
      </Container>
          <Button size="large" sx={{color:'#5538e8',textTransform:"none",fontWeight:'bold'}} component="label">
            Set Profile Picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <Typography sx={{width:'45%'}}>Your Name.</Typography>
          <TextField
              size="small"
              placeholder="Enter your name"
            
              
             
            
              sx={{
                width: "45%",
            
              
              }}
            />
          <Typography sx={{width:'45%'}}>Short Bio</Typography>
          <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          placeholder="Enter your short bio"

          sx={{width:'45%'}}
        />

        <Typography sx={{color:'#5538e8',width:'45%',fontWeight:'bold'}}> <span style={{fontWeight:'bolder'}}>+</span> Add Social handles</Typography>

       
        <Box sx={{marginLeft:'22px',width:'49%',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

        <TextField
              size="small"
              placeholder="Paste link here"
            
              
             
            
              sx={{
                width: "100%",
            
              
              }}
            /> 
            <CloseIcon sx={{marginTop:'7px',marginLeft:"6px",color:'	#C0C0C0'}}/>
        </Box>

      
             <Button
           
              size="large"
              sx={{
                width: "45%",
                textTransform: "none",
                bgcolor: "#5538e8",
                color: "white",
                marginTop: "20px",
              }}
            >
              Proceed
            </Button>

          
    </Container>
  );
};

export default EnterDetails;
