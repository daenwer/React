import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React',
            buttons: ['success', 'info', 'warning', 'danger', 'default'],
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className='Inline'>
                    {this.state.buttons.map(button => (
                        <Button >{button}</Button>
                    ))}
                </div>

            </div>
        );
    }
}

export default App;
