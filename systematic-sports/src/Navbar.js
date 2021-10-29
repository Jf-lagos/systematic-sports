import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'><Link to="/" style={{ textDecoration: 'none', color: 'black'}}>systematic sports</Link></div>
            <div class="dropdown">
            <button class="navbar__item dropbtn"><Link to="/about" style={{ textDecoration: 'none', color: 'black'}}>about</Link></button>
            <div class="dropdown-content navbar__item">
                <Link to="/about">Betting Guide</Link>
                <Link to="/about">Faq</Link>
                <Link to="/about">About Us</Link>
                <Link to="/about">The Team</Link>
            </div>
            </div>
        <div className='navbar__item'><Link to="/" style={{ textDecoration: 'none', color: 'black'}}>home</Link></div>
        <div className='navbar__item'><Link to="/performance"style={{ textDecoration: 'none', color: 'black'}} >performance</Link></div>        
    </header>
);

export default Navbar
