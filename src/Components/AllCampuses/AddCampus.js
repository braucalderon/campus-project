import React, { Component } from "react";
import fire from "../Firebase/firebase.js";

class AddCampus extends Component {
  constructor() {
    super();

    this.state = {
      id:"",
      name: "",
      imageUrl: "",
      address: "",
      description: "",
    };
  }

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  imageUrlChange = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  addressChange = (event) => {
    this.setState({ address: event.target.value });
  };

  descriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  formSubmitHandler = (event) => {
    alert("Campus has been added");
    this.addCampustoFB();

    this.setState({id:"", name: "", imageUrl: "", address: "",description: ""});
    event.preventDefault();
  };

  addCampustoFB = () => {
    const campusRef = fire.database().ref("Campus");

    let lastCampusId = undefined;
    campusRef.orderByKey().limitToLast(1).once('value', snapshot => {

      snapshot.forEach((child) => {
        lastCampusId = child.val().id;
     });
    });
   
    campusRef.once('value', (snapshot) => {
      const campus = {
        id: (lastCampusId !== undefined ? lastCampusId + 1 : snapshot.numChildren()),
        name: this.state.name,
        imageUrl: this.state.imageUrl,
        address: this.state.address,
        description: this.state.description,
      };
      campusRef.push(campus);
    });
  };

  render() {
    return (
      <div className="page-wrapper">
        <div className="form-div">

        <h3>Add a Campus</h3>

        <form onSubmit={this.formSubmitHandler}>
          <label htmlFor="name">Campus Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.nameChange}
            required
          ></input>
          <br></br>

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.imageUrlChange}
          ></input>
          <br></br>

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.addressChange}
            required
          ></input>
          <br></br>

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.descriptionChange}
            placeholder="Enter a maximum of 500 characters"
            maxLength="500"
            required
          ></textarea>
          <br></br>

          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default AddCampus;
