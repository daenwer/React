import React, {Component} from 'react';
import './Input.css';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'http://jsonplaceholder.typicode.com/albums',
            data: '',
        };
        this.getData = this.getData.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(url) {
        this.setState({url: url})
    }

    getData() {
        console.log(this.state.url);
        const url = this.state.url;
        fetch(url)
            .then(response => response.json())
            // .then(albums => console.log(JSON.stringify(albums)))
            .then(albums => console.log(JSON.stringify(albums)))

        // JSON.stringify(value[, replacer[, space]])
    }

    render() {
        return (
            <div>
                <input type="text" name="url" value={this.state.url}
                       onChange={(e) => this.changeInput(e.target.value)} />
                <button onClick={this.getData}>Получить</button>

            </div>
        )
    }
}

export default Input;
