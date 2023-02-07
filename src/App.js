import React from 'react'
import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import Contact from './Components/contact/Contact'
import Home from './Components/Home/Home'
import Product from './Components/products/Product'
import About from './Components/About/About'
import Error from './Components/Error';
import GotoTop from './Components/GotoTop';


const App = () => {
  return (
    <BrowserRouter>
    <Routes >
    <Route exact path="/Majstro" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<Error/>} />
    </Routes>
    <GotoTop/>
    </BrowserRouter>





  
  )
}

export default App