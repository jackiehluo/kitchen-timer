import React, { useState } from "react";

const getSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const NewTimer = ({ sound, timers, setTimers }) => {
  const [label, setLabel] = useState("");

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const submit = () => {
    sound.play();
    sound.pause();
    sound.currentTime = 0;
    
    setTimers([
      ...timers,
      { label, initialSeconds: getSeconds(hours, minutes, seconds) }
    ]);

    setLabel("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="new-timer">
      <div>
        <input
          type="text"
          placeholder="turkey"
          value={label}
          onChange={e => setLabel(e.target.value)}
        ></input>
      </div>
      <div className="new-timer--times">
        <div>
          <input
            type="number"
            name="Hours"
            placeholder="0"
            value={hours}
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
            value={minutes}
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
            value={seconds}
            min="0"
            max="60"
            onChange={e => setSeconds(e.target.value)}
          ></input>
          seconds
        </div>
      </div>

      <button onClick={submit}>Add Timer</button>
    </div>
  );
};
