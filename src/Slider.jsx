import React from 'react';
import { NavLink } from 'react-router-dom';

const Slider = (props) => {
    return(
    <>
        <div className={'carousel-item ' + props.active} style={{backgroundImage:props.url}}>
            <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>{props.title}</h2>
                    <p>{props.desc1}</p>
                    <p>{props.desc2}</p>
                    <div className="text-center"><NavLink to="service" className="btn-get-started">Read More</NavLink></div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Slider;