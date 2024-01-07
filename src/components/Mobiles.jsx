import { React} from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import { ShoppingCartOutlined } from '@ant-design/icons'
const Mobiles = (props)=>{
const truncate = (description,max)=>{
        if(description.length>=max)return description.substring(0,max) + "...";
        else return description;
    }
    let nav  = useNavigate();
return(
   <div style={{background:"whitesmoke"}}>
    <Navbar Style='bg-dark text-light mb-5'/>
    <h1 className='text-center mt-0 text-secondary'>Explore our latest smartphone launches and avail best deals & discounts.</h1>
    <div className='container-sm'>
        <div className='row'>
        {props.data?
        props.data.map((d,i)=>(
        <div id="mobileDiv" className='container-lg m-5 col-lg-3 col-md-4 col-sm-6' key={i}>
            <div id="mobileDivChild" className="card shadow" style={{width:"26rem"}}>
        <img id="mobileImg" src={d.img} className="card-img-top" alt="..." style={{padding:"auto"}}/>
        <div className="card-body" style={{}}>
          <hr/>
          <p className='font-weight-bold text-dark' style={{fontSize:"30px"}}><p className='text-danger d-inline font-weight-light' style={{fontsize:"15px"}}>-33%  </p><sup className='d-inline font-weight-light text-dark'>₹</sup>{d.price}</p>
          <h5 className="card-title">{truncate(d.title,50)}</h5>
          <p className="card-text text-secondary">{truncate(d.description,100)}</p>
          <div className='d-flex justify-content-between'>
          <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${d.type}/${d.name}`)}}>Get this</button>
          <button className="btn btn-md btn-secondary">Add to cart <ShoppingCartOutlined /></button>
          </div>
        </div>
      </div>
        </div>
    )):"Sorry..."}
        </div>
    </div>
   </div>
)
}
export default Mobiles;