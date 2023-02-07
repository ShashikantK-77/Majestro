import { Box } from '@mui/material'
import React from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material';
import { useStyles } from './AboutStyles';
import Fade from 'react-reveal/Fade';
import {NavLink} from  "react-router-dom";
const AboutAbt = () => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.Aboutussectn}>
        <Container className={classes.Aboututext}>
        <Typography variant="h5" component="h5" sx={{textAlign:'center'}}>Majestro Healthcare Pvt Ltd</Typography>
        <Fade bottom>
          <Grid container spacing={2} sx={{padding:'25px'}} >
         
            <Grid item xs={12} sm={12} md={6} lg={6}   >
            <div className={classes.fisrstabt}>
              <Typography variant="h5" component="h5" sx={{textAlign:'justify'}}> Majestro is born out of compassion for healthcare, strong desire and passion to contribute to healthcare in India and globally. </Typography>
              <br/>
              <NavLink className={classes.btnnn} to={"/about"}>Contact Us</NavLink>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} >
            <div className={classes.fisrstabt}>
              <Typography variant="h5" component="h5" sx={{textAlign:'justify'}}> The company run by a highly experienced and expert management team and has acquired 29 acres of Industrial Land in Maharashtra.

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

export default AboutAbt