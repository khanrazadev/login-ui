import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import person from "../utils/person1.png";
import { useState} from "react";
import VerifyEmail from "./VerifyEmail";
import VerifyMobileOtp from "./VerifyMobileOtp";

const AlreadyExist = ({inputPhone}) => {
  const [verifyEmail, showVerifyEmail] = useState(false);
  const [alreadyExist, showAlreadyExist] = useState(true);
  const [verifyMobileOtp, showVerifyMobileOtp] = useState(false);

  const handleSubmit = () => {
    showVerifyEmail(true);
    showAlreadyExist(false);
  };

  const handleSubmitOtp= ()=>{
    alert("your Magic Code is : 3419")
    showVerifyMobileOtp(true);
    showAlreadyExist(false);


  }
  

  return (
    <>
      {alreadyExist && (
        <Grid
          sx={{
            marginLeft: "200px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Card sx={{ borderRadius: "20px", height: "50%", width: "90%" }}>
            <CardContent
              sx={{
                marginTop: "40px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                Looks like your account already exist using this email id
              </Typography>
              <Avatar
                sx={{ width: "80px", height: "80px", marginTop: "20px" }}
                src={person}
              ></Avatar>
              <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                Jaacson Lipshuts
              </Typography>
              <Typography variant="subtitle">raza@abc.com</Typography>
              <Button
                onClick={handleSubmit}
                sx={{ textTransform: "none", boxShadow: "none" }}
              >
                <Typography
                  variant="h9"
                  sx={{ color: "blue", fontWeight: "bold" }}
                >
                  Switch account
                </Typography>
              </Button>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="medium"
                sx={{
                  width: "35%",
                  border: "1px solid #5538e8",
                  color: "#5538e8",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitOtp}
                size="medium"
                sx={{
                  width: "35%",
                  bgcolor: "#5538e8",
                  color: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover":{backgroundColor:'#5538e8'}
                }}
              >
                Send OTP
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
      {verifyEmail && <VerifyEmail />}

     {verifyMobileOtp && <VerifyMobileOtp inputPhone={inputPhone}/>}
    </>
  );
};

export default AlreadyExist;
