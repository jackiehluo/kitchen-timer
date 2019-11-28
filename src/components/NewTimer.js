import React, { useState, useEffect } from 'react';

const getTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor((totalSeconds % 3600) % 60);
  return [hours, minutes, seconds];
}

export const NewTimer = () => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [seconds, setSeconds] = useState(initialSeconds);

  return (
    <div className="app">
      <input type="number" name="Hours" min="0" max="60" onChange={(e) => }></input>
      <input type="number" name="Minutes" min="0" max="60"></input>
      <input type="number" name="Seconds" min="0" max="60"></input>
      
      <button className="button" onClick={() => setTimers([...timers, ])}>
        Add Timer
      </button>
    </div>
  );
};