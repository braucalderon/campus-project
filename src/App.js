import React from 'react';
// import UserSignIn from '../src/Components/Firebase/user';
import {HashRouter, Switch, Route} from 'react-router-dom';
import AllCampuses from './Components/AllCampuses.js/AllCampuses.js';
import Navigation from './Components/Navigation/Navigation.js'
import SingleCampus from './Components/SingleCampus.js/SingleCampus.js';
import AllStudents from './Components/AllStudents/allStudents.js';
import EditStudent from './Components/EditStudent/editStudent.js';
import HomePage from './Components/HomePage/HomePage.js';
import './leah.css'

const App = () => {
  return (
    <HashRouter>

    <Navigation />
      
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/allCampuses" component={AllCampuses}></Route>
      <Route path="/singleCampus" component={SingleCampus}></Route>
      <Route path="/singleStudent" component={AllStudents}></Route>
      <Route path="/editStudent" component={EditStudent} />
    </Switch>

    </HashRouter>
  );
}

export default App;
