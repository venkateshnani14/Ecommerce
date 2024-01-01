import { React} from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import { ShoppingCartOutlined } from '@ant-design/icons'
const Mobiles = (props)=>{
const truncate = (description)=>{
        if(description.length>=100)return description.substring(0,100) + "...";
        else return description;
    }
    let nav  = useNavigate();
return(
   <div style={{background:"whitesmoke"}}>
    <Navbar marginStyle='bg-dark text-light mb-5'/>
    <h1 className='text-center mt-0 text-secondary'>Explore our latest smartphone launches and avail best deals & discounts.</h1>
    <div className='container-sm'>
        <div className='row'>
        {props.data?
        props.data.map((d,i)=>(
        <div className='container-lg m-5 col-lg-3 col-md-4 col-sm-6' key={i}>
            <div className="card shadow" style={{width:"20rem"}}>
        <img src={d.img} className="card-img-top" alt="..." style={{padding:"25px"}} maxheight="400px" />
        <div className="card-body" style={{}}>
          <h5 className="card-title">{truncate(d.title)}</h5>
          <p className="card-text text-secondary">{truncate(d.description)}</p>
          <div className='d-flex justify-content-between'>
          <button className="btn btn-md btn-success ms-3" onClick={()=>{nav(`/buy-now/${d.type}/${d.name}`)}}>Get this</button>
          <a href="#asdf" className="btn btn-md btn-secondary">Add to cart <ShoppingCartOutlined /></a>
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