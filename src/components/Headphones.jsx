import  { React,useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router";
import Navbar from './Navbar'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { gsap } from "gsap"
import { BellOutlined,CopyrightTwoTone } from '@ant-design/icons'
export const Footer = ()=>{
  return(
    <>
    <div className="footer pb-0 mb-0 bg-dark d-flex justify-content-between align-items-center">
    <h5 id="feedback" className="h5Footer my-0 mx-5 pd-0">Give us your feeback and rate us!</h5>
    <h5 className="uniqueFooter my-0 mx-5 pd-0">Subscribe to us <BellOutlined style={{fontSize:"24px"}}/></h5>
</div>
    <div id="footerMain" class="pitchBlack_whiteText">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
      <ul class="footerList">
        <li class="about">About Us</li>
        <li class="call">Contact Us</li>
        <li class="warranty">Customer Support</li>
        <li class="warranty">FAQs</li>
      </ul>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
      <ul class="footerList">
        <li class="about">Shipping Information</li>
        <li class="call">Returns & Exchanges</li>
        <li class="warranty">Privacy Policy</li>
        <li className="warranty">Terms and Conditions</li>
      </ul>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
      <ul class="footerList">
        <li class="about">Track Your Order</li>
        <li class="call">My Account</li>
        <li class="warranty">Payment Options</li>
        <li class="warranty">Blog</li>
      </ul>
    </div>
  </div>
  <hr style={{borderColor:"darkslategrey"}} />
  <div className="d-flex justify-content-center pb-2">
    <img className="batmanLogo" src="../img/banners/me.png" alt="Thebatman" style={{height:"8em",width:"8.5em"}}/>
    <div className="d-flex align-items-center"><p className="text-center" style={{color:"grey",padding:"0px",margin:"0px"}}><span>©</span> The dark knights limited 2024</p>
</div>
  </div>
</div>
    </>
  )}
export const ComponentHeadphones = (props)=>{
    const nav = useNavigate();
  const [cartBtnState,setCartBtnState] = useState(()=>{
    const storedStyleRaw = localStorage.getItem(`btnStyle-${props.index}`)
    const storedStyleJson = storedStyleRaw ? JSON.parse(storedStyleRaw) : "btn btn-md btn-success"
    return storedStyleJson;

  })
              const [cartText,setCartText] = useState(()=>{
               const prevStoredTextRaw = localStorage.getItem(`btnText-${props.index}`)
               const textJson = prevStoredTextRaw ? JSON.parse(prevStoredTextRaw) : "Add to cart"
               return textJson
              });
              const cartBtn = ()=>{
                if(typeof props.cartItems==='function'){
                  props.cartItems(props.d.name);
                }
                setCartBtnState(()=>{
                 const newStyle = "btn btn-md btn-secondary btn-disabled"
                 localStorage.setItem(`btnStyle-${props.index}`,JSON.stringify(newStyle))
                 return newStyle 
                });
                setCartText(()=>{
                  const newState = "Added to cart"
                  localStorage.setItem(`btnText-${props.index}`,JSON.stringify(newState))
                  return newState
                });
            }

  const truncate = (description,max)=>{
    if(description.length>=max)return description.substring(0,max) + "...";
    else return description;
}
  return(
<div className='container col-lg-4 col-md-6 col-sm-12 mt-5 d-flex justify-content-center' key={props.index}>
        <div id="cardShadow" className="card shadow" style={{maxWidth:"25rem",margin:"0 3% 0 3%"}}>
        <img src={props.d.img} id="mobImg" className="card-img-top" alt="unavailable" style={{padding:"10px",maxWidth:"28rem"}} height="300px" onClick={()=>{nav(`/buy-now/${props.d.type}/${props.d.name}`)}}/>
        <div className="card-body">
        <hr/>
        <p className = 'font-weight-bold text-dark' style={{fontSize:"30px"}}>
          <p className = 'text-danger d-inline font-weight-light mr-2' style={{fontsize:"15px"}}>-{props.d.discount}</p>
          <sup className = 'd-inline font-weight-light text-dark'>₹</sup>{props.d.price}
        </p>
          <h5 className = "card-title">{truncate(props.d.title,50)}</h5>
          <p className = "card-text text-secondary"  style={{letterSpacing:"1px"}}>{truncate(props.d.description,100)}</p>
          <div className = 'd-flex justify-content-between'>
          <button className = "btn btn-md btn-dark ms-3" onClick={()=>{nav(`/buy-now/${props.d.type}/${props.d.name}`)}}>Buy now</button>
          <button className = {cartBtnState} onClick={cartBtn}>{cartText} <ShoppingCartOutlined /></button>
          </div>
        </div>
      </div>
        </div>
)}
const Headphones = ({data,cartItems,cartItemsArray}) => {
  const location = useLocation()
  useEffect(()=>{
    gsap.fromTo(".imgTextDiv",{opacity:0,y:100},{y:0,opacity:1,duration:1.5,ease:"power1"})
  },[location.pathname])
  const [textState,setTextState] = useState(()=>{
    const prevStored = localStorage.getItem('ClickMemory')
    if(prevStored)return prevStored
    else return "click me"
  })
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
    <h1 className='text-center mb-3 mt-0 display-4' style={{letterSpacing:"10px",fontWeight:"bold"}}>Custom picks made for you.</h1>
    <div className="d-flex justify-content-center mb-3">
    <p id='laptopCouponDescription' className='mb-0 font-size-lg mx-5 text-muted'  style={{letterSpacing:"2px"}}>Use coupon code <span id="laptopCouponCode" className='font-weight-bold text-success'>IMVENGEANCE</span> to avail discount of 20% on your first purchase.</p>
    </div>

    <div className='container-sm'>
        <div className='row mb-5'>
        {
        data?
        data.map((d,i)=>(
        <ComponentHeadphones index={i} d={d} cartItems={cartItems} />
    )):"Sorry..."}
        </div>
        <div className="container mb-5 pb-5">
        <h2 id="boseText" className="mb-5 display-4" style={{letterSpacing:"10px",textAlign:"center",fontWeight:"normal"}}>Know your listening style</h2>
      <img src="../img/banners/newbose.jpeg" height="100%" width="100%" alt="nothing" />
        </div>
        <Footer />
        </div>
    </div>
    </div>
  );
};
export default Headphones;
