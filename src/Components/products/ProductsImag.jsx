import { Box, Button, Typography, Container, } from '@mui/material'

import React, { useState } from 'react'

import { useStyles } from './Productstyles'
import Products from './ProductApi'
// import {Typography} from '@mui/material'
import Fade from 'react-reveal/Fade';
import Modal from '@mui/material/Modal';

const ProductsImag = () => {
  const shashi = useStyles()
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  function func1(a, b, c) {
    // console.log("shashi called");

    setPath(c);


  }
  return (

    <Box className={shashi.wrapperclass}>

      <Box className={shashi.headbox}>
        <Typography variant='h4' className={shashi.headpro} >Our Products</Typography>
      </Box>
      <Container>
      <Fade bottom>
        <Box className={classes.mainnn} >
          {Products.map((curElem) => {
            return (
              <div key={curElem.id}>
                <Box className={classes.maininner}>
                  {/* <Button onClick={(handleOpen) }> */}
                  <Button onClick={function (event) { func1(curElem.id, curElem.path, curElem.visualpath); handleOpen(); }} className={classes.bord} sx={{border:'5px solid orange',margin:'20px'}}>
                    <img className={classes.imgsize} src={curElem.path} alt="" />
                    {/* <img key={abc.id} className={classes.visualaid} src={abc.visualpath} alt="" /> */}

                  </Button>

                </Box>



              </div>
            );
          })}



          <Modal className={classes.mainmodal}
            open={open}
            onClose={handleClose}

            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modelstyle}>
              <img className={classes.visualaid} src={path} alt="" />
              {/* <h2>this is sys</h2> */}

            </Box>
          </Modal>

        </Box>
      </Fade>
      </Container>
    </Box>

  )

}

export default ProductsImag;