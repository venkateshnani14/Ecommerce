import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from './Navbar'
import { ShoppingCartOutlined } from '@ant-design/icons'
const Headphones = ({data,cartItems}) => {
  const nav = useNavigate();
  const [cartBtnState,setCartBtnState] = useState("btn btn-md btn-danger");
              const [cartText,setCartText] = useState("Add to cart");
              const cartBtn = ()=>{
                setCartBtnState("btn btn-md btn-secondary btn-disabled");
                setCartText("Added to cart");
            }
  const truncate = (description,max)=>{
    if(description.length>=max)return description.substring(0,max) + "...";
    else return description;
}
  return (
    <div style={{background:"whitesmoke"}}>
      <Navbar marginStyle='bg-dark text-light mb-5'/>
      <div>
    <h1 className='text-center mb-3 mt-0 text-secondary'>Take a look at our audio products exclusively picked for your listening style.</h1>
    <div className="d-flex justify-content-center mb-3">
    <p id='laptopCouponDescription' className='mb-0 font-size-lg mx-5 text-muted'>Use coupon code <span id="laptopCouponCode" className='font-weight-bold text-success'>IMVENGEANCE</span> to avail discount of 20% on your first purchase.</p>
    </div>
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
        {
        data?
        data.map((d,i)=>(
        <div className='container col-lg-3 col-md-4 col-sm-6 m-5' key={i}>
            <div className="card shadow" style={{width:"25rem"}}>
        <img src={d.img} className="card-img-top" alt="unavailable" style={{padding:"10px"}} height="300px"/>
        <div className="card-body">
          <hr/>
        <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}>
          <p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>-{d.discount}  </p>
          <sup className='d-inline font-weight-light text-dark'>₹</sup>{d.price}
        </p>
          <h5 className="card-title">{truncate(d.title,50)}</h5>
          <p className="card-text text-secondary">{truncate(d.description,100)}</p>
          <div className='d-flex justify-content-between'>
          <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${d.type}/${d.name}`)}}>Buy now</button>
          <button className={cartBtnState} onClick={()=>{
            cartItems(d.name)
            cartBtn()
          }}>{cartText} <ShoppingCartOutlined /></button>
          </div>
        </div>
      </div>
        </div>
    )):"Sorry..."}
        </div>
        </div>
    </div>
    </div>
  );
};

export default Headphones;
