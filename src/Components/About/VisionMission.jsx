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


const VisionMission = () => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.wrappervimibox}>
        <Container className={classes.vimibox}  >
          <Grid container spacing={2} >

            <Grid item xs={12} sm={12} md={4} lg={4}   >
              <Card sx={{ minWidth: 275, backgroundColor: "#002A52", color: 'white', padding: '50px 0px' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Our Core Values
                  </Typography>

                  <Typography variant="h6">
                  Our values define who we are and the kind of company we aim to be. We have an unwavering commitment to the highest ethical standards, placing the safety and care of the patients at the centre of our core values.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>


            <Grid item xs={12} sm={12} md={4} lg={4}   >
              <Card sx={{ minWidth: 275, backgroundColor: "#FFDDC5", padding: '50px 0px' }} >
                <CardContent>
                  <AltRouteIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Our Mission
                  </Typography>

                  <Typography variant="h6">
              Our aim is to spread our operations to every corner of the country and make our products more readily available. By bringing in a new way of work and a range of innovative products, we ensure the availability of medicines to cure all kinds of ailments at the right place and time.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}   >
              <Card sx={{ minWidth: 275, backgroundColor: "#5EC2AF", color: 'white', padding: '50px 0px' }} >
                <CardContent>
                  <VisibilityIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                    Our Vision
                  </Typography>

                  <Typography variant="h6">
                  Our healthcare products ensure that you battle your ailments to victory!! ! We provide best of the facilities to our associates to ensure their personal development in order to deliver nothing less than the best.
Our future growth aims at large-scale expansion without compromising on quality parameters.

                  </Typography>


                </CardContent>

              </Card>
            </Grid>


            <Grid item xs={12} sm={12} md={4} lg={4}   >
              <Card sx={{ minWidth: 275, backgroundColor: "#002A52", color: 'white', padding: '50px 0px' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                  Team Work
                  </Typography>

                  <Typography variant="h6">
                  We believe in "The more minds to contribute, the better the results". We work together across the hall and across the globe, collaborating actively to tackle toughest challenges and advance towards our collective goals.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}   >
            <Card sx={{ minWidth: 275, backgroundColor: "#FFDDC5", padding: '50px 0px' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                  Leadership
                  </Typography>

                  <Typography variant="h6">
                  Leadership is a state of action, empowering decision-makers at every level. We strive to move forward with a purpose to create value for today and legacy for tomorrow 
It has survived not only five centuries, but also the leap into electronic typesetting and scrambled it to make a type specimen book.

                  </Typography>


                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}   >
            <Card sx={{ minWidth: 275, backgroundColor: "#5EC2AF", color: 'white', padding: '50px 0px' }} >
                <CardContent>
                  <DiamondIcon fontSize="large" />
                  <Typography variant="h6" gutterBottom>
                  Integrity
                  </Typography>

                  <Typography variant="h6">
                  The motto of our operations is "Doing what's right - for patients and employees". We act with an unwavering commitment to ethics, honesty and accountability.
                  </Typography>


                </CardContent>

              </Card>
            </Grid>


          </Grid>
        </Container>



      </Box>
    </div>
  )
}

export default VisionMission