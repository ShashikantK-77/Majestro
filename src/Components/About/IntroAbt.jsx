import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useStyles } from '../About/AboutStyles'
import './Style.css'


const IntroAbt = () => {
    const classes = useStyles()
  return (
    <div className={classes.abtintrowrapper}>
        <Container>
            <Box >
                <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Box>
                        <img className={classes.introimg} src={require('./Images/AboutIntro.jpg')} alt="introimg" />
                        </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Typography variant='h6'>About Majstro :</Typography>

                        <Typography  className= 'shashiabc' sx={{textAlign:'justify'}} >"Majstro Healthcare (Opc) Pvt Ltd" is proud to be a part of rapidly-growing healthcare industry, in India. 
                                                  We are a Pharmaceutical Marketing Company based in Pune (State of Maharashtra, India).
                                                  We offer a wide range of products including Critical Care range.<br/><br/>
                                                  Maintain and Quickly Deliver Quality Medicines to our Customers at their door Steps.<br/><br/>
                                                  Utilize latest technology to meet our Customer Requirements for Medicines.<br/><br/>
                                                  Play a Vital Role in Distribution Quality Medicines.<br/><br/>
                                                  Provide Value Added Services to Healthcare Service Providers.<br/><br/>

                        </Typography>
                       
                        
                </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default IntroAbt