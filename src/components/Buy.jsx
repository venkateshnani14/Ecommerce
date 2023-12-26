import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'
const Buy = (props) => {
  const headphonesData = props.Headphones
  const {itemId,itemType} = useParams();
  // useEffect(()=>{setPage(headphonesData)},[headphonesData]);
  const truncate = (description)=>{
    if(description.length>=100)return description.substring(0,100) + "...";
    else return description;
}
    return (
      <div>
        <Navbar />
        {
          props.data?props.data.map((d,i)=>{
            if(d.name!==itemId) return;
            else
              return(
                <>
                <div className='container-lg m-5' key={i}>
                <h5 className='text-secondary'>Good pick Venkatesh,<h6 ><h5 className='text-success my-0'>{d.title}</h5> is a great choice venkatesh.</h6>
</h5>
                <div className="card shadow" style={{width:"17rem"}}>
                <img src={d.img} className="card-img-top" alt="..." style={{padding:"25px"}} height="300px" />
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text text-secondary">{truncate(d.description)}</p>
                  <div className='d-flex justify-content-between'>
                  <button className="btn btn-md btn-success ms-3" onClick={()=>{}}>Order now</button>
                  <a href="#asdf" className="btn btn-md btn-secondary">Add to cart</a>
                  </div>
                </div>
              </div>
                </div>
                </>
              )
            }):"Sorry..."
        }
      </div>
    )
}

export default Buy
