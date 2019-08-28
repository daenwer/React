import React from 'react';
import './Input.css';

function Input(props) {

    return (

        <div>
            <div className='window'>
                <h3 className='memory'> </h3>
                <h3 className='input col-9'>{props.input0}</h3>
                <h3 className='act col-1'>{props.act}</h3>
            </div>

            <div className='window'>
                <h3 className='memory'>{props.memory ? 'ME' : ''}</h3>
                <h3 className='input col-9'>{props.input1}</h3>
                <h3 className='act col-1'> </h3>
            </div>
        </div>
    )
}

export default Input;
