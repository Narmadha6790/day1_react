import React, { Component } from "react";
import Counter2 from "./counter2";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    console.log("Event handler called", counterId);
  };
  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <Counter2
            key={c.id}
            onDelete={this.handleDelete}
            value={c.value}
            selected={true}
          >
            <h4>Product #{c.id}</h4>
          </Counter2>
        ))}
      </div>
    );
  }
}
export default Counters;
