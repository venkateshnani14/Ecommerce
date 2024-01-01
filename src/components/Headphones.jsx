import React from "react";
import { useNavigate } from "react-router";
import Navbar from './Navbar'
import { ShoppingCartOutlined } from '@ant-design/icons'
const Headphones = (props) => {
  const truncate = (description,lengthy)=>{
    if(description.length>=lengthy)return description.substring(0,100) + "...";
    else return description;
}
const nav = useNavigate();

  return (
    <div style={{background:"whitesmoke"}}>
      <Navbar marginStyle='bg-dark text-light mb-5'/>
      <div>
    <h1 className='text-center mb-5 mt-0 text-secondary'>Take a look at our audio products exclusively picked for your listening style.</h1>
    <div className='container'>
        <div className='row'>
        {props.data?
        props.data.map((d,i)=>(
        <div className='container-lg m-5' key={i}>
            <div className="card shadow" style={{width:"17rem"}}>
        <img src={d.img} className="card-img-top" alt="unavailable" style={{padding:"5px"}} height="300px" />
        <div className="card-body">
          <h5 className="card-title">{truncate(d.title,70)}</h5>
          <p className="card-text text-secondary">{truncate(d.description,100)}</p>
          <div className='d-flex justify-content-between'>
          <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${d.type}/${d.name}`)}}>Buy now</button>
          <a href="#asdf" className="btn btn-md btn-secondary">Add to cart <ShoppingCartOutlined /></a>
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
