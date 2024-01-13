import React, { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router";
import Navbar from './Navbar'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { gsap } from "gsap"
export const ComponentHeadphones = (props)=>{
    const nav = useNavigate();
  const [cartBtnState,setCartBtnState] = useState("btn btn-md btn-danger");
              const [cartText,setCartText] = useState("Add to cart");
              const cartBtn = ()=>{
                if(typeof props.cartItems==='function'){
                  props.cartItems(props.d.name);
                }
                setCartBtnState("btn btn-md btn-secondary btn-disabled");
                setCartText("Added to cart");
            }
  const truncate = (description,max)=>{
    if(description.length>=max)return description.substring(0,max) + "...";
    else return description;
}
  return(
<div className='container col-lg-3 col-md-4 col-sm-6 mt-5 d-flex justify-content-center' key={props.i}>
        <div id="cardShadow" className="card shadow" style={{maxWidth:"25rem",margin:"0 3% 0 3%"}}>
        <img src={props.d.img} className="card-img-top" alt="unavailable" style={{padding:"10px",maxWidth:"28rem"}} height="300px"/>
        <div className="card-body">
        <hr/>
        <p className = 'font-weight-bold text-dark' style={{fontSize:"30px"}}>
          <p className = 'text-danger d-inline font-weight-light mr-2' style={{fontsize:"15px"}}>-{props.d.discount}</p>
          <sup className = 'd-inline font-weight-light text-dark'>₹</sup>{props.d.price}
        </p>
          <h5 className = "card-title">{truncate(props.d.title,50)}</h5>
          <p className = "card-text text-secondary"  style={{letterSpacing:"1px"}}>{truncate(props.d.description,100)}</p>
          <div className = 'd-flex justify-content-between'>
          <button className = "btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${props.d.type}/${props.d.name}`)}}>Buy now</button>
          <button className = {cartBtnState} onClick={cartBtn}>{cartText} <ShoppingCartOutlined /></button>
          </div>
        </div>
      </div>
        </div>
)}
const Headphones = ({data,cartItems,cartItemsArray}) => {
  const location = useLocation()
  useEffect(()=>{
    gsap.fromTo(".imgTextDiv",{opacity:0,y:100},{y:0,opacity:100,duration:1.5,ease:"power1"})
  },[location.pathname])
  return (
    <div className="mb-0" style={{background:"whitesmoke",overflowX:"hidden"}}>
      <Navbar marginStyle='pitchBlack_whiteText' cartItemsArray={cartItemsArray}/>
      <div>
      <div id="bgStyle" className="mb-5">
      <div className="imgTextDiv">
      <div className="pl-5 pt-5">
      <p style={{fontWeight:"bolder"}} className="text-white display-4">TRUE WIRELESS</p>
        <h2 className="text-white fw-bold">BLUETOOTH® EARBUDS</h2>
        <p className="text-white fw-bold text-lg"  style={{letterSpacing:"2px"}}>Discover the best wireless earbuds from the experts at getting big sound from small things.</p>
      </div>
      </div>
      </div>
    <h1 className='text-center mb-3 mt-0' style={{letterSpacing:"10px"}}>Custom picks made for you.</h1>
    <div className="d-flex justify-content-center mb-3">
    <p id='laptopCouponDescription' className='mb-0 font-size-lg mx-5 text-muted'  style={{letterSpacing:"2px"}}>Use coupon code <span id="laptopCouponCode" className='font-weight-bold text-success'>IMVENGEANCE</span> to avail discount of 20% on your first purchase.</p>
    </div>
    <div className='container-sm'>
        <div className='row'>
        {
        data?
        data.map((d,i)=>(
        <ComponentHeadphones key={i} d={d} cartItems={cartItems} />
    )):"Sorry..."}
        </div>
        </div>
    </div>
    </div>
  );
};
export default Headphones;
