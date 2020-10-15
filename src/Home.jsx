import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slider from './Slider';
import Service from './Service';

const Home = () => {
    return(
    <>
        <section id="hero">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <Slider title="Responsive Web Design" active="active" url="url(img/slide-1.png)" desc1="Create your own stunning, clean and responsive website." desc2="Our Professionals will help you have your website's best  look on all devices."/>
                    <Slider title="Feel The Difference" active="" url="url(img/slide-2.png)" desc1="You cannot know the difference until and unless you go for SYNTEGO." desc2="Tell us what you need and we will accomplish beyond the imagination."/>
                    <Slider title="Manage From Anywhere" active="" url="url(img/slide-3.jpg)" desc1="Manage From Anywhere, 24*7 Contact Us" desc2="100% Secure"/>
                </div>
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
            </div>
        </section>

        <section id="about-us" className="about-us">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>WelCome to SWS</h2>
                </div>
                <div className="row content">
                    <div className="col-lg-6" data-aos="fade-right">
                        <h2>Simple<br />Affordable<br /> Effective</h2>
                        <h3>We are individual professionals, from different domains, now working for one goal.</h3>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                        <p>To sustain in the current market, it is mandatory for any business to have a fully functional and dedicated website. We at Syntego ensure to design and develop state of the art website, which not only helps to generate business and online presence, but also helps the clients to connect with the visitors. The development services offered by us will play a very important role in success of any organization.</p>
                        <ul>
                        <li><i className="ri-check-double-line"></i> Web Designing & Developement</li>
                        <li><i className="ri-check-double-line"></i> Mobile Application Development</li>
                        <li><i className="ri-check-double-line"></i> Web Hosting & SEO</li>
                        </ul>
                        <p className="font-italic">Our Expertise and Experience is proof of our constant endeavour to achieve great. Thus with the experience of more than 2 years now, We believe to expand our horizons in all the direction across the Globe.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" className="services section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>We Offer Comprehensive And End-To-End Solutions For Your Web Development Projects. <br />Our 100% Accurately Programmed Web Applications Fit Perfectly To Your Business Requirements.</p> 
                </div>
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
    </>
    );
};

export default Home;