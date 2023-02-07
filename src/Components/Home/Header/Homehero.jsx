import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { useStyles } from './HeaderStyle'
import Fade from 'react-reveal/Fade';




import 'swiper/css';

const Homehero = () => {
    const classes = useStyles()
  return (
    <div>

    
        <Box className={classes.mainintrotext}>
          <Fade bottom>
                <Typography variant='h5' component="h5"  className={classes.smalltext}>
                       Lets Make Your Life Healthier
                </Typography>
                {/* variant='h4' component="h4" */}
                <Typography variant='h2' component="h2"  className={classes.bigtext}>
                       Healthy Leaving
                </Typography>
                </Fade>
        </Box>
    </div>
  )
}

export default Homehero