import React from 'react'
import Navbar from '../../Home/Header/Navbar'
import Box from '@mui/material/Box';
import { useStyles } from '../AboutStyles';

const Header = () => {
    const classes = useStyles()
  return (
    <div>
         <Navbar />
         <Box className={classes.Aboutwrapper}>
    
         </Box>
    </div>
  )
}

export default Header