import React from 'react'
import { useStyles } from './HeaderStyle'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar,useTheme,useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {NavLink} from  "react-router-dom";
import DrawerComp from './DrawerComp';

// import Hidden from '@mui/material/Hidden';

// import Button from '@mui/material/Button';


const Navbar = () => {
    const classes = useStyles()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
   
 
  return (
   <Box>
    <AppBar>
    <Toolbar className={classes.Toolbar}  sx={{
   
      flexFlow: 'nowrap',
 
  }}>

  { isMatch ?<>
   
          <Box>
          <img className={classes.logosmall} src={require('../Images/Majstrologo.png')} alt="logo" />
          </Box>

<DrawerComp/>
    </>:
    
    <Box>
       <IconButton color="inherit">
          <Box>
          <img className={classes.logo} src={require('../Images/Majstrologo.png')} alt="logo" />
          </Box>
    </IconButton>
    <NavLink className={classes.linkbtns} to={"/Majstro"}>Home</NavLink>
    <NavLink className={classes.linkbtns} to={"/about"}>About</NavLink>
    <NavLink className={classes.linkbtns} to={"/product"}>Products</NavLink>
    <NavLink className={classes.linkbtns} to={"/contact"}> Contact</NavLink>
       {/* <Button className={classes.buttons} color="inherit" >Home</Button> */}


    </Box>}
    </Toolbar>
    </AppBar>

   </Box>
  )
}



export default Navbar