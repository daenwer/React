import React from "react";

export const Err = () => {
  throw new Error("some error");
};

export class ErrorBoudary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError(error) {
    return {
      isError: true
    };
  }

  componentDidCatch(error, info) {
    // log error info
  }

  render() {
    return this.state.isError ? this.props.fallback : this.props.children;
  }
}
