import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { NavLink } from 'react-router-dom';


import { useStyles } from './FooterStyle'


const Footer = () => {
  const classes = useStyles()
  return (
    <div>
       
      <Box>
      
        <Grid container className={classes.mainfooter}>
       
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
            <Typography variant='h6' className={classes.mainfoottext}>About</Typography>
            <img className={classes.logo} src={require('./Images/Majstrologo.png')} alt="logo" />

            <Stack direction="row">
              <Box className={classes.footertext}><PhoneRoundedIcon/></Box>
              <Box className={classes.footertext}>+91 8237033300</Box>
            </Stack>

            <Stack direction="row">
              <Box className={classes.footertext}><LanguageIcon/></Box>
              <Box className={classes.footertext}>www.majstrohealthcare.com</Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
          <Typography variant='h6' className={classes.mainfoottext}>Quick Links</Typography>
            <Stack>
            <NavLink className={classes.linkbtns} to={"/"}>Home</NavLink>
            <NavLink className={classes.linkbtns} to={"/about"}>About</NavLink>
    <NavLink className={classes.linkbtns} to={"/product"}>Products</NavLink>
    <NavLink className={classes.linkbtns} to={"/contact"}> Contact</NavLink>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  >
            <Typography variant='h6' className={classes.mainfoottext}>Contact Info</Typography>

            <Typography className={classes.footertext}>Shop No 10 Gr Floor, A Wing
Swami Narayan Building,
Suncity Rd,Wadgaon Bk,
Pune-411051</Typography>
            <Typography className={classes.footertext}>Monday - Saturday 09:00 AM - 06:00 PM</Typography>

            <Typography className={classes.footertext}>Sunday Closed</Typography>

          </Grid>

         
        
        </Grid>
      </Box>

      <Box>
        <Typography className={classes.creditbg}>Copyright © 2022 MAJSTRO HEALTHCARE PVT LIMITED  | Designed By <NavLink className={classes.linkbtns} to={"https://reflexarts.in/"}>ReflexArts</NavLink> </Typography>

      </Box>
   
      
    </div>
  )
}

export default Footer