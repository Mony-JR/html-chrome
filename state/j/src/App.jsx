import React, { useState } from "react";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [show,setshow]=useState()
  const api = "https://hp-api.onrender.com/api/characters/house/gryffindor";
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      setStudentList(data);
    })
    .catch((error) => {
      console.log("Error while fetcing data: ", error);
    });

  return (
    <>
    <h1>Hello</h1>
      <h1>List of students in Howarts</h1>
      {show&&studentList.map((student) => (
        <>
          <li>{student.name}</li>
        </>
      ))}
      <button onClick={()=>setshow(!show)}>Show All</button>
    </>
  );
}

export default App