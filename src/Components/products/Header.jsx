import React from 'react'
import Navbar from '../Home/Header/Navbar'
import { Box } from '@mui/system'
import { useStyles } from './Productstyles'
const Header = () => {
    const classes = useStyles()
  return (
    <div>
        <Navbar/>
        <Box className={classes.productwrapper}>
    
    </Box>
    </div>
  )
}

export default Header