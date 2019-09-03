import React from 'react';
import './Button.css';
import DivButtons from "../divButtons/DivButtons";


function Button(props) {

    const newArr = props.arr;

    const changeItem = props.changeItem;

    return (
        <div className='buttons'>
            {newArr.map((button, i) => (
                <DivButtons changeItem={changeItem} key={button.id} {...button}/>
            ))}
        </div>
    )
}

export default Button;
