import { useEffect, useState } from "react";
import Head from "./Input";
import axios from "axios";
import "../cssfiles/home.css";

function AllComp() {
  const [workoutDetails, setWorkoutDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setWorkoutDetails(result.data));
  }, []);

  function increasectr(workoutId) {
    // Find the workout with the matching ID and increment its sets
    const updatedWorkouts = workoutDetails.map((workout) => {
      if (workout._id === workoutId) {
        return {
          ...workout,
          sets: workout.sets + 1,
        };
      }
      return workout;
    });

    // Update state with the new workout details
    setWorkoutDetails(updatedWorkouts);
  }

  function decreasectr(workoutId) {
    // Find the workout with the matching ID and decrement its sets
    const updatedWorkouts = workoutDetails.map((workout) => {
      if (workout._id === workoutId && workout.sets > 0) {
        return {
          ...workout,
          sets: workout.sets - 1,
        };
      }
      return workout;
    });

    // Update state with the new workout details
    setWorkoutDetails(updatedWorkouts);
  }

  return (
    <div>
      <Head />
      {workoutDetails.length === 0 ? (
        <div>
          <h2 style={{ textAlign: "center" }}>NO records</h2>
        </div>
      ) : (
        workoutDetails.map((workouts) => (
          <div className="whole" key={workouts._id}>
            <div className="individualItems" key={workouts._id}>
              <p>{workouts.workout}</p>
              <div className="setsContainer">
                {workouts.sets <= 9 ? (
                  workouts.sets === 0 ? (
                    <div className="setsContainer">
                      <button
                        className="icon minus"
                        onClick={() => decreasectr(workouts._id)}>
                        &#8722;
                      </button>
                      <p>
                        <strike>Done &#10003;</strike>
                      </p>
                      <button
                        className="icon plus"
                        onClick={() => increasectr(workouts._id)}>
                        &#43;
                      </button>
                    </div>
                  ) : (
                    <div className="setsContainer">
                      <button
                        className="icon minus"
                        onClick={() => decreasectr(workouts._id)}>
                        &#8722;
                      </button>
                      <p>0{workouts.sets}</p>
                      <button
                        className="icon plus"
                        onClick={() => increasectr(workouts._id)}>
                        &#43;
                      </button>
                    </div>
                  )
                ) : (
                  <div className="setsContainer">
                    <button
                      className="icon minus"
                      onClick={() => decreasectr(workouts._id)}>
                      &#8722;
                    </button>
                    <p>{workouts.sets}</p>
                    <button
                      className="icon plus"
                      onClick={() => increasectr(workouts._id)}>
                      &#43;
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllComp;
