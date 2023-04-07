import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
import Logo from "../asset/logo.png"

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <header>
      <nav  className='navbar'>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo_image" /></Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className='nav-link'>Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/" className='nav-link'>Pricing</Link>
          </li>

          <li className="nav-item">
            <Link to="/" className='nav-link'>FAQ</Link>
          </li>

          <li className="nav-item">
            <Link to="/" className='nav-link'>Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20}  style={{color:" #FFFFFF"}}/>) : (<FaBars  size={20} style={{color:" #FFFFFF"}}/>)}          
        </div>
      </nav>
    </header>
  )
}

export default Navbar