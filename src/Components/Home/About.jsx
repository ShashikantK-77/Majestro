import { Box } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material';
import { useStyles } from './Header/HeaderStyle';
import Fade from 'react-reveal/Fade';
import {NavLink} from  "react-router-dom";

const About = () => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.Aboutussectn}>
        <Container className={classes.Aboututext}>
        
        {/* <Typography variant="h6" component="h6">MAJSTRO HEALTHCARE OPC PVT. LTD.</Typography> */}
        <Fade bottom>
          <Grid container spacing={6} >
         
            <Grid item xs={12} sm={12} md={6} lg={6} >
            <div className={classes.fisrstabt}>
            <Typography variant="h5" component="h5">MAJSTRO HEALTHCARE OPC PVT. LTD.</Typography>
              <Typography variant="h6" component="h6" sx={{textAlign:'justify'}}> Majestro is born out of compassion for healthcare, strong desire and passion to contribute to healthcare in India and globally. </Typography>
              <br/><br/>
              <NavLink className={classes.btnnn} to={"/contact"}>Know More</NavLink>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} >
            <div className={classes.fisrstabt}>
              <Typography variant="h6" component="h6" className={classes.allign} sx={{textAlign:'justify'}}> The company run by a highly experienced and expert management team in Maharashtra.
               Our objective is to set up an ultra-modern pharmaceuticals manufacturing facility focusing on Oral Solids, Nutraceuticals including Cosmeceuticals.</Typography>
               </div>
            </Grid>
            
          </Grid>
          </Fade>
        </Container>

      </Box>
    </div>
  )
}

export default About