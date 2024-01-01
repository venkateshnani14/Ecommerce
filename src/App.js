import './App.css';
import React, { useEffect, useState } from 'react'
import Tictactoe from './components/Tictactoe';
import Home from './components/Home';
import Headphones from './components/Headphones'
import Mobiles from './components/Mobiles'
import Laptops from './components/Laptops'
import Cart from './components/Cart'
import Buy from './components/Buy'
import data from "./data/data.json"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Slideshow from './components/Slideshow';

const App = () => {
    const [landingPage,setLandingPage] = useState({data});
    useEffect(()=>{setLandingPage(data)},[]);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tictactoe' element={<Tictactoe/>}/>
        <Route path='/electronics/headphones' element={<Headphones data = {landingPage.Headphones}/>}/>
        <Route path='/electronics/mobiles' element={<Mobiles data = {landingPage.Mobiles}/>}/>
        <Route path='/electronics/laptops' element={<Laptops data = {landingPage.Laptops}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/slideshow' element={<Slideshow data={landingPage.Slides}/>} />
        <Route path='/buy-now/:itemType/:itemId' element={<Buy data = {landingPage}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
