import React from 'react';
import './style.scss';

const Container = props => (
    <div className="container">
        {props.children}
    </div>
)

export default Container;