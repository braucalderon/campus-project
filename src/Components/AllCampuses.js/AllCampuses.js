import React, { Component } from 'react'
import ListCampus from '../AllCampuses/ListCampus'
import AddCampus from '../AllCampuses/AddCampus'
// import HomePage from '../HomePage/HomePage'
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class AllCampuses extends Component {

    render() {

        return (
            <div>
                <ListCampus />
                <AddCampus />
            </div>
        );
    }
}

export default AllCampuses;