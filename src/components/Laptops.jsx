import {React,useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
import {ShoppingCartOutlined} from '@ant-design/icons'
export const CardItem = (d,i)=>{
    let nav  = useNavigate();
    const [cartBtnState,setCartBtnState] = useState("btn btn-md btn-danger");
    const [cartText,setCartText] = useState("Add to cart");
    const cartBtn = ()=>{
            setCartBtnState("btn btn-md btn-secondary btn-disabled");
            setCartText("Added to cart");
    }
    const truncate = (description,length)=>{
        if(description && description.length>=length)return description.substring(0,length) + "...";
        else return description;
    }
    return(
    <div id='maindiv' className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-5' key={i}>
    <div className="card shadow" style={{maxwidth:"25rem"}}>
    <img src={d.img} className="card-img-top" alt="..." height="300px" style={{maxWidth:"28rem"}} />
    <div className="card-body">
    <hr/>
    <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}><p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>-33%  </p><sup className='d-inline font-weight-light text-dark'>₹</sup>{d.price}</p>
      <h5 className="card-title">{truncate(d.title,125)}</h5>
      <p className="card-text text-secondary">{truncate(d.description,200)}</p>
      <div className='d-flex justify-content-between'>
      <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${d.type}/${d.name}`)}}>Get this</button>
      <button className={cartBtnState} onClick={cartBtn}>{cartText} <ShoppingCartOutlined /></button>
      </div>
    </div>
  </div>
    </div>
    )
}
const Laptops = (props) => {
return(
   <div>
    <div style={{background:"whitesmoke"}}>
    <Navbar/>
    <h1 className='text-center mt-0 text-secondary'>Explore our latest laptop launches and grab awesome deals before the season ends.</h1>
    <div className='container-sm'>
        <div className='row'>
        {props.data?props.data.map((d,i)=>(
        <CardItem key={i} {...d}/>
    )):"Sorry..."}
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


