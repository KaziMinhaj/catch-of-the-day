import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = (event) => {
    //1. stop loading
    event.preventDefault();
    //2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. change the page
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit"> Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
