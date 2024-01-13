import {React,useState} from 'react'
import {Menu} from 'antd';
import {Link, useNavigate } from 'react-router-dom';
import {MobileOutlined,ManOutlined,WomanOutlined,ShoppingCartOutlined,MenuOutlined} from '@ant-design/icons'
const Navbar = (props) => {
  const lengthy = props.cartItemsArray.length
  const navStyle = {textDecoration:'none',fontSize:'x-large',padding:"7px 20px"}
  const iconStyle = {fontSize:"26px"}
  const menTitle = <span>Men <ManOutlined style={iconStyle}/></span>
  const womenTitle = <span>Women <WomanOutlined style={iconStyle}/></span>
  const cartStyle = <span className='position-relative'><span className='fs-12 fs-sm-14 fs-md-16 fs-lg-18 fs-xl-20'>My cart </span><ShoppingCartOutlined style={iconStyle}/>
  <span className='position-absolute top-0 badge rounded-pill transalte-midde bg-primary start-100 font-size-sm '>{lengthy}</span>
  </span>
   const navigate = useNavigate();
   const onClick = ()=>{
   navigate('/cart');
  }
  return (
    <div className='mb-0 pb-0'>
      <Menu style={navStyle} className={props.marginStyle} mode='horizontal' placement="bottomLeft">
      <Menu.SubMenu id="fashionItem" style={navStyle}  key="fashion" title="Fashion" placement="bottomLeft">
        <Menu.SubMenu key="menSubmenu" to="fashion/men" title={menTitle}>
          <Menu.Item key="menUppers">
          <Link className='navLink' to="/fashion/shirts">Uppers</Link>
          </Menu.Item>
          <Menu.Item key="menLowers">
          <Link className='navLink' to="/fashion/pants">Lowers</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="women" title={womenTitle}>
          <Menu.Item>
            <Link className='navLink'>Skirts / Uppers</Link>
          </Menu.Item>
          <Menu.Item>
            <Link className='navLink'>Lowers</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

        <Menu.SubMenu id="electronicsItem" style={navStyle}  key="electronics" title="Electronics" placement="bottomLeft">
        <Menu.Item key="headphones">
          <Link className='navLink' to="/electronics/headphones">Headphones</Link>
        </Menu.Item>
        <Menu.Item key="mobiles">
          <Link className='navLink' to="/electronics/mobiles"><span>Mobiles <MobileOutlined /></span></Link>
        </Menu.Item>
        <Menu.Item key="laptops">
          <Link className='navLink' to="/electronics/laptops">Laptops</Link>
        </Menu.Item>
      </Menu.SubMenu>

        <Menu.SubMenu id="accessoriesItem" style={navStyle}  key="accessories" title="Accessories">
        <Menu.Item key="menAcc">
          <Link className='navLink' to="/submenu/child1">Men</Link>
        </Menu.Item>
        <Menu.Item key="womenAcc">
          <Link className='navLink' to="/submenu/child2">Women</Link>
        </Menu.Item>
        <Menu.Item key="unisexAcc">
          <Link className='navLink' to="/submenu/child2">Unisex</Link>
        </Menu.Item>
      </Menu.SubMenu>
        <Menu.SubMenu id="beautyItem" style={navStyle}  key="beauty" title="Beauty">
        <Menu.Item key="child1">
          <Link className='navLink' to="/beauty/facewash">Facial</Link>
        </Menu.Item>
        <Menu.Item key="child2">
          <Link className='navLink' to="/submenu/lotions">Bodycare</Link>
        </Menu.Item>
      </Menu.SubMenu>
    <Menu.SubMenu style={navStyle} key="cart" onTitleClick={onClick} title={cartStyle} to="/cart"></Menu.SubMenu>
      </Menu>
    </div>
  )
}

export default Navbar

