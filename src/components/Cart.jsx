import React, { useEffect,useState } from 'react'
import {animated,useSpring} from '@react-spring/web'
import Slideshow from './Slideshow'

const CartList = ({element})=>{
  let imgDivStyle = {}
  const laptopImgDivStyle = {
    height:"150px",
    width:"200px",
    padding:"10px",
    mixBlendMode:"multiply"
  }
  const normalImgDivStyle = {
    height:"150px",
    width:"150px",
    padding:"10px",
    mixBlendMode:"multiply"
  }
  if(element.type==="laptops"){imgDivStyle = laptopImgDivStyle}
  else{imgDivStyle=normalImgDivStyle}
  return(  
   <div>
    <hr/>
    <div className="d-flex justify-content-start ">
   <div style={imgDivStyle}>
     <img src={element.img} height='100%' width='100%' alt="nothing"/>
    </div>
    <div className='d-flex justify-content-center flex-column'>
      <h6 className='mb-2'>{element.title}</h6>
      <p style={{fontWeight:"bolder"}} className='text-success mb-2'><sup>₹</sup>{element.price}</p>
      <button className='btn btn-outline-dark mt-0 px-0' style={{width:"140px"}}>Order Now</button>
    </div>
   </div>
   </div>
  )
}

const Cart = ({cartItemsArray,unsortedData}) => {
  const arr = [];
  for(let i=0;i<cartItemsArray.length;i++){
    unsortedData.forEach((element)=>{
      if(cartItemsArray[i]===element.name)arr.push(<CartList key={i} element = {element}/>)
    })
  }
  console.log(arr)
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <div className='d-flex align-items-center justify-content-between flex-column my-3 bg-light'>
        <div><h1>My cart</h1><hr className='cartHr'/></div>
        <h4 className='my-3'>{arr.length>0?"Hey venkatesh,items in your cart are waitin' to hop into your bag🥺":<h2 className='text-center pb-4'>No items in the cart</h2>}</h4>
        </div>
        <div className='container'>
          {arr.length>0?arr:""}
        </div>
    </div>
  )
}

export default Cart
