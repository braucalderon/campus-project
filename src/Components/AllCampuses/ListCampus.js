import React, { Component } from 'react'
import ListCampusCard from '../AllCampuses/ListCampusCard'
import fire from '../Firebase/firebase.js'

// - [ ] Write a `campuses` model with the following information:
//   - [ ] name - not empty or null
//   - [ ] imageUrl - with a default value
//   - [ ] address - not empty or null
//   - [ ] description - extremely large text

class ListCampus extends Component {
    constructor() {
        super();

        this.state = {
            listOfCampuses:[]
        }        
    }

    componentDidMount() {
        const campusRef = fire.database().ref('Campus');
        campusRef.on('value', (snapshot) => {
            if (snapshot.hasChildren()) {
                const campuses = snapshot.val();
                const campusArr = [];

                for (let id in campuses) {
                    campusArr.push(campuses[id]);
                }

                this.setState({listOfCampuses:campusArr});
            }
        });
        
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {
        let arr = this.state.listOfCampuses.map((element) => <ListCampusCard id={element.id} name={element.name} imageUrl={element.imageUrl} address={element.address} description={element.description}/>);
        
        if (this.state.listOfCampuses.length === 0) {
            return (
                <div className="page-wrapper">
                    <header>
                        <h1>List of All Campuses</h1>
                    </header>

                    <section>
                        <h3>Currently, there are no campuses to be listed. Add a campus below.</h3>
                    </section>
                </div>
            )
        } else {
            return (
                <div className="page-wrapper">
                    <header>
                        <h1>List of All Campuses</h1>
                    </header>

                    <section>
                        <h5>Select a Campus to View More Details</h5>

                        {arr}
                    </section>
                </div>
            );
        }
    }
}

export default ListCampus;
