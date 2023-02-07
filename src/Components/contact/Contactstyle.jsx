import { makeStyles } from "@mui/styles";
import Image from './Images/Contactheader.jpg'
export const useStyles = makeStyles((theme) => ({

    contactwrapper:{
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
    contactinfo:{
        backgroundColor:'##2f2f2f',
        textAlign:'center',
        minHeight: "20vh",
        height: "auto",
        padding:'25px 5px'
    },
    contlist:{
        backgroundColor:'white',
    },
    headcont:{
        color:'white',
        fontWeight:'700',
        padding:'4px 15px',
        backgroundColor:'green',
        display:'initial',
    },
    quotecont:{
        color:'green',
    }


}));