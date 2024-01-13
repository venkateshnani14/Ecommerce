import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import data from '../data/data.json'
const Home = ({cartItemsArray}) => {
  return (
    <div>
     <Navbar cartItemsArray={cartItemsArray} marginStyle='bg-dark text-light mb-0' />
     <Slideshow data={data.Slides} />
    </div>
  )
}

export default Home
