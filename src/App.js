import './App.css';
import React, { useEffect, useState } from 'react'
import Tictactoe from './components/Tictactoe';
import Navbar from './components/Navbar';
import Headphones from './components/Headphones'
import Mobiles from './components/Mobiles'
import Cart from './components/Cart'
import Buy from './components/Buy'
import data from "./data/data.json"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
    const [landingPage,setLandingPage] = useState({data});
    useEffect(()=>{setLandingPage(data)},[]);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>} Component={Navbar}/>
        <Route path='/tictactoe' element={<Tictactoe/>}/>
        <Route path='/electronics/headphones' element={<Headphones data = {landingPage.Headphones}/>}/>
        <Route path='/electronics/mobiles' element={<Mobiles data = {landingPage.Mobiles}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/buy-now/:itemType/:itemId' element={<Buy data = {landingPage.Headphones}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
