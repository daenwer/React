import React from 'react';
import './Icon.css';

export const Icon = (props) => (
    <i className={'fa fa-spin fa-' + props.name} />
);
