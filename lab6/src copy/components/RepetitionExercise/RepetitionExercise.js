import React, { useState } from 'react';

function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
};

const Reset = () => {
    setCount(0);
};

return (
    <div>
        <p>{name}</p>
        <p>Repetitions: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={Reset}>Reset</button>
    </div>
);
}

export default RepetitionExercise;