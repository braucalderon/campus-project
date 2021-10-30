import React, { Component } from 'react'
import SingleCampus from '../SingleCampus.js/SingleCampus';

class SingleCampusForm extends Component {

    constructor() {
        super();

        this.state = {
            id:'',
            formSubmitted:false
        }
    }

    idChange = (event) => {
        this.setState({id:event.target.value, formSubmitted:false});
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        alert("Form Submitted");
        this.setState({formSubmitted:true});
    }

    render() {
        return (
            <div className="page-wrapper">
                <div id="search-form-div">

                    <h5>Please enter the ID of the campus you would like to view.</h5>
                    <form onSubmit={this.formSubmitHandler}>
                        <input
                            type="number"
                            min="0"
                            step="1.0"
                            name="singleViewSearch"
                            value={this.state.id}
                            onChange={this.idChange}
                            placeholder="Search by ID">
                        </input>
                        <button type="Submit">Submit</button>
                    </form>
                </div>
        
                {this.state.formSubmitted ? <SingleCampus idKnown={true} id={this.state.id} userSearch={true}/> : ''}
            </div>
        )
    }
}

export default SingleCampusForm;