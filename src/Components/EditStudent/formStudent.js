import React, { useState } from "react";
import { db } from "../Firebase/firebase";

const StudentForm = ({ idBoolean, emplidId }) => {
  // IdBoolean connected to editStudent component
  const [name, setName] = useState("");
  const [emplid, setEmplid] = useState('');
  const [campus, setCampus] = useState("");
  const [copyEmplid, setCopyEmplid] = useState('');
  const [enrollment, setEnrollment] = useState('yes');
  const [studentMessage, setStudentMessage] = useState(false);
  

  const onChangeHandlerName = (event) => {
    const nValue = event.target.value;
    setName(nValue);
  };
  const onChangeHandlerCampus = (event) => {
    const cValue = event.target.value;
    setCampus(cValue);
  };
  const onChangeHandlerEmplid = (event) => {
    const eValue = event.target.value;
    setEmplid(eValue);
    setCopyEmplid(eValue)
  };
  const onChangeHandlerEnrollment = (event) => {
    const enValue = event.target.value;
    setEnrollment(enValue);
  };

  const onClickHandlerSubmit = (event) => {
    event.preventDefault();
    const snapShot = db.doc(`campus/student:${emplid}`);
    // const ref = snapShot.get();
    // console.log(snapShot);
    // iterates thru the all the documents in cloud firestore
    snapShot.get().then((doc) => {
      if (!doc.exists) {
        snapShot.set({
          Name: name,
          Campus: campus,
          Emplid: emplid,
          Enrollment: enrollment,
        });
        alert("New Submission has been successful");
        reset();
        setStudentMessage(false);
      } else {
        setStudentMessage(true);
        reset();
      }
    });
  };
  const onClickHandlerEdit = (event) => {
    event.preventDefault();
    const snapShot = db.doc(`campus/student:${emplidId}`);
    // console.log(emplid);
    snapShot.update({
      "Campus": campus,
      "Name": name,
      "Enrollment": enrollment,
    }).then(() => {
      alert(`Student ${name} with emplid ${emplidId} has been updated successfully`)
      reset();
    })

  };
  const reset = () => {
    setCampus("");
    setEmplid("");
    setName("");
    setEnrollment("");
  };
  

  return (
    <React.Fragment>
      <div>
        <form
          style={{ display: "flex", flexFlow: "column", width: '50vh' }}
          onSubmit={idBoolean ? onClickHandlerSubmit : onClickHandlerEdit}
        >
          <label style={{ fontSize: "3vh" }}>Student Form</label>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            onChange={onChangeHandlerName}
            value={name}
            required
          />
          <input
            type="text"
            name="campus"
            placeholder="Enter Campus"
            onChange={onChangeHandlerCampus}
            value={campus}
            required
          />
          {idBoolean ? (
            <input
              type="text"
              name="emplid"
              placeholder="Enter Student ID"
              onChange={onChangeHandlerEmplid}
              value={emplid}
              required
            />
          ) : (
            <input
              type="text"
              name="emplid"
              placeholder="Enter Student ID"
              defaultValue={emplidId}
              disabled
              
            />
          )}

          <label>Enrollment</label>
          <select name="enrollmment" onChange={onChangeHandlerEnrollment} >
            <option>Choose an Option</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
  
          </select>
          <input type="Submit" />
        </form>

        <div>
          {studentMessage ? <h3>{`Student ID ${copyEmplid} is already in the system`}</h3> : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default StudentForm;
