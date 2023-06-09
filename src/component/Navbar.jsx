import React, { useState } from 'react';
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Button from '../hooks/Button';
import logo from "../images/logo.png";


const Navbar = () => {
  let links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Client", link: "/client"},
    {name: "Our Work", link: "/work"},
    {name: "Contact", link: "/contact"},

  ]
  let activeStyle = {
    color: "#FF9F1C",
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-3 ">
      <div className="md:flex md:items-center md:justify-between bg-white py-6">
        <div>
          <img src={logo} alt="" />
        </div>
        <div
          className="text-3xl absolute right-8 md:right-64 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open ? <IoMenuOutline /> : <IoClose />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-50 bg-white w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 my-7 md:my-0 text-xl">
              <NavLink
                to={link.link}
                className="text-gray-500 hover:text-primary font-normal duration-500 cursor-pointer"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.name}
              </NavLink>
              
            </li>
          ))}
          <Button className="md:ml-8">Signup</Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar