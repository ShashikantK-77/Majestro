import React from 'react'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useStyles } from './Header/HeaderStyle';

const Whychooseus = () => {
    const classes = useStyles()
  return (
    <div>
         <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}   >
         <Typography className={classes.textbg}> xs={3} sm={4} md={4} lg={4} </Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}   >
         <Typography className={classes.textbg}> xs={3} sm={4} md={4} lg={4} </Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}   >
         <Typography className={classes.textbg}> xs={3} sm={4} md={4} lg={4} </Typography>
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}   >
         <Typography className={classes.textbg}> xs={3} sm={4} md={4} lg={4} </Typography>
        </Grid>
      
      </Grid>
    </div>
  )
}

export default Whychooseus