import React from 'react'
import { Box } from '@mui/system'
import { useStyles } from '../About/AboutStyles'
import { Container,  Typography } from '@mui/material'
import Directorimg from '../About/Images/director.jpg'
import './Style.css'
const Directors = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.directorswrapper} >
                <Box className={classes.headerabt}>
                    <Typography variant='h6' className={classes.smalldirect}>WHO WE ARE</Typography>
                    <Typography variant='h3'>Our Directors</Typography>
                </Box>
<Container sx={{padding:'20px'}}>
<div className='main'>
        <div className='imgdiv'>
            <img className='imgdirect' src={Directorimg} alt=""/>
        </div>
        <div className= 'textdiv' >
           
            <Typography variant='h5' >Mr.Amol M. Tambekar</Typography>
            <Typography variant='p' >Mr. Amol M Tambekar has more than 15 years of experience in the pharmaceutical industry. Mr. Nazim has extensive and comprehensive Sales experience, being involved in the Novartis India Ltd and Alkem Labs & Cadila pharma. He holds a Diploma in pharmacy, Science Graduated and MBA in Marketing.</Typography>
           
        </div>
    </div>

</Container>
                

            </Box>
        </div>
    )
}

export default Directors