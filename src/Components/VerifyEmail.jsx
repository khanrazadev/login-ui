import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import person from "../utils/person2.png";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import EnterDetails from "./EnterDetails";
import UserData from "../User.json";

const VerifyEmail = ({showAlreadyExist}) => {
  const [inputEmail, setInputEmail] = useState("");
  const [verifyEmail, showVerifyEmail] = useState(true);
  const [verifyMagic, showVerifyMagic] = useState(false);
  const [inputMagicCode, setInputMagicCode] = useState("");
  const [enterDetail, showEnterDetail] = useState(false);
  const [mainPage, showMainPage] = useState(true);

  const handleMagicChange = (e) => {
    setInputMagicCode(e.target.value);
  };

  const handleMagicSubmit = (e) => {
    e.preventDefault();
    const existEmail = UserData.find((user) => user.email === inputEmail);

    if (inputMagicCode === "3419") {
      if (existEmail) {
        showAlreadyExist(true);
        showMainPage(false);

      } else {
        showEnterDetail(true);
        showMainPage(false);
      }
    } else {
      alert("Invalid Magic code");
    }
  };

  const handleChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your magic code is : 3419");
    showVerifyEmail(false);
    showVerifyMagic(true);
  };

  return (
    <>
      {mainPage && (
        <>
          <Container sx={{ width: "50%" }}>
            <Grid
              sx={{ width: "100%", display: "flex", justifyContent: "right" }}
            >
              <Button
                sx={{
                  color: "red",
                  border: "2px solid red",
                  textTransform: "none",
                  fontWeight: "bold",
                  minWidth: "80px",
                  marginTop: "20px",
                }}
                size="small"
                variant="outlined"
              >
                Logout
              </Button>
            </Grid>

            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "100px",
              }}
            >
              <>
                <Avatar
                  sx={{ width: "80px", height: "80px", marginTop: "20px" }}
                  src={person}
                ></Avatar>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Jaxson Lipshutz
                </Typography>
                <Typography
                  variant="h9"
                  sx={{ width: "50%", textAlign: "center" }}
                >
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
              </>

              {verifyEmail && (
                <>
                  <Typography
                    variant="subtitle2"
                    sx={{ marginTop: "30px", width: "45%", fontWeight: "bold" }}
                  >
                    Verify Email id
                  </Typography>
                  <TextField
                    size="small"
                    type="email"
                    placeholder="Enter email id"
                    value={inputEmail}
                    onChange={handleChange}
                    sx={{ width: "45%", marginTop: "5px" }}
                  />
                  <Button
                    onClick={handleSubmit}
                    size="large"
                    sx={{
                      width: "45%",
                      textTransform: "none",
                      bgcolor: "#5538e8",
                      color: "white",
                      marginTop: "20px",
                    }}
                  >
                    Request Magic code
                  </Button>
                </>
              )}
              {verifyMagic && (
                <>
                  <Typography
                    variant="subtitle2"
                    sx={{ marginTop: "30px", width: "45%", fontWeight: "bold" }}
                  >
                    Verify Magic code.
                  </Typography>
                  <TextField
                    size="small"
                    placeholder="Enter Magic code."
                    value={inputMagicCode}
                    onChange={handleMagicChange}
                    sx={{
                      width: "45%",
                    }}
                  />
                  <Button
                    onClick={handleMagicSubmit}
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
                </>
              )}
            </Container>
          </Container>
        </>
      )}

      {enterDetail && <EnterDetails />}
    </>
  );
};

export default VerifyEmail;
