import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return(
    <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h2>About</h2>
                <ol>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>About</li>
                </ol>
                </div>
            </div>
        </section>
        <section id="about-us" className="about-us">
            <div className="container" data-aos="fade-up">
                <div className="row content">
                    <div className="col-lg-6" data-aos="fade-right">
                        <h2>Syntego<br />Web<br /> Solution</h2>
                        <h3>We believe to expand our horizons in all the direction across the Globe.</h3>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                        <p>We are individual professionals, from different domains, working for one goal. Our expertise and experience is proof of our constant endeavour to achieve great. Thus with the experience of more than 2 years now and devoted to give IT driven Services to the esteem clients through constant endeavour of achieving quality performance. Syntego Web Solution aims at going beyond the expectations and exceeding Horizon in all the corners of the Globe.</p>
                        <ul>
                        <li><i className="ri-check-double-line"></i> Web Designing & Developement</li>
                        <li><i className="ri-check-double-line"></i> Mobile Application Development</li>
                        <li><i className="ri-check-double-line"></i> Web Hosting & SEO</li>
                        </ul>
                        <p className="font-italic">We have a motive to gain client’s trust and satisfation through our work. And thus we have managed to gain on what we aim at by our never ending efforts of complishing the needs.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                <h2>Our <strong>Skills</strong></h2>
                <p>Basically we work with you, for you and for your business interests. For us, your advancement interprets into our improvement. We, at Syntego Web Solution, acknowledge that described methods are basic to meet movement and quality benchmarks every single time. Accordingly, we have been simperingly completing structures which are bench marked against the best on the planet and ensuring that the organization transport is streamlined against your necessities.</p>
                </div>
                <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="progress">
                    <span className="skill">Google API's  <i className="val">95%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'95%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">Payment Getway Integration <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'100%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">PHP <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'100%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">JavaScript <i className="val">95%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'95%'}}></div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="progress">
                    <span className="skill">Google Adward <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'80%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">React <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'90%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">WordPress/CMS <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'80%'}}></div>
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">Photoshop / CoralDraw <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:'75%'}}></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default About;