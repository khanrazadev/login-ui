import React from 'react'
import Login from './Login'


import { Grid} from "@mui/material";


import left from "../utils/left.png";


const Home = () => {

    
  return (
    <Grid container>
      <Grid item lg={6} xs={12}>
        <img
          style={{ height: "100vh", width: "100%", objectFit: "cover" }}
          src={left}
          alt="logo"
        />
      </Grid>



     {/* login Page  */}
           <Login />
        
      
    </Grid>
  )
}

export default Home