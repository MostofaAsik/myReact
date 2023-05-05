import React from 'react';
import './Header.css'
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='header'>
            {/* <h2>My React</h2> */}
            <img src={logo} alt="" />
            <div className='nav'>
                <a href="/logo">Logo</a>
                <a href="/orders">Orders</a>
                <a href="/revontry">Revontry</a>
                <a href="/logim">Login</a>
            </div>
        </nav>
    );
};

export default Header;