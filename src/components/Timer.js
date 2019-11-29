import React, { useState, useEffect } from "react";

const audio = new AudioContext();

const beep = () => {
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = 400;
  oscillator.type = "square";
  gain.connect(audio.destination);
  gain.gain.value = 5 * 0.01;
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + 1);
  v.start(audio.currentTime);
  v.stop(audio.currentTime + 1);
  v.start(audio.currentTime);
  v.stop(audio.currentTime + 1);
};

const getTime = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor((totalSeconds % 3600) % 60);
  return [hours, minutes, seconds];
};

export const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  const [hh, mm, ss] = getTime(seconds);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds <= 0) {
          beep();
          setSeconds(0);
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 1000);
    } else if (!isRunning && seconds <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div className="app">
      <div className="time">
        {hh ? `${hh} h ` : ""}
        {mm ? `${mm} min ` : ""}
        {ss ? `${ss} sec` : ""}
      </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isRunning ? "active" : "inactive"
          }`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="button"
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
