import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [data,setData] = useState({
        email:"",
        fullname:"",
        subject:"",
        message:"",
    });
    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Fullname = ${data.fullname} Email = ${data.email} Subject = ${data.subject} Message = ${data.message}`);
    }
    return(
        <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h2>Contact</h2>
                <ol>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>Contact</li>
                </ol>
                </div>
            </div>
        </section>
        <div className="map-section">
            <iframe title="Map" style={{border:'0', width:'100%', height:'350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799577580337!2d70.76878981426836!3d22.290110048899006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2393e9eecf%3A0x214123375fef5198!2s150%20Feet%20Ring%20Rd%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1602666041086!5m2!1sen!2sin" frameBorder="0" allowFullScreen></iframe>
        </div>
        <section id="contact" className="contact">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up">
                <div className="col-lg-10">
                    <div className="info-wrap">
                    <div className="row">
                        <div className="col-lg-4 info">
                            <i className="icofont-google-map"></i>
                            <h4>Location:</h4>
                            <p>150 feet ring road<br />Rajkot,Gujarat, INDIA 360001</p>
                        </div>
                        <div className="col-lg-4 info mt-4 mt-lg-0">
                            <i className="icofont-envelope"></i>
                            <h4>Email:</h4>
                            <p>vijay.syntego@gmail.com<br />vaghelac@gmail.com</p>
                        </div>
                        <div className="col-lg-4 info mt-4 mt-lg-0">
                            <i className="icofont-phone"></i>
                            <h4>Call:</h4>
                            <p>+91 99 133 44771<br />+91 99 243 08747</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mt-5 justify-content-center" data-aos="fade-up">
                    <div className="col-lg-10">
                        <form onSubmit={formSubmit} className="php-email-form">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                <input type="text" value={data.fullname} onChange={InputEvent} name="fullname" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group">
                                <input type="email" value={data.email} onChange={InputEvent} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" value={data.subject} onChange={InputEvent} className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <textarea onChange={InputEvent} value={data.message} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Contact;