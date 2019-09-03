import React from "react";

// class Test extends React.Component {
//   componentDidMount() {

//   }

//   componentDidUpdate() {

//   }

//   componentWillUnmount() {

//   }
// }

export class App extends React.Component {
  state = { toggle: true, other: "text" };

  render() {
    class Test1 extends React.Component {
      state = { counter: 0 };

      componentDidMount() {
        console.log("component did mount");
      }

      componentWillUnmount() {
        console.log("component will unmount");
      }

      render() {
        return (
          <div>
            {this.state.counter}
            <button
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
            >
              Inc
            </button>
          </div>
        );
      }
    }

    class Test2 extends React.Component {
      render() {
        return <div>Test 2</div>;
      }
    }

    const getProduct = () => this.state.products.map();

    return (
      <div>
        {getProduct(this.state.products)}
        {this.state.toggle ? <Test1 /> : <Test2 />}
        <button
          onClick={() => this.setState(({ toggle }) => ({ toggle: !toggle }))}
        >
          Toggle
        </button>
        <input
          type="text"
          value={this.state.other}
          onChange={e => this.setState({ other: e.target.value })}
        />
      </div>
    );
  }
}
