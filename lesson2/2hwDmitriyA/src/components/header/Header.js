import React from 'react';
import './Header.css';
import { Icon } from '../icon/Icon';


function Header(props) {

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

export default Header;
