import React from 'react'
import { useStyles } from './Contactstyle'
import Box from '@mui/material/Box';
import Navbar from '../Home/Header/Navbar'

const Header = () => {
    const classes = useStyles()
  return (
    <div>
          <Navbar />
         <Box className={classes.contactwrapper}>
    
         </Box>
    </div>
  )
}

export default Header