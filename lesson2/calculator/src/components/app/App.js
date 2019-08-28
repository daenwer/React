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
                '11': '/', '12': '*', '13': '-', '15': '+', '23': '%', '22': '√',
            },

            memory: [0],
            memoryDisplay: false,
            number0: [],
            number1: [],
            act: null,
            input0: null,
            input1: 0,
        };

        this.changeItem = this.changeItem.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.chooseAction = this.chooseAction.bind(this);
        this.calculation = this.calculation.bind(this);
        this.calculationSqrt = this.calculationSqrt.bind(this);
        this.changeMemory = this.changeMemory.bind(this);
    }

    changeNumber(id) {
        let arr = [...this.state.number1];
        if (id !== 0 || arr.length !== 0) {
            if (arr.length < 16) {
                if (id === 10) {
                    if (arr.includes(this.state.BUTTONS[id])) {
                        return;
                    }
                }
                if (arr[0] === 0) {arr = [];}
                arr.push(this.state.BUTTONS[id]);
                if (this.state.memoryDisplay) {this.memoryDisplay();}
                this.setState({number1: arr, input1: arr.join('')})
            }
        }
    }

    chooseAction(id) {
        let arr = [...this.state.number1];
        if (this.state.memoryDisplay) {this.memoryDisplay();}
        this.setState({number0: arr, act: this.state.BUTTONS[id], number1: [], input0: arr, input1: 0})
    }

    changeMemory(act) {
        if (act === '+') {
            let result = eval(this.state.memory.join('') + '+' + this.state.number1.join(''));
            this.setState({memory: String(result).split('')})
        }
        if (act === '-') {
            let result = eval(this.state.memory.join('') + '-' + this.state.number1.join(''));
            this.setState({memory: String(result).split('')})
        }
        if (act === 'delete') {
            this.setState({memory: [0]})
        }
    }

    async calculation() {
        if (this.state.act === "%") {
            let result = eval(this.state.number0.join('') + '/100*' + this.state.number1.join(''));
            if (this.state.memoryDisplay) {this.memoryDisplay();}
            const badly = await this.setState({
                number0: [], number1: String(result).split(''),
                act: null, input0: null, input1: String(result).split('')
            });
            return;
        }
        if (!this.state.act) {
            return;
        }
        if (this.state.act === '/' && !this.state.number1) {
            return;
        }
        let result = eval(this.state.number0.join('') + this.state.act + this.state.number1.join(''));
        if (this.state.memoryDisplay) {this.memoryDisplay();}
        const badly = await this.setState({
            number0: [], number1: String(result).split(''),
            act: null, input0: null, input1: String(result).split('')
        })
    }

    async calculationSqrt() {
        const badly = await this.calculation();

        if (this.state.number1.join('') < 0) {
            return;
        }
        let result = Math.sqrt(this.state.number1.join(''));
        if (this.state.memoryDisplay) {this.memoryDisplay();}
        this.setState({
            number0: [], number1: String(result).split(''),
            act: null, input0: null, input1: String(result).split('')
        })
    }

    async changeItem(id) {

        if (id !== 24) {
            const badly = await this.setState({memoryDisplay: false})
        }
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].includes(id)) {
            this.changeNumber(id);
        }
        if ([11, 12, 13, 15, 23].includes(id)) {
            if (this.state.act) {this.calculation()}
            if (id === 23 && this.state.number1.length === 0) {return;}
            this.chooseAction(id);
        }
        if (id === 14) {
            this.calculation()
        }
        if (id === 22) {
            this.calculationSqrt();
        }
        if (id === 20) {
            if (this.state.memoryDisplay) {this.memoryDisplay();}
            this.setState({
                memoryDisplay: false, number0: [], number1: [],
                act: null, input0: null, input1: 0,
            })
        }
        if (id === 21) {
            if (this.state.number1.length > 1) {
                let arr = [...this.state.number1];
                arr.pop();
                if (this.state.memoryDisplay) {this.memoryDisplay();}
                this.setState({number1: arr, input1: arr})
            } else if (this.state.number1.length === 1) {
                if (this.state.memoryDisplay) {this.memoryDisplay();}
                this.setState({number1: [], input1: 0})
            } else if (!this.state.number1 || this.state.act) {
                if (this.state.memoryDisplay) {this.memoryDisplay();}
                this.setState({
                    number1: this.state.number0,
                    input1: this.state.number0,
                    number0: [], act: null, input0: null
                })
            }
        }

        if (id === 24) {
            this.setState(
                this.setState({
                    memoryDisplay: true, number0: [], number1: this.state.memory,
                    act: null, input0: null, input1: this.state.memory,
                })
            )
        }

        if (id === 26) {
            this.calculation();
            this.changeMemory('+');
        }

        if (id === 25) {
            this.calculation();
            this.changeMemory('-');
        }

        if (id === 27) {
            this.calculation();
            this.changeMemory('delete');
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
                            arr={this.state.buttons.slice(number, number + 4)}
                            changeItem={this.changeItem}/>
                ))}
            </div>
        );
    }
}

export default App;
