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
                {'name': '6', id: 6, disabled: false}, {'name': '*', id: 12, disabled: false},
                {'name': '1', id: 1, disabled: false}, {'name': '2', id: 2, disabled: false},
                {'name': '3', id: 3, disabled: false}, {'name': '-', id: 13, disabled: false},
                {'name': '0', id: 0, disabled: false}, {'name': '.', id: 10, disabled: false},
                {'name': '=', id: 14, disabled: false}, {'name': '+', id: 15, disabled: false},
            ],

            BUTTONS: {
                '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
                '6': 6, '7': 7, '8': 8, '9': 9, '10': '.',
                '11': '/', '12': '*', '13': '-', '15': '+', '23': '%',
            },

            memory: [0],
            memoryDisplay: false,
            number0: [],
            number1: [],
            act: '',
            input0: null,
            input1: 0,
        };

        this.changeItem = this.changeItem.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.chooseAction = this.chooseAction.bind(this);
    }

    changeNumber(id) {
        let arr = [...this.state.number1];
        if (id !== 0 || arr.length !== 0) {
            if (arr.length < 16) {
                if (id === 10) {
                    if (arr.includes(this.state.BUTTONS[id])) {
                        return;
                }}
            arr.push(this.state.BUTTONS[id]);
            this.setState({number1: arr, input1: arr.join('')})
        }}
    }

    chooseAction(id) {
        console.log(id);
        let arr = [...this.state.number1];
        this.setState({number0: arr, act: this.state.BUTTONS[id], number1: [], input0: arr, input1: 0})
    }

    changeItem(id) {
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].includes(id)) {
            this.changeNumber(id);
        }
        if ([11, 12, 13, 15, 23].includes(id)) {
            console.log('id = ', id);
            this.chooseAction(id);
        }
    }

    arr = [0, 4, 8, 12, 16, 20];

    render() {
        return (
            <div className="App">
                <Input input0={this.state.input0}
                       input1={this.state.input1}
                       act={this.state.act}
                       memory={this.state.memoryDisplay}/>
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
