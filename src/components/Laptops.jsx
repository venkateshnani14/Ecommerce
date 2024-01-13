import {React,useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import {ShoppingCartOutlined} from '@ant-design/icons'

export const CardItem = (props)=>{
    console.log(props.cartItemsArray)
    let nav  = useNavigate();
    const [cartBtnState,setCartBtnState] = useState("btn btn-md btn-danger");
    const [cartText,setCartText] = useState("Add to cart");
    const cartBtn = ()=>{
          props.cartItems(props.d.name)
        setCartBtnState("btn btn-md btn-secondary btn-disabled");
        setCartText("Added to cart");
    }
    const truncate = (description,length)=>{
        if(description && description.length>=length)return description.substring(0,length) + "...";
        else return description;
    }
    return(
    <div id='maindiv' className='container col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={props.i} style={{}}>
    <div className="card shadow d-flex flex-column align-items-center" style={{maxwidth:"25rem",margin:"0px 3% 0px 3%"}}>
    <img id="laptopImg" src={props.d.img} className="card-img-top" alt="..." style={{maxWidth:"28rem"}} />
    <div className="card-body">
    <hr/>
    <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}><p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>-33%  </p><sup className='d-inline font-weight-light text-dark'>₹</sup>{props.d.price}</p>
      <h5 className="card-title">{truncate(props.d.title,125)}</h5>
      <p className="card-text text-secondary">{truncate(props.d.description,200)}</p>
      <div className='d-flex justify-content-between'>
      <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${props.d.type}/${props.d.name}`)}}> Get this </button>
      <button className={cartBtnState} onClick={cartBtn}>{cartText} <ShoppingCartOutlined /></button>
      </div>
    </div>
  </div>
    </div>
    )
}

const Laptops = ({data,cartItems,cartItemsArray}) => {
return(
   <div>
    <div style={{background:"whitesmoke"}}>
    <Navbar marginStyle='bg-secondary text-light mb-5' cartItemsArray={cartItemsArray}/>
    <h1 id='laptopHead_lg' className='text-center mt-0 text-secondary'>Explore our latest laptop launches and grab awesome deals before the season ends.</h1>
    <h4 id='laptopHead_sm' className='text-center mt-0 text-secondary'>Explore our latest laptop launches and grab awesome deals before the season ends.</h4>
    <p id='laptopCouponDescription' className='mb-0 font-size-lg mx-5 text-muted'>Use coupon code <span id="laptopCouponCode" className='font-weight-bold text-success'>IMVENGEANCE</span> to avail discount of 20% on your first purchase.</p>
    <div className='container-sm'>
        <div className='row'>
        {data?data.map((d,i)=>(
        <CardItem key={i} d={d} cartItemsArray={cartItemsArray} cartItems={cartItems}/>
    )):"Oops...No data found"}
        </div>
    </div>
    <div className='d-flex justify-content-between mx-5 pt-5 pb-3'>
        <button className='btn btn-primary btn-md'>Previous</button>
        <button className='btn btn-primary btn-md'>More</button>
    </div>
   </div>
   </div>
)}
export default Laptops


