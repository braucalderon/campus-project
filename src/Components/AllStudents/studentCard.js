import React from "react";
import "./student.css";
import { Link } from "react-router-dom";


const StudentCard = ({
  name,
  lastName,
  campus,
  enrollment,
  clicked,
  linkTo,
  bool,
  emplid,
  photo
}) => {
  return (
    <React.Fragment>
    
      <div className="studentCard" style={{fontSize: '3vh', width:'50vh', backgroundColor: 'lightsteelblue'}}>
       
       
      <div> 
        <h4 style={{ textAlign: "center" }}>Student</h4>
        <h4 style={{ textAlign: "center" }}>
          {name} {lastName}
        </h4>
        <h5>Campus: {campus}</h5>
        <h5>Enrollment: {enrollment}</h5>
      </div>
        {emplid ? <h5>Emplid: {emplid}</h5> : null}
        
        {bool ? <div style={{ margin: "3vh 0", textAlign: "right" }}>
            <Link
              to={linkTo}
              onClick={clicked}
              style={{
                textDecoration: "none",
                // border: "black solid 1px",
                padding: ".4vh 2vh",
                borderRadius: '1vh',
                backgroundColor: 'azure'
                
              }}
            >
              Edit
            </Link> </div>: null}
      
        
      </div>
    </React.Fragment>
  );
};
export default StudentCard;
