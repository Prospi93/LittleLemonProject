import React from 'react';
import logo from './assets/Little Lemon.png';

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon logo" height="100" width="300"></img>
            <a href="Home.com">Home</a>
            <a href="About.com">About</a>
            <a href="Menu.com">Menu</a>
            <a href="OrderOnline.com">Order Online</a>
            <a href="Login.com">Login</a>
        </nav>
    );
}

