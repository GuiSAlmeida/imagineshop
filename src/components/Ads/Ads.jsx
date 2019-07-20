import React from 'react';
import './style.scss';

const Ads = props => {
    console.log(props);
    return (
        <div className="ads">
            {props.advertisements.map(item => (
                <a href={item.link} target="_blank" key={item.id} >
                    <img src={item.image} alt="Publicidade" />
                </a>
            ))}
        </div>
    )
};

export default Ads;
