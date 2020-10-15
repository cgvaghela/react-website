import React from 'react';
import { NavLink } from 'react-router-dom';
import Service from './Service';
import Feature from './Feature';

const Services = () => {
    return(
        <>
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h2>Services</h2>
                <ol>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>Services</li>
                </ol>
                </div>
            </div>
        </section>
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <Service title="Web Designing & Developement" iconColor="blue" fontAwesome="database" description="Encompassing the various skills and discipline in the line of production, establishment and maintanace of website. We not only create a website, but we nurture it."/>
                    <Service title="E-commerce" iconColor="orange" fontAwesome="shopping-cart" description="We faciliate your product trade beyond your visions. We will make your product go online with a litte or less help from your and embark the profit margins with no limits."/>
                    <Service title="Graphics Designing" iconColor="pink" fontAwesome="pencil" description="Mock Up Designs,Logo Design, Brocher Design, Stationary Design all have a one spot solution at Syntego Web Solution.Starting from layout to colors, everything can be pixel perfect to your taste."/>
                    <Service title="Mobile Application" iconColor="yellow" fontAwesome="mobile" description="Why satisfy with what is there on your desktop? Temptatation is Good for your company’s health. Lets have it on Mobile too! Get your product App on Play Store and App Store."/>
                    <Service title="Web Hosting" iconColor="red" fontAwesome="cloud" description="With so much choice, it is elusive – the right Web Site Host. Syntego Web Solution has been Hosting Websites for over 2 years and knows how to keep you energetic. You get a brisk, agreeable and reliable Service easily."/>
                    <Service title="SEO" iconColor="teal" fontAwesome="globe" description="Search Engine Optimization enables your firm with several options that measure everything from search engine rankings to analyzing site visitors to determining Return On Investment (ROI) or cost per new customer."/>
                </div>
            </div>
        </section>
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Features</h2>
                    <p>Our coders and designers are extremely dedicated and are specialists in their fields. They each have years of experience making web solutions that are outwardly engaging and utilize pixel-impeccable, spotless, all around archived, W3C agreeable, SEO optimized code.</p>
                </div>
                <div className="row">
                    <Feature title="HTML5" icon="ri-store-line" color="#ffbb2c"/>
                    <Feature title="CSS3" icon="ri-bar-chart-box-line" color="#5578ff"/>
                    <Feature title="Bootstrap 5.1" icon="ri-calendar-todo-line" color="#e80368"/>
                    <Feature title="jQuery" icon="ri-paint-brush-line" color="#e361ff"/>
                    <Feature title="React Js" icon="ri-database-2-line" color="#47aeff"/>
                    <Feature title="Express Js" icon="ri-gradienter-line" color="#ffa76e"/>
                    <Feature title="MySqli" icon="ri-file-list-3-line" color="#11dbcf"/>
                    <Feature title="Google Adward" icon="ri-price-tag-2-line" color="#4233ff"/>
                    <Feature title="WordPress" icon="ri-anchor-line" color="#b2904f"/>
                    <Feature title="Laravel 8" icon="ri-disc-line" color="#b20969"/>
                    <Feature title="YouTube API's" icon="ri-base-station-line" color="#ff5828"/>
                    <Feature title="Woo-Commerce" icon="ri-fingerprint-line" color="#29cc61"/>
                </div>
            </div>
        </section>
        </>
    );
};

export default Services;