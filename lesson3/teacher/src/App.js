import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Albums } from "./pages/albums";

const Test = ({ text }) => <div>Test component {text}</div>;

class UserList extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    users: null
  };

  onError = error => {
    this.setState({ isError: true });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ isLoading: false, users }))
      .catch(this.onError);
  }

  render() {
    if (this.state.isError) {
      return "Unexpected error. Please, contact support.";
    }

    return this.state.isLoading ? (
      "....Loading...."
    ) : (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

class TestClass extends React.Component {
  state = {
    text: "test"
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <span>{this.props.counter}</span>
        <input
          type="text"
          onChange={e => this.setState({ text: e.target.value })}
        />
      </div>
    );
  }
}

class Toggle extends React.Component {
  state = {
    isVisible: false,
    counter: 0
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <Albums />}{" "}
        <button
          onClick={() =>
            this.setState(({ isVisible }) => ({ isVisible: !isVisible }))
          }
        >
          Toggle
        </button>{" "}
        <button
          onClick={() =>
            this.setState(({ counter }) => ({ counter: counter + 1 }))
          }
        >
          Inc
        </button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Toggle />
//       </header>
//     </div>
//   );
// }

export default () => <Toggle />;
