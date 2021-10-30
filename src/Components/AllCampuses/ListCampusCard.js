import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import No_Img_Avail from '../../Images/No_Img_Avail.jpeg'

class ListCampusCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:this.props.id,
            name:this.props.name,
            imageUrl:this.props.imageUrl,
            address:this.props.address,
            description:this.props.description,
            defaultAdded:false
        }
    }

    addDefaultImage = (event) => {
        if (!this.state.defaultAdded) {
            this.setState({defaultAdded:true, imageUrl:No_Img_Avail});
        }
    }

    render() {
        return (
            <div className="campus-card">

                <Link to= {{
                    pathname: "/singleCampus",
                    state: {idKnown:true, id:this.state.id}
                }} id="campus-card-link"><h3>{this.state.name}</h3></Link>

                <div>
                    <ul>
                        <li>ID: {this.state.id}</li>
                        <li>{this.state.address}</li>
                        <li>{this.state.description}</li>
                    </ul>

                    <img src={this.state.imageUrl} alt="Campus" onError={this.addDefaultImage}></img>
                </div>
            </div>
        )
    }
}

export default ListCampusCard;