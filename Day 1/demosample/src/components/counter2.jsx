import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = product => {
    console.log(product);
    this.setState({ count: this.state.count - 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Add to cart
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Remove from cart{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn--sm m-2"
        >
          Delete from cart
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? <h1>Empty cart </h1> : count;
  }
}

export default Counter;
