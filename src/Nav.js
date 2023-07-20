import React from 'react';
import logo from './assets/Little Lemon.png';

export default function Nav() {
    return (
        <nav className="nav">
            <img id="logo" src={logo} alt="Little Lemon logo" height="100" width="300"></img>
            <ul id="navLinks">
                <li><a href="Home.com">Home</a></li>
                <li><a href="About.com">About</a></li>
                <li><a href="Menu.com">Menu</a></li>
                <li><a href="OrderOnline.com">Order</a></li>
                <li><a href="Login.com">Login</a></li>
            </ul>
        </nav>
    );
}

