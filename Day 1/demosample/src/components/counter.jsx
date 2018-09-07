import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/300",
    tags: []
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no items</p>;
    return (
      <ul>
        {this.state.tags.map(a => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Add to cart
        </button>
        {this.state.tags.length === 0 && "PLease add items !"}
        {this.renderTags()}
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
