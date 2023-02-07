import { Box } from '@mui/system';
import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { useStyles } from './Home/Header/HeaderStyle';
import { useEffect } from 'react';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
const GotoTop = () => {
    const [isVisible, setIsvisible] = useState(false);
    const classes = useStyles();
    const gotobtn=()=>{

        window.scrollTo({top:0,left:0,behavior:"smooth"});

    }
    const listenToScroll = () => {


        let heightTohidden = 250;
        const winSc̥roll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winSc̥roll > heightTohidden){
            setIsvisible(true);
        }else{
            setIsvisible(false);
        }
    };
    

    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);
        return () => window.removeEventListener("scroll",listenToScroll)
    },[])
  return (
<Box className={classes.Wrapp} >
    {isVisible && 
    <div className={classes.gototop} onClick={gotobtn}>
        <NavigationIcon className={classes.Iconn}/>
    </div>}
    </Box>
  )
}

// const Wrapper = styled.section`

// display:flex;
// justi
// `
export default GotoTop