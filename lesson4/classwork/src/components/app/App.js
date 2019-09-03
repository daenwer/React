import React, {Component} from 'react';
import './App.css';
// import Button from '../button/Button';
import Input from '../input/Input';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        // this.onError = this.onError.bind(this);
    }

    // onError = error => {
    //     this.setState({ isError: true });
    // };
    //
    // componentDidMount() {
    //     fetch("http://jsonplaceholder.typicode.com/albums")
    //         .then(response => response.json())
    //         .then(albums => this.setState({ isLoadingAlbums: false, albums }))
    //         .catch(this.onError);
    //     fetch("http://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(users => this.setState({ isLoadingUsers: false, users }))
    //         .catch(this.onError);
    // }

    render() {
        return (
            <Input/>
        )
    }
}


export default App;
