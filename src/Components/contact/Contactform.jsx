import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyles } from './Contactstyle'

import Stack from '@mui/material/Stack';

const Contactform = () => {
    const classes = useStyles()
    return (
        <div>
            <Box>
                <Box className={classes.contactinfo}>
                    <Typography variant='h4' className={classes.headcont}>
                        Contact us
                    </Typography>
            
                    
                    <Box className={classes.contlist}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <Stack spacing={0}>
                                    <Typography variant='h4'>Head Office</Typography>
                                    <Typography variant='p'>Shop No 10 Gr Floor, A Wing Swami Narayan Building, Suncity Rd,Wadgaon Bk, Pune-411051</Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <Stack spacing={0}>
                                    <Typography variant='h4'>Corporate Office
</Typography>
                                    <Typography variant='p'>101, 1st floor Parshwanath Appt. Near R. Panavelkar Nagari,
                                        Badlapur (E), Dist. Thane 421503</Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} >

                            </Grid>

                        </Grid>
                    </Box>
                    <br />
                    <Typography variant='h6'className={classes.quotecont} >Getting in touch has never been so easy. Just drop in your details and we will have someone get in touch as soon as possible.
</Typography>
                </Box>
              
            </Box>
        </div>
    )
}

export default Contactform