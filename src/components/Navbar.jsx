import React from 'react'
import {Menu} from 'antd';
import {Link, useNavigate } from 'react-router-dom';
import {MobileOutlined,ManOutlined,WomanOutlined,ShoppingCartOutlined,MenuOutlined} from '@ant-design/icons'
const Homepage = () => {
  const navStyle = {textDecoration:'none',fontSize:'x-large',padding:"7px 20px"}
  const iconStyle = {fontSize:"18px"}
  const menTitle = <span>Men <ManOutlined style={iconStyle}/></span>
  const womenTitle = <span>Women <WomanOutlined style={iconStyle}/></span>
  const cartStyle = <span>My cart <ShoppingCartOutlined style={iconStyle}/></span>
   const navigate = useNavigate();
   const onClick = ()=>{
   navigate('/cart');
  }
  return (
    <div>
      <Menu style={navStyle} className='bg-primary text-light mb-5' mode='horizontal'>
      <Menu.SubMenu style={navStyle}  key="fashion" title="Fashion">
        <Menu.SubMenu key="men" to="fashion/men" title={menTitle}>
          <Menu.Item key="men">
          <Link className='navLink' to="/fashion/shirts">Uppers</Link>
          </Menu.Item>
          <Menu.Item key="men">
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

        <Menu.SubMenu style={navStyle}  key="electronics" title="Electronics">
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

        <Menu.SubMenu style={navStyle}  key="accessories" title="Accessories">
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
        <Menu.SubMenu style={navStyle}  key="beauty" title="Beauty">
        <Menu.Item key="child1">
          <Link className='navLink' to="/beauty/facewash">Facial</Link>
        </Menu.Item>
        <Menu.Item key="child2">
          <Link className='navLink' to="/submenu/lotions">Bodycare</Link>
        </Menu.Item>
      </Menu.SubMenu>
    <Menu.SubMenu style={navStyle} onTitleClick={onClick} title={cartStyle} to="/cart"></Menu.SubMenu>
      </Menu>
      <div className="custom-collapse-btn">
          <MenuOutlined style={{ fontSize: '18px', color: '#ffff' }} />
      </div>
    </div>
  )
}

export default Homepage

