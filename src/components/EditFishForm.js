import PropTypes from "prop-types";
import React, { Component } from "react";

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          type="text"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Item
        </button>
      </div>
    );
  }
}

export default EditFishForm;
