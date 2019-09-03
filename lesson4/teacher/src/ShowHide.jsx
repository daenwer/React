import React from "react";

export class Visibility extends React.Component {
  state = { isVisible: true };

  divRef = React.createRef();

  onOutsideClick = e => {
    if (
      this.divRef.current &&
      e.target !== this.divRef.current &&
      !this.divRef.current.contains(e.target)
    ) {
      this.setState({ isVisible: false });
    }
  };

  componentDidMount() {
    document.body.addEventListener("click", this.onOutsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.onOutsideClick);
  }

  render() {
    return (
      <div ref={this.divRef} style={{ display: "contents" }}>
        {this.state.isVisible ? this.props.children : null}
      </div>
    );
  }
}

export class ShowHide extends React.Component {
  state = { isVisible: false };

  divRef = React.createRef();

  onOutsideClick = e => {
    if (
      this.divRef.current &&
      e.target !== this.divRef.current &&
      !this.divRef.current.contains(e.target)
    ) {
      this.setState({ isVisible: false });
    }
  };

  componentDidMount() {
    document.body.addEventListener("click", this.onOutsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.onOutsideClick);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isVisible: true })}>Show</button>
        <Visibility>
          <div style={{ width: 100, height: 100, backgroundColor: "red" }}>
            <button>Click me</button>
          </div>
        </Visibility>
      </div>
    );
  }
}
