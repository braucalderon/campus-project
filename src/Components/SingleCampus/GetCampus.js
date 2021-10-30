import React, { Component } from 'react'
import fire from '../Firebase/firebase.js'
import EditCampusForm from '../SingleCampus/EditCampusForm';
import No_Img_Avail from '../../Images/No_Img_Avail.jpeg';

// [   ] see details about a single campus, including enrolled students (if any)
// [   ] see an informative message if no students are enrolled at that campus
// [   ] navigate to any student’s single student view 
// [   ] delete the campus (and elegantly handle associated students)
// [   ] edit campus information (including adding/removing students)
// [   ] with a validated form displaying real-time error messages
// [   ] which redirects back to the single campus view

class GetCampus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:this.props.id,
            campus:undefined,
            defaultAdded:false,
            imageUrl:No_Img_Avail
        }
    }

    componentDidMount() {
        console.log(this.state.id);
        const campusRef = fire.database().ref('Campus');
        campusRef.on('value', snapshot => {
            if (snapshot.hasChildren()) {
                campusRef.orderByKey().once('value', snapshot => {
                    snapshot.forEach((child) => {
                        console.log("State id: " + this.state.id + ", child id: " + child.val().id);
                        if (this.state.id == child.val().id) {
                            console.log(child.val());
                            this.setState({campus:child.val(), imageUrl:child.val().imageUrl});
                        }
                     });
                });
            }
        });
    }

    addDefaultImage = (event) => {
        if (!this.state.defaultAdded) {
            this.setState({defaultAdded:true, imageUrl:No_Img_Avail});
        }
    }

    render() {
        if (this.state.campus) {
            console.log("campus is defined");
            return (
                <>
                <div className="campus-card">
                    <h3>{this.state.campus.name}</h3>

                    <div>
                        <ul>
                            <li>ID: {this.state.campus.id}</li>
                            <li>{this.state.campus.address}</li>
                            <li>{this.state.campus.description}</li>
                        </ul>

                        <img src={this.state.imageUrl} alt="Campus" onError={this.addDefaultImage}></img>
                    </div>
                </div>

                <EditCampusForm id={this.state.id} />
                </>
            )
        } else {
            return (
                <div id="error">
                    <h4>This campus cannot be found.</h4>
                </div>
            )
        }
        
    }
}

export default GetCampus;
