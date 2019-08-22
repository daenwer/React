import React from 'react';
import './Button.css';

function Button(props) {

    return (
        <div>
            <button className={'btn ' + props.text}>{props.text}</button>
        </div>
    )
}

export default Button;
