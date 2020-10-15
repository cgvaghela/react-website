import React from 'react';
import Icofont from 'react-icofont';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <NavLink to="/" className="logo mr-auto"><img src="logo192.png" alt="logo" className="img-fluid" /></NavLink>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="about">About Us</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="service">Services</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="contact">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                    <div className="header-social-links">
                    <a href="https://twitter.com/cgvaghela" className="twitter"><Icofont icon="twitter" /></a>
                    <a href="https://facebook.com/chiragvaghela747" className="facebook"><Icofont icon="facebook" /></a>
                    <a href="https://linkedin.com/in/chirag-vaghela-63a636b6" className="instagram"><Icofont icon="linkedin" /></a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;