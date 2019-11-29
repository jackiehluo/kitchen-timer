import React, { useState } from 'react';

const getSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
}

export const NewTimer = ({ timers, setTimers }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="timer-inputs">
      <input type="number" name="Hours" min="0" max="60" onChange={(e) => setHours(e.target.value)}></input>
      <input type="number" name="Minutes" min="0" max="60" onChange={(e) => setMinutes(e.target.value)}></input>
      <input type="number" name="Seconds" min="0" max="60" onChange={(e) => setSeconds(e.target.value)}></input>
      
      <button className="button" onClick={() => setTimers([...timers, getSeconds(hours, minutes, seconds)])}>
        Add Timer
      </button>
    </div>
  );
};