import React, { useState } from 'react';

const RunningExercise = () => {
    // storing lap times
    const [lapTimes, setLapTimes] = useState([]);
  
    // current running time 
    const [Timer, setTimer] = useState(0);
  
    // function for recording laps
    const recordLap = () => {
      // adding to current lap time lists 
      setLapTimes([...lapTimes, Timer]);
    };
  
    // Timer Function to record lap times
    const updateTimer = () => {
      setTimer(prevTime => prevTime + 1);
    };
  
    setInterval(updateTimer, 1000);
  
    return (
      <div>
        <p>Timer: {Timer} seconds</p>
        <button onClick={recordLap}>Record Lap</button>
        <div>
          <h3>Lap Times</h3>
          <ul>
            {lapTimes.map((lapTime, index) => (
              <li key={index}>Lap {index + 1}: {lapTime} seconds</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default RunningExercise;