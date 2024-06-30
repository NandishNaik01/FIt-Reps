// import React from 'react'
import { useState } from "react";
import "../cssfiles/head.css";
import axios from "axios";
// const axios = require("axios");

function Head() {
  const [workout, setWorkout] = useState("");
  const [sets, setSets] = useState("");
  function addwork() {
    axios
      .post("http://localhost:3001/", { workout: workout, sets: sets })
      .then((result) => console.log(result))
      .then((err) => {
        console.log(err);
      });
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
              setWorkout(e.target.value);
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
      {/* hello */}
    </div>
  );
}

export default Head;
