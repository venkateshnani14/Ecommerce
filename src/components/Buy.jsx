import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router'
import {Footer as ImportedFooter} from './Headphones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar'
const Buy = (props) => {
  const {itemId,itemType} = useParams();
  useEffect(()=>{window.scrollTo(0,0)},[]);
  const capitalizefirstletter = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const capitalizedItemType = capitalizefirstletter(itemType);
  const truncate = (description)=>{
    if(description.length>=250)return description.substring(0,100) + "...";
    else return description;
}
  const buyImgStyle = {maxHeight:"60vh" , width:"40vw",mixBlendMode:"multiply",padding:"10% 5% 0% 5%"}
  const buySmallImgStyle = {maxHeight:"100%",maxWidth:"100%"}
    return (
      <div id="buyDiv">
        <Navbar marginStyle='bg-dark text-light mb-0' cartItemsArray={props.cartItemsArray} />
        {
          props.data[capitalizedItemType]?props.data[capitalizedItemType].map((d,i)=>{
            if(d.name!==itemId) return;
            else
              return(
               <div className='d-flex'>
                <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4' style={{overflow:"hidden"}}>
                  <img src={d.img} style={buyImgStyle} alt="nope" className='img-fluid' />
                </div>
                <div id="buyItemInfo" className='col-sm-12 col-md-4 col-lg-4' style={{overflow:"auto"}}>
                <h4>{d.title}</h4>
                  <hr/>
                  <div id='buyItem_saleBtn' className='my-2'><p className='p-1 mx-1 font-weight-bold'>Gamer's season sale</p></div>
                  <div className='d-flex'>
                    <p className='mr-3 text-danger mb-0 pb-0' style={{fontSize:"35px"}}>{d.discount}</p>
                  <p className='mb-0 pb-0' style={{fontSize:"35px"}}><sup>₹</sup>{d.price}</p>
                  </div>
                  <p className='text-muted m-0 p-0'>M.R.P.:<span id="buyItemPrice">₹12000</span></p>
                  <h5>About this item</h5>
                  <p className='text-grey'>{d.description}</p>
                  <div>
                    <div id="buyItem_itemColor">
                      <span className='d-flex mb-0 pb-0'><p className='text-muted mb-0 pb-0'>Color:</p> <span className='mx-3 mb-0 pb-0'>Dynamic value</span></span>
                    </div>
                    <hr/>
                    <div id="buyItem_itemsColorList" style={{overflow:"hidden"}}>
                    <div className='d-flex py-2' style={{overflow:"hidden"}}>
                      <div className='row' style={{overflow:"hidden"}}>
                      <div className='col-sm-12 col-md-6 col-lg-3' style={{overflow:"hidden"}}><p className='m-0 p-0 text-muted img-fluid'>White</p><img src={d.img} style={buySmallImgStyle} alt="none" height="80px" width="100px" className='mr-4'/></div>
                      <div className='col-sm-12 col-md-6 col-lg-3'><p className='m-0 p-0 text-muted img-fluid'>Light Grey</p><img src={d.img} style={buySmallImgStyle} alt="none" className='mr-4' height="80px" width="100px" /></div>
                      <div className='col-sm-12 col-md-6 col-lg-3'><p className='m-0 p-0 text-muted img-fluid'>Ivory white</p><img src={d.img} style={buySmallImgStyle} alt="none" height="80px" width="100px" className='mr-4'/></div>
                      <div className='col-sm-12 col-md-6 col-lg-3'><p className='m-0 p-0 text-muted img-fluid'>Dark knight</p><img src={d.img} style={buySmallImgStyle} alt="none" height="80px" width="100px" className='mr-4'/></div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div id="buyItemDeliveryInfo" className='col-sm-12 col-md-6 col-lg-4' style={{overflowY:"hidden"}}>
                <h4 className='mb-0 pb-0 mt-2' style={{fontSize:"35px"}}><sup>₹</sup>{d.price}</h4>
                <p><span className='buyNowHighlights'>Free Delivery</span>, order within 30mins and get it in 4 days from the date of order.</p>
                  <p><FontAwesomeIcon icon="fa-solid fa-location-dot" />Delivering to Knights residency,phase-6,hitech-city,hyderabad,telangana,500055</p>
                  <span className='display-4 display-lg-2 text-success'>In stock</span>
                  <div className='mt-0 pt-4'>
                    <p className='m-0 pd-0'>Shipped from : <span className="buyNowHighlights" >Gotham</span></p>
                    <p>Sold by : <span className="buyNowHighlights">Wayne enterprises</span></p>
                  </div>
                  <div id='buyBtnDiv' className='d-flex flex-column'>
                    <button id='buyBtnOne' className='btn btn-lg mb-2'><span className='px-3'>Add to cart</span></button>
                    <button id='buyBtnTwo' className='btn btn-lg'><span className='px-3'>Buy now</span></button>
                  </div>
                </div>
                </div>
                </div>
              )}):"Item doesn't exist"}
              <ImportedFooter/>
      </div>
      
    )
}

export default Buy
