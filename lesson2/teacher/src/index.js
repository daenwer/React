import React from "react";
import ReactDOM from "react-dom";
import { Kinds, Button } from "./components/button";
import { Icon } from "./components/icon";

// ReactDOM.render(
//   <div>
//     <Header className="custom-button other-custom" kind={Kinds.DANGER}>
//       <Icon name="home" />
//       Click me
//     </Header>
//     <Icon name="trash" />
//   </div>,
//   document.getElementById("root")
// );

const people = [
  { id: 1, name: "Bill Smith" },
  { id: 2, name: "Uladzimir Karatkevich" }
];

// ReactDOM.render(
//   <ul>
//     {people.map((person, index) => (
//       <li key={index}>{person.name}</li>
//     ))}
//   </ul>,
//   document.getElementById("root")
// );

// const Person = props => <li>{props.name}</li>;
// const People = props => (
//   <ul>
//     {props.people.map(person => (
//       <Person key={person.id} id={person.id} name={person.name} />
//     ))}
//   </ul>
// );

// ReactDOM.render(<People people={people} />, document.getElementById("root"));

document.addEventListener("click", () => {
  console.log("document");
});

class ClassButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      counter: 1
    };
  }

  onClick = evt => {
    // this.setState({ text: "", counter: this.state.counter + 1 }, () => {
    //   console.log("after state update", this.state);
    // });

    // if (this.state.text === "2") {
    //   this.setState({ counter: this.state.counter + 1 });
    // }

    this.setState(state => ({ counter: state.counter + 1 }));

    if (this.state.text === "2") {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
  };

  render() {
    return (
      <div onClick={() => console.log("div")}>
        <input
          onChange={evt => {
            this.setState({ text: evt.target.value });
          }}
          value={this.state.text}
          type="text"
        />
        <button onClick={this.onClick}>{this.state.counter}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ClassButton>Click me</ClassButton>,
  document.getElementById("root")
);
