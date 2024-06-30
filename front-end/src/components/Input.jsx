// import React from 'react'
import { useState } from "react";
import "../cssfiles/head.css";
function Head() {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  function addwork() {
    console.log(name);
    console.log(sets);
  }
  return (
    <div>
      <div className="HeaderAndInput">
        <h1 className="header">Fit-Reps</h1>
        <div className="inputCont">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Workout name"
            className="inputfields"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Total Sets"
            className="inputfields"
            onChange={(e) => {
              setSets(e.target.value);
            }}
          />
          <button
            type="button"
            className="inputfields"
            id="addbtn"
            onClick={addwork}>
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
