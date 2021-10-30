  
import React, { Component } from 'react'
// import EditCampusForm from '../SingleCampus/EditCampusForm';
import GetCampus from '../SingleCampus/GetCampus';
import SingleCampusForm from '../SingleCampus/SingleCampusForm'

class SingleCampus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userSearch:this.props.userSearch,
            idKnown:this.props.idKnown,
            id:this.props.id
        }
    }

    componentDidMount() {
        if (this.state.userSearch) {
            //console.log("idKnown " + this.props.location.state.idKnown);
            this.setState({idKnown:this.props.idKnown});
            //console.log("id " + this.props.location.state.id);
            this.setState({id:this.props.id});
        } else {
            if (this.props && this.props.location.state) {
                //console.log("entered");
                if (this.props.location.state.idKnown !== undefined) {
                    //console.log("idKnown " + this.props.location.state.idKnown);
                    this.setState({idKnown:this.props.location.state.idKnown});
                }
                if (this.props.location.state.id !== undefined) {
                    //console.log("id " + this.props.location.state.id);
                    this.setState({id:this.props.location.state.id});
                }
            }
        }
    }
   
    render() {
        if (!this.state.userSearch) {
            return (
                <div className="page-wrapper">
                    <header>
                        <h1>Single Campus View</h1>
                    </header>
                    {this.state.idKnown && this.state.id !== '' ? <GetCampus id={this.state.id}/> : <SingleCampusForm />}
                </div>
            )
        } else {
            return (
                <div className="page-wrapper">
                    {this.state.idKnown && this.state.id !== '' ? <GetCampus id={this.state.id}/> : <SingleCampusForm />}
                </div>
            )  
        }          
    }
}

export default SingleCampus;
