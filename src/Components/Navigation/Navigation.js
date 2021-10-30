import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../leah.css'


class Navigation extends Component {

    render() {
        return (
            <div id="nav-div">
                <ul id="nav-ul">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/allCampuses" className="link">All Campuses</Link></li>
                    <li><Link to= {{
                        pathname: "/singleCampus",
                        state: {idKnown:false}
                        }} className="link">Single Campus</Link>
                    </li>
                    <li><Link to='/singleStudent' className="link">All Students</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
