import React,{ useContext } from 'react'
import "../Navbar/Navbar.css"
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import {CounterContex} from '../App'

function Navbar() {    
    const Counter = useContext(CounterContex)
    return (
        <>
            <section id="navbar">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-10 col-md-11 col-sm-12 col-12 p-4 me-0 ">
                            <span className='contact' ><PhoneIcon /> +44 0161 408 0044 </span>
                            <span className='contact'><PhoneIcon /> +44 0161 408 0044 </span>
                        </div>
                    </div>
                </div>
                <nav className="navbar  py-1">
                    <div className="container">
                        <div className="logo">
                            <NavLink to="/" >
                                <img src={logo} alt="logo" className="img-fluid" /></NavLink>
                        </div>
                        <div>
                            <ul className="navbar-nav ms-auto mb-lg-0 d-flex flex-row">
                                <li className="nav-item">
                                    <SearchIcon className="icons" />
                                </li>
                                <li className="nav-item">
                                <NavLink to="/CartPage">
                                    <ShoppingCartIcon className="icons cart" />
                                    </NavLink>
                                    <span className="cart_count">
                                    <p style={{margiTop:"2.5px"}}>
                                    {Counter.counterCount>0 ? Counter.counterCount:0}
                                    </p>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <AccountCircleIcon className="icons" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
         
        </>
    )
}



export default Navbar