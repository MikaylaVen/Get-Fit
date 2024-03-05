import React, { useState, useRef } from 'react';

function DurationExercise({ name }) {
    const [duration, setDuration] = useState(0);
    const [Plank, setPlank] = useState(false);
    const timerRef = useRef(null);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    const handleStart = () => {
        setPlank(true);
        timerRef.current = setInterval(() => {
          setDuration((prevDuration) => prevDuration + 1);
        }, 1000);
      };

        const handleReset= () => {
            setPlank(false);
            setDuration(0);
            clearInterval(timerRef.current);
        };

        return(
            <div>
                <p>{name}</p>
                <p>Duration: {formatTime(duration)}</p>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
}

export default DurationExercise;