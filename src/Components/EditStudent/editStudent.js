import React, { useState } from "react";
import {
  selectEmplid,
  selectLast,
  selectFirst,
  selectCollege,
  selectEnrollment
} from "../../redux/userId/userIdSlice";
import { useSelector } from "react-redux";
import StudentCard from "../AllStudents/studentCard";
import StudentForm from "./formStudent";
import ButtonStudent from "./buttonStudent";
import "./editStudent.css";


const EditStudent = () => {
  const emplid = useSelector(selectEmplid);
  const college = useSelector(selectCollege);
  const first = useSelector(selectFirst);
  const last = useSelector(selectLast);
  const enrollment = useSelector(selectEnrollment);
  const [editButton, setEditButton] = useState(true);
  const [editButtonNew, setEditButtonNew] = useState(false);

  const onClickHandlerBtn = () => {
    setEditButton(false);
  };
  const onClickHandlerBtnNew = () => {
    setEditButton(false);
    setEditButtonNew(true);
  };



  let editBtn = editButton ? (
    <ButtonStudent name="Edit Student" clicked={onClickHandlerBtn} />
  ) : (
    <ButtonStudent name="Edit Student" disable={true} />
  );

  let editBtnNew = editButton ? (
    <ButtonStudent name="New Student" clicked={onClickHandlerBtnNew} />
  ) : (
    <ButtonStudent name="NewStudent" disable={true} />
  );

  let form = !editButton ? <StudentForm idBoolean={editButtonNew} emplidId={emplid} /> : null;

  return (
    <React.Fragment>
      <div className="editStudent">
        {emplid ? (
          <StudentCard
            name={first}
            lastName={last}
            emplid={emplid}
            campus={college}
            enrollment={enrollment}
          />
        ) : null}
      </div>
      <div className="editStudent">
        {editBtn}
        {editBtnNew}
      </div>
      <div className="editStudent">{form}</div>
    </React.Fragment>
  );
};
export default EditStudent;
