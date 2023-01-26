import React, { useState } from "react";
import { Grid, Typography, Button, TextField} from "@mui/material";
import logo from "../utils/logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Stack } from "@mui/system";
import AlreadyExist from "./AlreadyExist";
import UserData from '../User.json'
import VerifyEmail from "./VerifyEmail";
 
const VerifyMobile = ({ inputPhone}) => {
  const [inputMagic, setInputMagic] = useState("");
  const [alreadyExist, showAlreadyExist] = useState(false);
  const [verifyPage, showVerifyPage] = useState(true);
  const [verifyEmail, showVerifyEmail] = useState(false);

  const handleChange = (e) => {
    setInputMagic(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existPhone = UserData.find((user) => user.phone === inputPhone);
    if (inputMagic === "3419") {
        if(existPhone){

            showAlreadyExist(true);
            showVerifyPage(false);
        } else {
            showVerifyEmail(true);
            showVerifyPage(false);
         
        }
        }
  };
  return (
    <>
    {
        verifyPage && (
            <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "60px",
        }}
        item
        lg={6}
        xs={12}
      >
        <img style={{ width: "120px" }} src={logo} alt="logo" />

        <Stack sx={{ width: "40%", display: "flex", flexDirection: "row" }}>
          <ArrowBackIosIcon />
          <Typography sx={{ width: "50%", fontWeight: "bold" }}>
            Verify mobile no.
          </Typography>
        </Stack>
        <Typography sx={{ width: "40%" }}>
          Please enter magic code sent on {inputPhone}
        </Typography>
        <TextField
          onChange={handleChange}
          value={inputMagic}
          size="small"
          sx={{ width: "40%" }}
          placeholder="Enter Magic code."
        ></TextField>
        <Button
          onClick={handleSubmit}
          size="large"
          sx={{
            bgcolor: "#5538e8",
            color: "white",
            width: "40%",
            textTransform: "none",
          }}
        >
          Confirm
        </Button>
      </Grid>

        )
    }

      

      {
        alreadyExist && (
            <AlreadyExist inputPhone={inputPhone}/>
        )
      }
      {
        verifyEmail && <VerifyEmail showAlreadyExist={showAlreadyExist}/>
      }
</>
  );
};

export default VerifyMobile;
