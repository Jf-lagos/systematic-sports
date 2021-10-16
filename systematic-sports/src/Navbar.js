import React from 'react'
import './Navbar.css'

const Navbar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>systematic sports</div>
        <div class="dropdown">
            <button class="navbar__item dropbtn">about</button>
            <div class="dropdown-content navbar__item">
                <a href="#">Betting Guide</a>
                <a href="#">FAQ</a>
                <a href="#">About Us</a>
                <a href="#">The Team</a>
            </div>
            </div>
        <div className='navbar__item'>home</div>
        <div className='navbar__item'>performance</div>        
    </header>
);

export default Navbar
