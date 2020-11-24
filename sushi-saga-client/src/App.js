import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    displaySushi: [],
    endIndex: 3,
    startIndex: 0,
    budget: 200,
  };

  async componentDidMount() {
    let response = await fetch(API);
    let data = await response.json();
    this.setState({ sushi: data });
    this.conciseLimit();
  }

  range = (start, end) => {
    let x = [];
    for (let i = start; i <= end; i++) {
      x.push(i);
    }
    return x;
  };

  conciseLimit = () => {
    this.setState({
      displaySushi: [...this.state.sushi].filter((elm, index) =>
        this.range(this.state.startIndex, this.state.endIndex).includes(index)
      ),
    });
    this.moreSushi();
  };

  moreSushi = () => {
    this.setState({
      endIndex: this.state.endIndex + 4,
      startIndex: this.state.startIndex + 4,
    });
  };

  setBudget = (expense) => {
    this.setState({
      budget: this.state.budget - expense,
    });
  };

  isBudget = (expense) => {
    return this.state.budget > 0 && this.state.budget - expense >= 0 ;
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          isBudget={this.isBudget}
          sushis={this.state.displaySushi}
          moreSushi={this.conciseLimit}
          setBudget={this.setBudget}
        />
        <Table budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
