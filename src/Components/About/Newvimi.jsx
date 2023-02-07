import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import DiamondIcon from '@mui/icons-material/Diamond';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useStyles } from './AboutStyles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Fade from 'react-reveal/Fade';

const Newvimi = () => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.wrappervimibox}>
        <Container className={classes.vimibox}  >
          <Grid container spacing={2} >
          <Fade left>
            <Grid item xs={12} sm={12} md={12} lg={12}   >
              <Card sx={{backgroundColor: "#002A52", color: 'white' }} >
                <CardContent>
                  <CheckCircleIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                    Our Core Values
                  </Typography>

                  <Typography variant="h6">
                  Our values define who we are and the kind of company we aim to be. We have an unwavering commitment to the highest ethical standards, placing the safety and care of the patients at the centre of our core values.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>
            </Fade>

            <Fade right>
            <Grid item xs={12} sm={12} md={12} lg={12}    >
              <Card sx={{backgroundColor: "#FFDDC5" }} >
                <CardContent>
                  <AltRouteIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                    Our Mission
                  </Typography>

                  <Typography variant="h6">
              Our aim is to spread our operations to every corner of the country and make our products more readily available. By bringing in a new way of work and a range of innovative products, we ensure the availability of medicines to cure all kinds of ailments at the right place and time.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>
            </Fade>

            <Fade left>
            <Grid item xs={12} sm={12} md={12} lg={12}    >
              <Card sx={{backgroundColor: "#5EC2AF", color: 'white' }} >
                <CardContent>
                  <VisibilityIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                    Our Vision
                  </Typography>

                  <Typography variant="h6">
                   Our healthcare products ensure that you battle your ailments to victory!! ! We provide best of the facilities
                   to our associates to ensure their personal development in order to deliver nothing less than the best.
                    Our future growth aims at large-scale expansion without compromising on quality parameters.

                  </Typography>


                </CardContent>

              </Card>
            </Grid>
            </Fade>

            <Fade right>
            <Grid item xs={12} sm={12} md={12} lg={12}    >
              <Card sx={{backgroundColor: "#002A52", color: 'white' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                  Team Work
                  </Typography>

                  <Typography variant="h6">
                  We believe in "The more minds to contribute, the better the results". We work together across the hall and across the globe, collaborating actively to tackle toughest challenges and advance towards our collective goals.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>
            </Fade>

            <Fade left>
            <Grid item xs={12} sm={12} md={12} lg={12}    >
            <Card sx={{backgroundColor: "#FFDDC5" }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                  Leadership
                  </Typography>

                  <Typography variant="h6">
                  Leadership is a state of action, empowering decision-makers at every level. We strive to move forward with a purpose to create value for today and legacy for tomorrow 
It has survived not only five centuries, but also the leap into electronic typesetting and scrambled it to make a type specimen book.

                  </Typography>


                </CardContent>

              </Card>
            </Grid>
            </Fade>

            <Fade right>

            <Grid item xs={12} sm={12} md={12} lg={12}    >
            <Card sx={{backgroundColor: "#5EC2AF", color: 'white' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h5" gutterBottom>
                  Integrity
                  </Typography>

                  <Typography variant="h6">
                  The motto of our operations is "Doing what's right - for patients and employees". We act with an unwavering commitment to ethics, honesty and accountability.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>
</Fade>

          </Grid>
        </Container>



      </Box>
    </div>
  )
}

export default Newvimi