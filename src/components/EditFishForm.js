import React, { Component } from 'react';

class EditFishForm extends Component {
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    console.log(this.props);
    
    return (
      <form className="fish-edit">
        <input name="name" type="text" placeholder="Name"
          value={name} />
        <input name="price" type="text" placeholder="Price"
          value={price} />
        <select name="status" type="text" placeholder="Status"
          value={status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" type="text" placeholder="Desc"
          value={desc}></textarea>
        <input name="image" type="text" placeholder="Image"
          value={image} />
        <button type="submit">Add Fish</button>
      </form>
    )
  }
}

export default EditFishForm;