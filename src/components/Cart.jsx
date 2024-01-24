import React, { useEffect,useState } from 'react'
import {animated,useSpring} from '@react-spring/web'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Slideshow from './Slideshow'

const CartList = ({element,index})=>{
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
      <div className='d-flex align-items-center'>
        <div id='cartNumberDiv' className='text-light bg-dark rounded'><p className='pt-3' style={{fontSize:"large"}}>{index+1}</p></div>
      </div>
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
      if(cartItemsArray[i]===element.name)arr.push(<CartList index={i} element = {element}/>)
    })
  }
  
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <div className='d-flex align-items-center justify-content-between flex-column mb-3 bg-light'>
        <div className='bg-dark' style={{width:"100vw"}}><h1 className='text-center pt-4 text-light'>My cart <ShoppingCartOutlined className='text-success'/></h1><hr className='cartHr'/></div>
        <h4 className='my-3'>{arr.length>0?"Hey venkatesh,can you please take us with you??🥺":<h2 className='text-center text-muted pb-4 pt-3'>Your cart is empty.</h2>}</h4>
        </div>
        <div className='container'>
          {arr.length>0?arr:""}
        </div>
    </div>
  )
}

export default Cart
