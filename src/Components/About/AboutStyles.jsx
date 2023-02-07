import { makeStyles } from "@mui/styles";
import Image from '../About/Images/Aboutheader.jpg'
export const useStyles = makeStyles((theme) => ({
    
    Aboutwrapper:{
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
    Aboutussectn:{
        backgroundColor:"#FFF5F2",
    },
    Aboututext:{
        padding:"40px 10px"
    },
    fisrstabt:{
        // padding:"20px 12px",
        padding:"20px 12px",
        border: "orange 2px solid",
        margin: '0px 15px',
        borderRadius: '7px',
        
    },
    icon:{
        width: 160,
        height: 160,
    },
    wrappervimibox:{
        backgroundColor:'#EDF6FF',
    },
    btnnn:{
        textDecoration:"none",
        padding:"8px 15px",
        backgroundColor:"#FC6600",
        color:"white",
        margin:"25px 0px",
        "&:hover": {
            backgroundColor: '#8B4000',
          },
    },
    vimibox:{
        padding:'45px 10px',
    },
    introimg:{
        maxWidth:"90%",
        borderRadius:"4%",
        alignItems:"center"

    },
    abtintrowrapper:{
        padding:"25px 20px",
        backgroundColor:'#EDF6FF',
    },
    introparabt:{
            textAlign:'center!important',
            color:'green!important',
    },
    directorswrapper:{
        padding:'35px 15px'
    },
    headerabt:{
        alignItems:'center',
        textAlign:'center'
    },
    smalldirect:{
        color:'orange'
    },
    Direct:{
        padding:'0',
    },
    Directimg:{
        maxWidth:'60%',
        justifyContent:'center'
    },
    main:{
        display: 'flex',
        backgroundColor: '#FFDDC5',
       
       
        // [theme.breakpoints.between("sm", "md")]: {
        //     display:'flex',

        //     msFlexDirection: 'column'
        //     },
        

    },
    imgdiv:{
        maxWidth:'20%',
    },
    imgdirect:{
        maxWidth:'100%',
    },
    textdiv:{
        /* margin: 20px; */
        margin: 'auto',
        padding: ' 18px',
    }
}));