import React, { Component } from 'react'
import CampusImage from '../../Images/Homepage_Campus.jpeg'
import '../../leah.css'

class HomePage extends Component {
    render() {
        
        return (
            <div className="page-wrapper">
                <header>
                    <h1>Welcome to the Campus/Student Database</h1>
                </header>

                <section id="homepage-section">
                    <div>
                    <img src={CampusImage} alt="Campus"></img>

                    <p>
                        Cupidatat id Lorem in magna ea officia. Qui non laborum sit esse. Fugiat sit adipisicing culpa
                        fugiat consequat mollit ex. Non deserunt sunt quis proident fugiat qui dolor irure et et voluptate 
                        consequat. Nostrud cupidatat enim Lorem officia consequat. Nostrud sunt exercitation officia non. 
                        Dolore ad anim consectetur consequat reprehenderit.
                        <br></br>
                        <br></br>
                        Cupidatat id Lorem in magna ea officia. Qui non laborum sit esse. Fugiat sit adipisicing culpa
                        fugiat consequat mollit ex. Non deserunt sunt quis proident fugiat qui dolor irure et et voluptate 
                        consequat. Nostrud cupidatat enim Lorem officia consequat. Nostrud sunt exercitation officia non. 
                        Dolore ad anim consectetur consequat reprehenderit.
                    </p>
                    </div>
                </section>
            </div>
        );
    } 
}

export default HomePage;

