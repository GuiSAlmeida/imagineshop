import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

const Card = props => {
    return (
        <div className="card">
            <Link to="/produto">
                <img className="card-image" src={props.photo} alt={props.title} />
                <h3 className="card-title">{props.title}</h3>
                <span className="card-price">{props.price}</span>
                <small className="card-instalments">{props.instalments}</small>
            </Link>
        </div>
    )
};

export default Card;