import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    return(
    <>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className={'icon-box iconbox-' + props.iconColor}>
            <div className="icon">
                <i className={'fa fa-' + props.fontAwesome}></i>
            </div>
            <h4><NavLink to="service">{props.title}</NavLink></h4>
            <p>{props.description}</p>
            </div>
        </div>
    </>
    );
};

export default Service;