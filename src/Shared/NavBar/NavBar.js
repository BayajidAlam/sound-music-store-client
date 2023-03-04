import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.webp';
import './NavBar.css';

const NavBar = () => {
  
  // menu items for all 
  const menuItems = <React.Fragment>
    <li className="li-style"><Link className="font-bold ">Home</Link></li>
    <li className="li-style"><Link className="font-bold">About Us</Link></li>
    <li className="li-style"><Link className="font-bold">Blogs</Link></li>
  </React.Fragment>


  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
              {menuItems}
          </ul>
        </div>
        <Link to='/'>
          <img className="lg:h-16 md:h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
};

export default NavBar;
