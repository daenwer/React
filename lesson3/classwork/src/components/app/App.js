import React, {Component} from 'react';
import './App.css';
import Button from '../button/Button';
import Input from '../input/Input';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingAlbums: true,
            isLoadingUsers: true,
            isError: false,
            albums: null,
            users: null,
        };
        this.onError = this.onError.bind(this);
    }

    onError = error => {
        this.setState({ isError: true });
    };

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(albums => this.setState({ isLoadingAlbums: false, albums }))
            .catch(this.onError);
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ isLoadingUsers: false, users }))
            .catch(this.onError);
    }

    render() {
        if (this.state.isError) {
            return "Unexpected error. Please, contact support.";
        }

        return this.state.isLoadingAlbums || this.state.isLoadingUsers ? (
            "....Loading...."
        ) : (
/*          <ul>
                {this.state.albums.map(album => (
                    <li key={album.id}>

                        {this.state.users.find(user => user.id === album.userId).name}

                        <br/>
                        {album.title}</li>))}
            </ul>
*/
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <br/>
                        {(this.state.albums.filter(album => user.id === album.userId)).map(alb => (alb.title))}

                        </li>))}
            </ul>

        );
    }
}


export default App;
