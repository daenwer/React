import React, {Component} from 'react';
import './App.css';
import Button from '../button/Button';
import Input from '../input/Input';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {'name': 'C', id: 20, disabled: false}, {'name': 'Delete', id: 21, disabled: false},
                {'name': '√', id: 22, disabled: false}, {'name': '%', id: 23, disabled: false},
                {'name': 'MR', id: 24, disabled: false}, {'name': 'M-', id: 25, disabled: false},
                {'name': 'M+', id: 26, disabled: false}, {'name': 'MRC', id: 27, disabled: false},
                {'name': '7', id: 7, disabled: false}, {'name': '8', id: 8, disabled: false},
                {'name': '9', id: 9, disabled: false}, {'name': '/', id: 11, disabled: false},
                {'name': '4', id: 4, disabled: false}, {'name': '5', id: 5, disabled: false},
                {'name': '6', id: 6, disabled: false}, {'name': 'x', id: 12, disabled: false},
                {'name': '1', id: 1, disabled: false}, {'name': '2', id: 2, disabled: false},
                {'name': '3', id: 3, disabled: false}, {'name': '-', id: 13, disabled: false},
                {'name': '0', id: 0, disabled: false}, {'name': '.', id: 10, disabled: false},
                {'name': '=', id: 14, disabled: false}, {'name': '+', id: 15, disabled: false},
            ],

            memory: [],
            memoryDisplay: false,
            number: [],
            result: [],
            act: '',
            input: 0,
        };

        this.changeItem = this.changeItem.bind(this);
    }

    changeItem(id) {
        console.log(id);
    }

    arr = [0, 4, 8, 12, 16, 20];

    render() {
        return (
            <div className="App">
                <Input number={this.state.input} act={this.state.act} memory={this.state.memoryDisplay}/>
                {this.arr.map((number, i) => (
                    <Button key={number}
                            arr={this.state.buttons.slice(number, number+4)}
                            changeItem={this.changeItem}/>
                ))}
            </div>
        );
    }
}

export default App;
