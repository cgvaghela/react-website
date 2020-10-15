import React from 'react';
import { useState } from 'react';
import Icofont from 'react-icofont';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [data,setData] = useState();
    
    const InputEvent = (event) => {
        setData(event.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Email = ${data}`);
    }
    return(
    <>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>SYNTEGO</h3>
                            <p>
                            150 feet ring road,<br />
                            Rajkot, Gujarat,<br />
                            360001 India <br /><br />
                            <strong>Mo:</strong> +91 99 133 44771<br />
                            <strong>Mo:</strong> +91 99 243 08747<br />
                            <strong>Email:</strong> vijay.syntego@gmail.com<br />
                            <strong>Email:</strong> vaghelac@gmail.com<br />
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Pages</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i> <NavLink exact to="/">Home</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink exact to="about">About Us</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink exact to="service">Services</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">Web Design</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">Web Development</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">E-commerce</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">Web Hosting</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">Mobile Application Development</NavLink></li>
                                <li><i className="fa fa-angle-right"></i> <NavLink to="service">SEO</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Us</h4>
                            <p>We look folward to hearing from you</p>
                            <form onSubmit={formSubmit}>
                            <input type="email" value={data} onChange={InputEvent} name="email" placeholder="Enter Email"/><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-md-flex py-4">
                <div className="mr-md-auto text-center text-md-left">
                    <div className="copyright">&copy; Copyright <strong><span><NavLink to="https://syntegowebsolution.com/">Syntego Web Solution</NavLink></span></strong> All Rights Reserved.</div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://twitter.com/cgvaghela" className="twitter"><Icofont icon="twitter" /></a>
                    <a href="https://facebook.com/chiragvaghela747" className="facebook"><Icofont icon="facebook" /></a>
                    <a href="https://linkedin.com/in/chirag-vaghela-63a636b6" className="instagram"><Icofont icon="linkedin" /></a>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;