import { makeStyles } from "@mui/styles";

import Image from './Images/Productsheader.jpg'
export const useStyles = makeStyles((theme) => ({

    productwrapper:{
        width: "100%",
        minHeight: "80vh",
        height: "auto",
        //  backgroundColor:Theme.colors.base1,
        backgroundImage: `linear-gradient(to bottom right, #04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY:"25%",
        position:"relative",
    },
   wrapperclass:{
    width:'100%',
    height:'auto',
    // backgroundColor:'green',
   },
   proimg:{
    width: "100%",
    // minHeight: "60vh",
    height: "auto",
   },
   headbox:{
    textAlign:'center',
    padding:'30px 25px',
   },
   headpro:{
    textAlign:'center',
    color:'white',
    fontWeight:'700',
    padding:'4px 15px',
    backgroundColor:'#FC6600',
    "&:hover":{
        backgroundColor: '#8B4000',
        border: "#8B4000 2px solid",
      },
    display:'initial',
    border: "orange 2px solid",
    borderRadius: '25px',
   },
   boximg:{
    display:'flex',
    flexDirection:'row!important',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
},
bord:{
    border: "orange 22px solid",
    // borderRadius: '25px',
},
mainnn:{
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexWrap:'wrap',
  
},
   maininner:{
    width: '350px',
    height: 'auto',
    
},
imgsize:{
    maxWidth:'90%',
    padding:'15px',
   
},
modelstyle:{
    position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: '80%',
backgroundColor:'white',
//   border: '2px solid #000',
boxShadow: 24,
p: 4,
},
mainmodal:{
    backgroundColor:'white'
},
visualaid:{
    maxWidth:'80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ['@media (max-width:780px)']:{ 
        maxWidth:'110%',
      },
}


}));