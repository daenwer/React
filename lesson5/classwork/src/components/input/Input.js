import React from 'react';
import './Input.css';

function Input(props) {

    return (
        <div className='window'>
            {/*<h3 className='memory'>{'ME' ? props.memory : ''}</h3>*/}
            <h3 className='memory'>{props.memory ? 'ME' : ''}</h3>
            <h3 className='input col-9'>{props.number}</h3>
            <h3 className='act col-1'>{props.act}</h3>

        </div>
    )
}

export default Input;
