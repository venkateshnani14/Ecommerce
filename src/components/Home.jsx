import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import data from '../data/data.json'
const Home = (props) => {
  return (
    <div>
     <Navbar marginStyle='bg-dark text-light mb-0' cart={props.cart} />
     <Slideshow data={data.Slides} />
    </div>
  )
}

export default Home
