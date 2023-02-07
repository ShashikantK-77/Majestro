
// import { makeStyles } from "@mui/styles";


import {makeStyles} from "@mui/styles";

// import { Theme } from "./theme";
import Image from '../Images/a.jpg'
import Imagea from '../Images/a.jpg'
import Imageb from '../Images/a.jpg'

// import logo from '../Images/Majstrologo.png'

export const useStyles = makeStyles((theme) => ({
    shashi:{
        color:"red",
    },
    Headerwrapper:{
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        //  backgroundColor:Theme.colors.base1,
        backgroundImage: `linear-gradient(to bottom right, #04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"relative",
    },
    Toolbar:{
        display: 'flex',
        flexFlow: "row wrap",
        justifyContent: "space-between",
        color:"Orange",
        backgroundColor:"white",
    },
    navlinks:{
        color:"white"
    },
    buttons:{
        color:"green"
    },
    mainintrotext:{
        position: "absolute",
        color: "white",
    
        top: "50%",
        left: "50%",
        // -ms-transform:" translate(-50%, -50%)",
        transform:" translate(-50%, -50%)",
        textAlign: "center",
    },
    smalltext:{
        fontSize: "2rem",
    },
    bigtext:{
        fontSize: "5rem",
        fontWeight:"700!important",
    },
    textbg:{
        backgroundColor:"green"
    },
    Aboutussectn:{
        backgroundColor:"#FFF5F2",
    },
    Aboututext:{
        padding:"40px 10px"
    },
    fisrstabt:{
        padding:"20px 12px",
        border: "orange 2px solid",
        margin: '0px 15px',
        borderRadius: '7px',
    },
    logo:{
        maxWidth:'45%',
    },logosmall:{
        maxWidth:'25%',
    },
    Introwrapper:{
        backgroundColor:'#F5F5F5',
    },
    intrologo:{
        maxWidth:'90%',
    },
    intropara:{
        padding:'40px 50px 0px 5px ',
       fontSize:'1.5rem',
       textAlign:'justify',
    },
    allign:{
        // padding:'0px 40px!important',
        fontSize:'1.5rem',
    },
    Introunderwrapper:{
        backgroundColor:'#fad4ac',
    },
    maininner:{
        width: '350px',
        height: 'auto',
    },
    Headerintro:{
        textAlign:'center',
        padding:'15px',
    },
    introparap:{
        fontSize:'1.5rem',
    },
    spann:{
        color:'Orange',
        // fontWeight:'700',
    },
    linkbtns:{
        textDecoration:'none',
        padding:'0px 20px',
        fontWeight:'700',
        color:'orange',
        fontSize:'1.2rem',
    },
    BtnSmall:{
        marginLeft:"auto",
        color:'orange!important',
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
    listlink:{
        color:'white!important',
    //     backgroundColor:'green!important',
    // padding:'5px!important',
    textDecoration:'none',
    },
    listtext:{
        color:'white',
    },
    Wrapp:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    gototop:{
        fontSize:'2.4rem',
        width:'3.5rem',
        height:'3.5rem',
        color:'#fff',
        backgroundColor:'#8B4000',
        boxShadow:'2px',
        borderRadius:'50%',
        position:'fixed',
        bottom:'3rem',
        right:'3rem',
        zIndex:'999',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
    },
    '& makeStyles-Toolbar-3 ':{
        flexFlow:'nowrap;',
    }
   
    // Iconn{
    //     animation: gototop 1.2s linear infinite alternate-reverse,
    // },
    // @keyframes gototop{
    //     0%{
    //         transform:'TranslateY(-0.5rem)',
    //     }
    //     100%{
    //         transform:'TranslateY(1rem)',
    //     }
    // }
    ,
    abc:{
        width: "100%",
        minHeight: "100vh",
        height: "80vh",
        //  backgroundColor:Theme.colors.base1,
        backgroundImage: `linear-gradient(to bottom right, #04303140, #00606473),url(${Imageb})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"relative",
    },
    def:{
        width: "100%",
        minHeight: "100vh",
        height: "80vh",
        //  backgroundColor:Theme.colors.base1,
        backgroundImage: `linear-gradient(to bottom right, #04303140, #00606473),url(${Imagea})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"relative",
    },
    ghi:{
        width: "100%",
        minHeight: "100vh",
        height: "80vh",
        //  backgroundColor:Theme.colors.base1,
        backgroundImage: `linear-gradient(to bottom right, #04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position:"relative",
    },
    

}));