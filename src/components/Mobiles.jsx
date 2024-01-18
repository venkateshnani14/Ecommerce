import { React,useState} from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import {Footer as ImportedFooter} from './Headphones'
import { ShoppingCartOutlined } from '@ant-design/icons'
const MobileItems = (props)=>{
  const truncate = (description,max)=>{
    if(description.length>=max)return description.substring(0,max) + "...";
    else return description;
}
let nav  = useNavigate();
const [cartText,setCartText] = useState(()=>{
  const storedRaw = localStorage.getItem(`mobBtnText-${props.index}`)
  const btnText = storedRaw ? JSON.parse(storedRaw) : "Add to cart"
  return btnText
})
const [btnStyle,setBtnStyle] = useState(()=>{
  const storedStyleRaw = localStorage.getItem(`mobBtnStyle-${props.index}`)
  const storedStyleJson = storedStyleRaw ? JSON.parse(storedStyleRaw) : "btn btn-primary btn-danger btn-md"
  return storedStyleJson
});
const cartBtn = ()=>{
  props.cartItems(props.d.name)
  setBtnStyle(()=>{
    const storedStyle = "btn btn-disabled btn-secondary btn-md"
    localStorage.setItem(`mobBtnStyle-${props.index}`,JSON.stringify(storedStyle))
    return storedStyle
  })
  setCartText(()=>{
    const storedText = "Added to cart"
    localStorage.setItem(`mobBtnText-${props.index}`,JSON.stringify(storedText))
    return storedText
  })
}
return(
  <div id="mobileDiv" className='container col-lg-4 col-md-6 col-sm-12 mt-5 d-flex justify-content-center' key={props.key}>
      <div id="mobileDivChild" className="card shadow d-flex align-items-center" style={{maxWidth:"25rem",minWidth:"15em",margin:"0px 3% 0px 3%"}}>
  <img id="mobileImg" src={props.d.img} className="card-img-top" alt="..." style={{maxWidth:"28rem",padding:"18px"}}/>
  <div className="card-body">
    <hr/>
    <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}><p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>-33%  </p><sup className='d-inline font-weight-light text-dark'>₹</sup>{props.d.price}</p>
    <h5 className="card-title">{truncate(props.d.title,50)}</h5>
    <p className="card-text text-secondary">{truncate(props.d.description,100)}</p>
    <div className='d-flex justify-content-between'>
    <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${props.d.type}/${props.d.name}`)}}>Get this</button>
    <button className={btnStyle} onClick={cartBtn}>{cartText}<ShoppingCartOutlined /></button>
    </div>
  </div>
</div>
  </div>
)
}
const Mobiles = ({data,cartItems,cartItemsArray})=>{
return(
   <div id='mainMobileDiv' style={{background:"whitesmoke"}}>
    <Navbar marginStyle='bg-secondary text-light mb-5' cartItemsArray={cartItemsArray}/>
    <h1 className='text-center mt-0 text-secondary'>Explore our latest smartphone launches and avail best deals & discounts.</h1>
    <p id='laptopCouponDescription' className='mb-0 font-size-lg mx-5 text-muted'>Use coupon code <span id="laptopCouponCode" className='font-weight-bold text-success'>IMVENGEANCE</span> to avail discount of 20% on your first purchase.</p>
    <div className="container-sm">
      <div className="row">
      {data?data.map((d,i)=>(
      <MobileItems d={d} index={i} cartItems={cartItems} />
    )):"Nothing here"}
      </div>
    </div>
    <ImportedFooter/>
   </div>
)
}
export default Mobiles;