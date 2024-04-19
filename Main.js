import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const [moveMinutes, setMoveMinutes] = useState('');
  const [distanceWalked, setDistanceWalked] = useState('');
  const [heartPoints, setHeartPoints] = useState('');
  const [averageSpeed, setAverageSpeed] = useState('');
  const [caloriesBurnt, setCaloriesBurnt] = useState('');

  const calculateCaloriesBurnt = () => {
    // Assuming a simple calculation for demonstration purposes
    const calories = (moveMinutes * distanceWalked * heartPoints * averageSpeed) / 10000;
    setCaloriesBurnt(calories);
  };

  return (
    <div>
      <div className="title-box animated fadeIn">
        <h1 className="title">Calories Burnt Calculator</h1>
      </div>
      <div className="main-container">
        <div className="column">
          <label htmlFor="moveMinutes">Move Minutes Count</label>
          <input
            type="number"
            id="moveMinutes"
            value={moveMinutes}
            onChange={(e) => setMoveMinutes(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="distanceWalked">Distance Walked (km)</label>
          <input
            type="number"
            id="distanceWalked"
            value={distanceWalked}
            onChange={(e) => setDistanceWalked(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="heartPoints">Heart Points</label>
          <input
            type="number"
            id="heartPoints"
            value={heartPoints}
            onChange={(e) => setHeartPoints(e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="averageSpeed">Average Speed (km/h)</label>
          <input
            type="number"
            id="averageSpeed"
            value={averageSpeed}
            onChange={(e) => setAverageSpeed(e.target.value)}
          />
        </div>
        <div className="column">
          <button onClick={calculateCaloriesBurnt}>Calculate</button>
          {caloriesBurnt && <p>Calories Burnt: {caloriesBurnt}</p>}
        </div>
      </div>
    </div>
  );
};

export default Main;
