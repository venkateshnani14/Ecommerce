import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router'
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
    return (
      <div>
        <Navbar />
        {
          props.data[capitalizedItemType]?props.data[capitalizedItemType].map((d,i)=>{
            if(d.name!==itemId) return;
            else
              return(
                <div className='container-lg' key={`div-${i}`}>
                <div className='d-flex my-0 flex-column align-items-center'>
                <h5 className='text-secondary mt-0 mb-4'>Nice pick Venkatesh,<span className='text-success my-0'>{d.id}</span> is a good one.</h5>
                <div id='buyItem' className="card shadow">
                <img id='buyItem_img' src={d.img} className="card-img-top" alt="unavailable" style={{padding:"25px"}} onError={(e)=>{console.error("failed to load",e.message,d.img)}} />
                <div className="card-body" key={`card-${i}`}>
                  <h5 className="card-title">{d.title}</h5>
                  <hr/>
                  <p className='font-weight-bold display-sm-5 display-4 text-danger'><sup className='font-weight-light text-dark'>₹</sup>{d.price}</p>
                  <p className="card-text text-secondary">{truncate(d.description)}</p>
                  <div className='d-flex justify-content-around'>
                  <button className="btn btn-lg btn-success ms-3" onClick={()=>{}}>Order now</button>
                  <button className="btn btn-lg btn-secondary">Add to cart</button>
                  </div>
                </div>
              </div>
                </div>
              </div>
              )}):"Nothing"}
      </div>
    )
}

export default Buy
