import React, { Component } from "react";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    //1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    //2. Either add to order or update the number in our order
    order[key] = order[key] + 1 || 1; // if we have order[fish1] into order then increase it or set order amount 1
    //3. Call setState to update our state object
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Sea Food Market"></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                addToOrder={this.addToOrder}
                index={key}
                key={key}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>

        <Order fishes={this.state.fishes} order={this.state.order}></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        ></Inventory>
      </div>
    );
  }
}
export default App;
