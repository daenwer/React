import React from 'react';
import './DivButtons.css';

class DivButtons extends React.Component {

    constructor(props) {
        super(props);
        this.lift = this.lift.bind(this);
    }

    lift(e) {
        this.props.changeItem(this.props.id)
    }

    render() {
        return (
                <button className='divBtn btn' disabled={this.props.disabled} onClick={this.lift}>{this.props.name}</button>
        )
    }
}

export default DivButtons;
