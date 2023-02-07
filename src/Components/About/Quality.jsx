import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useStyles } from '../About/AboutStyles'


const Quality = () => {
  const classes = useStyles()
  return (
    <div className={classes.abtintrowrapper}>
      <Container>
        <Box >
          <Grid container>

            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Box>
                <img className={classes.introimg} src={require('./Images/Quality.jpg')} alt="introimg" />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} >
              <Typography variant='h4'>Quality At It's Best :</Typography>

              <Typography variant='h6'  >"There are no short cuts to quality. Quality is neither an accident not it happens overnight it must be planned."</Typography>
              <Typography sx={{textAlign:'justify'}}> The word 'QUALITY' has its origin in a Latin word -"Qualitas" means 'general exllence' or a 'distinctive feature’. Oxford Reference Dictionary defines quality as -"A standard of how good something is as measured against other similar things."
                GMP guidelines ensures, <br/>
                Standard and controlled operating procedures.<br/>
                Validation of process & systems to ensure consistency, precision.<br/>
                Standardized process irrespective on manpower. <br/>
                Trained personals & systemized documentations.<br/>
                Our Manufacturing Partners following WHO GMP NORMS.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Quality