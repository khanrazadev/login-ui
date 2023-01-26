import React, { useState } from "react";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import person from "../utils/person2.png";
import DoneIcon from "@mui/icons-material/Done";
import EnterDetails from "./EnterDetails";

const VerifyMobileOtp = ({ inputPhone }) => {

    const [inputMagic,setInputMagic] = useState("");
    const [ userDetail,showUserDetail] = useState(false);
    const [ mobilePage,showMobilePage] = useState(true);
    
    const handleChange=(e)=>{
        setInputMagic(e.target.value);


    }
    const handleClick = ()=>{
        showUserDetail(true);
        showMobilePage(false);

    }

   
  return (
<>
    {
        mobilePage && (
            <Container sx={{ width: "50%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Avatar
          sx={{ width: "80px", height: "80px", marginTop: "20px" }}
          src={person}
        ></Avatar>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Jaxson Lipshutz
        </Typography>
        <Typography variant="h9" sx={{ width: "50%", textAlign: "center" }}>
          Please verify your email id to gain access to the community.
        </Typography>

        <Grid
          sx={{
            border: "0.1px solid #A8A8A8",
            width: "45%",
            height: "36px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <Typography
            sx={{
              marginTop: "5px",
              marginLeft: "10px",
              color: "#707070",
              width: "100%",
            }}
          >
            +91-8767386055
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
              marginTop: "5px",
              marginRight: "5px",
            }}
          >
            <DoneIcon sx={{ color: "#50C878", width: "18px" }} />
            <Typography sx={{ color: "#50C878 " }}>verified</Typography>
          </Box>
        </Grid>

        <Typography
          variant="subtitle2"
          sx={{ marginTop: "30px", width: "45%", fontWeight: "bold" }}
        >
          Please the enter the magic code sent on +91-{inputPhone}.
          <span style={{ color: "#5538e8" }}> CHANGE </span>
        </Typography>
        <TextField
          size="small"
          placeholder="Enter Magic code."
          onChange={handleChange}
          sx={{
            width: "45%",
          }}
        />
        <Button
          onClick={handleClick}
          size="large"
          sx={{
            width: "45%",
            textTransform: "none",
            bgcolor: "#5538e8",
            color: "white",
            marginTop: "20px",
          }}
        >
          Confirm
        </Button>
      </Container>
    </Container>

        )
    }
    {
        userDetail && <EnterDetails/>
    }
    </>
  );
};

export default VerifyMobileOtp;
