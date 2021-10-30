import React from "react";

const ButtonStudent = ({ name, clicked, disable }) => {
  let btn = !disable ? (
    <button
      onClick={clicked}
      style={{
        backgroundColor: "lightseagreen",
        width: "25vh",
        height: "5vh",
        borderRadius: "1vh",
        color: "white",
        border: "none",
        cursor: 'pointer',
        margin: '1vh'
      }}
    >
      {name}
    </button>
  ) : (
    <button  style={{
      backgroundColor: "#46574B ",
      width: "25vh",
      height: "5vh",
      borderRadius: "1vh",
      color: "white",
      border: "none",
      margin: '1vh'
      
    }} disabled >{name}</button>
  );
  return <div >{btn}</div>;
};
export default ButtonStudent;
