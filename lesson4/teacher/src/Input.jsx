import React from "react";

export class Input extends React.Component {
  state = {
    value: ""
  };

  _domRef = React.createRef();

  componentDidMount() {
    if (this._domRef.current) {
      this.props.autoFocus && this._domRef.current.focus();
    }
  }

  render() {
    return (
      <input
        ref={this._domRef}
        type="text"
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
      />
    );
  }
}
