import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css"
 const Navbar = () => {
    return (
      <div>
        <nav className="navy">
        <div className='nav__left'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png' />
    
        </div>
    
        <div className='nav__mid'>
          <div className='nav__search hello'>
            <i className="material-icons">search</i>
            <input type='text' placeholder="Search Facebook" />
          </div>
    
        </div>
    
        <div className="nav__right">
        <Link to={"/"} className='icon'>
            <i className='material-icons'>home</i>
            </Link>
            <Link to={"/mypage"} className="avatar">
            <img className='avatar__img'
              src='https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950' />
          </Link>
          <div className="buttons">
          <Link to={"/upload"}><i className='material-icons'>add</i></Link>
            <a href="#"><i className='material-icons'>notifications</i></a>
          </div>
        </div>
        
      </nav>
      <Outlet/>
      </div>
    )
}
export default Navbar;