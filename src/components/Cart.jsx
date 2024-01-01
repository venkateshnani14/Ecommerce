import React, { useEffect,useState } from 'react'
import {animated,useSpring} from '@react-spring/web'
import Slideshow from './Slideshow'

const Cart = (actualData) => {
  const spring = useSpring({from:{x:0},to:{x:100}})
  return (
    <div>
      <h3 className='text-secondary d-inline' style={{...spring}}>Cart is empty</h3>
    </div>
  )
}

export default Cart
