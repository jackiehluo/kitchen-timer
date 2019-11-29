import React, { useState } from "react";

const getSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const NewTimer = ({ timers, setTimers }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="new-timer">
      <div>
        <input type="text"></input>label
      </div>
      <div className="new-timer--times">
        <div>
          <input
            type="number"
            name="Hours"
            placeholder="0"
            min="0"
            max="60"
            onChange={e => setHours(e.target.value)}
          ></input>
          hours
        </div>
        <div>
          <input
            type="number"
            name="Minutes"
            placeholder="0"
            min="0"
            max="60"
            onChange={e => setMinutes(e.target.value)}
          ></input>
          minutes
        </div>
        <div>
          <input
            type="number"
            name="Seconds"
            placeholder="0"
            min="0"
            max="60"
            onChange={e => setSeconds(e.target.value)}
          ></input>
          seconds
        </div>
      </div>

      <button
        onClick={() =>
          setTimers([...timers, getSeconds(hours, minutes, seconds)])
        }
      >
        Add Timer
      </button>
    </div>
  );
};
