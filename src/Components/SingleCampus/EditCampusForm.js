import React, { Component } from 'react'
import fire from "../Firebase/firebase.js";

class EditCampusForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id:this.props.id,
          name:'',
          imageUrl:'',
          address:'',
          description:''
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
        alert("Campus has been edited");
        this.editCampusInFB();

        this.setState({name:'', imageUrl:'', address:'', description:''});
        event.preventDefault();
      };
    
      editCampusInFB = () => {
        const campusRef = fire.database().ref('Campus');
        campusRef.on('value', snapshot => {
            if (snapshot.hasChildren()) {
                campusRef.orderByKey().once('value', snapshot => {
                    snapshot.forEach((child) => {
                        if (this.state.id == child.val().id) {
                            const campusChildRef = campusRef.child(child.key);
                            campusChildRef.once('value', snapshot => {
                              campusChildRef.update({
                                name: (this.state.name !== '' ? this.state.name : snapshot.val().name),
                                imageUrl: (this.state.imageUrl !== '' ? this.state.imageUrl : snapshot.val().imageUrl),
                                address: (this.state.address !== '' ? this.state.address : snapshot.val().address),
                                description: (this.state.description !== '' ? this.state.description : snapshot.val().description),
                              });
                            });
                        }
                     });
                });
            }
        });
      };

      deleteCampusFromFB = () => {
        const campusRef = fire.database().ref('Campus');
        campusRef.on('value', snapshot => {
            if (snapshot.hasChildren()) {
                campusRef.orderByKey().once('value', snapshot => {
                    snapshot.forEach((child) => {
                        if (this.state.id == child.val().id) {
                            const campusChildRef = campusRef.child(child.key);
                            campusChildRef.remove();
                        }
                     });
                });
            }
        });
        window.location.reload();
      };

      render() {
        return (
          <div className="page-wrapper">

            <div className="form-div">
              <h3>Edit a Campus</h3>

            <form onSubmit={this.formSubmitHandler}>
              <label htmlFor="name">Campus Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.nameChange}
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
              ></textarea>
              <br></br>
    
              <button type="submit">Submit</button>
            </form>

            <button onClick={this.deleteCampusFromFB} id="delete-campus">Delete Campus</button>

            </div>
          </div>
        );
      }
}


export default EditCampusForm;