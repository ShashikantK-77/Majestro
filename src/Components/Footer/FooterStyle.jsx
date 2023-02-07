
import {makeStyles} from "@mui/styles";
// import { Theme } from "./theme";

export const useStyles = makeStyles((theme) => ({
    textbg:{
        backgroundColor:"#8B4000",
        color:"white",
        fontSize:"1rem",
        // marginBottom:"4vh"
    },
    mainfooter:{
        height: "auto",
        backgroundColor:"#FC6600",
        padding:"25px 65px",
    },
    logo:{
        width: "35%",
        // maxwidth: "15px",
        // max: "2%",
        // height: "auto",
        //  backgroundColor:Theme.colors.base1,
   
    },
    Box:{
        color:"white",
    },
    footertext:{
        color:"white",
    },
    mainfoottext:{
        fontSize:'1.5rem',
        fontWeight:'500',
        color:'yellow',
        padding:'4px 0px',
        backgroundColor:'#8B4000',
        margin:'10px 0px!important'
    },
    creditbg:{
        backgroundColor:"#8B4000",
        color:"white",
        fontSize:"1rem",
        padding:'12px 64px',
    },
    linkbtns:{
        textDecoration:'none',
        // padding:'0px 20px',
        fontWeight:'700',
        color:'yellow',
    }
}));