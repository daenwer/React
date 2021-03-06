import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

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
                    {/*<Button text='success'/>*/}
                    {/*<Button text='info'/>*/}
                    {/*<Button text='warning'/>*/}
                    {/*<Button text='danger'/>*/}
                    {/*<Button text='default'/>*/}
                    {this.state.buttons.map(button => (
                        <Button text={button} />
                    ))}
                </div>

            </div>
        );
    }
}

export default App;
