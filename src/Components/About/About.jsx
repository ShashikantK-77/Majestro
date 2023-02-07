import React from 'react'
import Header from './HeaderAbout/Header'
import AboutAbt from '../About/AboutAbt'
// import VisionMission from './VisionMission'
import Footer from '../Footer/Footer'
import IntroAbt from './IntroAbt'
import Directors from './Directors'
import Newvimi from './Newvimi'
import Quality from './Quality'
const About = () => {
  return (
    <div>
       <Header/>
     
       <AboutAbt/>
       <IntroAbt/>
       {/* <VisionMission/> */}
       <Newvimi/>
       <Directors/>
       <Quality/>
       <Footer/>

    </div>
  )
}

export default About