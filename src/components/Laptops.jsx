import {React,useState,useEffect} from 'react'
import Navbar from './Navbar'
import {Footer as ImportedFooter} from './Headphones'
import { useNavigate } from 'react-router'
import { gsap } from "gsap"
import {ShoppingCartOutlined} from '@ant-design/icons'

export const CardItem = (props)=>{
    console.log(props.cartItemsArray)
    let nav  = useNavigate();
    const [cartBtnState,setCartBtnState] = useState(()=>{
        const storedStyleRaw = sessionStorage.getItem(`mobBtnStyle-${props.index}`)
        const storedStyleJson = storedStyleRaw ? JSON.parse(storedStyleRaw) : "btn btn-primary btn-danger btn-md"
        return storedStyleJson
      });
    const [cartText,setCartText] = useState(()=>{
        const storedRaw = sessionStorage.getItem(`mobBtnText-${props.index}`)
        const btnText = storedRaw ? JSON.parse(storedRaw) : "Add to cart"
        return btnText
      })
    const cartBtn = ()=>{
          props.cartItems(props.d.name)
          setCartBtnState(()=>{
            const storedStyle = "btn btn-disabled btn-secondary btn-md"
            sessionStorage.setItem(`mobBtnStyle-${props.index}`,JSON.stringify(storedStyle))
            return storedStyle
          });
        setCartText(()=>{
            const storedText = "Added to cart"
            sessionStorage.setItem(`mobBtnText-${props.index}`,JSON.stringify(storedText))
            return storedText
          })
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
    <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}><p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>{props.d.discount}  </p><sup className='d-inline font-weight-light text-dark'>₹</sup>{props.d.price}</p>
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
  useEffect(()=>{
    gsap.fromTo("#laptopHead_lg",{opacity:0,y:100},{y:0,opacity:1,duration:1.5,ease:"power1"})
    gsap.fromTo("#laptopCouponDescription",{opacity:0,y:100},{y:0,opacity:1,duration:1.5,ease:"power1"})
  },[])
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
        <CardItem index={i} d={d} cartItemsArray={cartItemsArray} cartItems={cartItems}/>
    )):"Oops...No data found"}
        </div>
    </div>
   </div>
   <ImportedFooter/>
   </div>
)}
export default Laptops


