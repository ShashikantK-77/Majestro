import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from "swiper"
import { useStyles } from './HeaderStyle'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

import Fade from 'react-reveal/Fade';


const Slide = () => {
    const classes = useStyles()
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className={classes.abc}>
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
      </SwiperSlide>

      <SwiperSlide className={classes.def}>
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
      </SwiperSlide>

      <SwiperSlide className={classes.ghi}>
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
      </SwiperSlide>
  

    </Swiper>
  )
}

export default Slide