import React from 'react';
import './Button.css';
import { Icon } from '../icon/Icon';


function Button(props) {

    return (
        <div>
            <button className={`btn ${props.text}`}>
                {/*<Icon name={props.children}/>*/}
                <Icon name='spinner'/>
                {props.children}
            </button>
        </div>
    )
}

export default Button;
