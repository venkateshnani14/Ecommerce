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
    const [cartItemsArray,setCartItemsArray] = useState([]);
    const callBack = (item)=>{
      const Arr = [...cartItemsArray,item]
      setCartItemsArray(Arr);
    }
    console.log(cartItemsArray);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home cart={cartItemsArray}/>} />
        <Route path='/tictactoe' element={<Tictactoe/>}/>
        <Route path='/electronics/headphones' element={<Headphones data = {landingPage.Headphones} cartItems={callBack}/>}/>
        <Route path='/electronics/mobiles' element={<Mobiles data = {landingPage.Mobiles} cartItems={callBack}/>}/>
        <Route path='/electronics/laptops' element={<Laptops data = {landingPage.Laptops} cartItems={callBack}/>}/>
        <Route path='/cart' element={<Cart cart={cartItemsArray}/>}/>
        <Route path='/slideshow' element={<Slideshow data={landingPage.Slides}/>} />
        <Route path='/buy-now/:itemType/:itemId' element={<Buy data = {landingPage} cart={cartItemsArray}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App
