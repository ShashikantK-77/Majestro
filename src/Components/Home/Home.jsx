import React from 'react'
import Navbar from './Header/Navbar'
// import Homehero from './Header/Homehero'
// import { useStyles } from './Header/HeaderStyle'
import Box from '@mui/material/Box';
import About from './About';
// import Whychooseus from './Whychooseus';
import Footer from '../Footer/Footer';
import Intro from './Intro';
import Slide from './Header/Slide';

const Home = () => {
  // const classes = useStyles()
  return (

      <Box >
        {/* <Box className={classes.Headerwrapper}> */}

        <Navbar />
        <Slide/>
        {/* <Homehero /> */}
        {/* </Box> */}
        <Intro/>
        <About/>
        {/* <Whychooseus/> */}
        <Footer/>
       
      </Box>


  )
}

export default Home