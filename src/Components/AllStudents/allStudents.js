import React, { useState, useEffect } from "react";
import StudentCard from "./studentCard";
import "./student.css";
import { useDispatch } from "react-redux";
import { onClickEmplid } from "../../redux/userId/userIdSlice";
import { db } from "../Firebase/firebase";

const AllStudents = (props) => {
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    db.collection("campus")
      .get()
      .then((querySnapShot) => {
        const data = querySnapShot.docs.map((item) => item.data());
        setStudentData(data);
      });
  }, []);

  const onClickStudentCard = (
    emplidId,
    firstName,
    lastName,
    collegeName,
    enrollment
  ) => {
    dispatch(
      onClickEmplid({
        emplid: emplidId,
        first: firstName,
        last: lastName,
        college: collegeName,
        enrollment: enrollment,
      })
    );
  };

  const card = studentData.map((item) => (
    <StudentCard
      key={item.Emplid}
      campus={item.Campus}
      name={item.Name}
      lastName={item.lastName}
      linkTo="/editStudent"
      bool={true}
      enrollment={item.Enrollment}
      clicked={() =>
        onClickStudentCard(
          item.Emplid,
          item.Name,
          item.lastName,
          item.Campus,
          item.Enrollment
        )
      }
    />
  ));

  return <div className="studentDisplayCard">{card}</div>;
};
export default AllStudents;
