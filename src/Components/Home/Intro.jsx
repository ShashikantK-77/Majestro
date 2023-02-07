import React from 'react'
import Box from '@mui/material/Box';
import { useStyles } from './Header/HeaderStyle'
import { Grid, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

const Intro = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.Introwrapper}>

                <Box className={classes.Headerintro}>
               <Fade right>
                        <Typography variant='h6'>Welcome To <span className={classes.spann}> Majstro Healthcare (Opc) Pvt Ltd  </span> </Typography> <br/>
                        <Typography variant='p' className={classes.introparap}>Thank you for visiting the website of MAJSTRO HEALTHCARE OPC PVT. LTD. <br/> We are sure you will have a pleasant 
                                    time browsing through our website and getting to know us.</Typography> <br/><br/>
                                    </Fade>
                                    <Fade left>
                                  <Typography variant='h6'sx={{color:'orange'}}>At Majstro, we believe in "What we think we create, what we feel we attract, <br/>  what we imagine we become" 
                                
                                  </Typography>
                 </Fade>
                </Box>
                <Grid container className={classes.Introunderwrapper}>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <img className={classes.intrologo} src={require('./Images/Intro.jpg')} alt="intro" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <Typography variant='h6'  className={classes.intropara} >

                                

                                Medicine is an essential part of life these days. Majstro is committed to ensure that medicines are accessible to everyone. 
                                To enable this, we are associated with the manufacturing companies having technologically advanced manufacturing units and 
                                godowns of the highest standard.  <br/> <br/>
                                These companies hold WHO GMP certification, and operate in compliance with the ISO standards. 
                                We ensure excellence in all our operations, be it scientific research or operational skills.</Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Intro