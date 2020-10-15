import React from 'react';
import { NavLink } from 'react-router-dom';

const Feature = (props) => {
    return(
    <>
        <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
            <i className={props.icon} style={{color:props.color}}></i>
            <h3><NavLink to="service">{props.title}</NavLink></h3>
            </div>
        </div>
    </>
    );
};

export default Feature;