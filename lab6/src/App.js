import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise/RepetitionExercise';
import DurationExercise from './components/DurationExercise/DurationExercise';
import RunningExercise from './components/RunningExercise/RunningExercise';
import './App.css';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const renderExerciseComponent = () => {
    switch (selectedExercise.type) {
      case 'repetition':
        return <RepetitionExercise name ={selectedExercise.name} />;
        case 'duration':
        return <DurationExercise name ={selectedExercise.name} />;
        case 'running': 
        return <RunningExercise name ={selectedExercise.name} />;
        default:
          return null;
    }
  };
  
  return (
    <div className="App">
      <div className="menu">
        <button onClick={() => handleExerciseClick({ type:'repetition', name: 'Push-ups' })}>Push-ups</button>
        <button onClick={() => handleExerciseClick({ type: 'duration', name: 'Plank' })}>Plank</button>
        <button onClick={() => handleExerciseClick({ type: 'running', name: 'Running' })}>Running</button>
      </div>
      {selectedExercise && (
        <div className="exercise-screen">
          <h2>{selectedExercise.name}</h2>
          {renderExerciseComponent()}
        </div>
      )}
      </div>
  );
      }
      
export default App;
