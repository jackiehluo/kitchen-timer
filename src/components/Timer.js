import React, { useState, useEffect } from "react";

const sound = new Audio(
  "https://cdn.glitch.com/ea7d6161-2ddf-493f-8b97-eb0e841775e3%2Fanalog-watch-alarm_daniel-simion.mp3?v=1575000876129"
);

const getTime = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor((totalSeconds % 3600) % 60);
  return [hours, minutes, seconds];
};

export const Timer = ({ label, initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  const [hh, mm, ss] = getTime(seconds);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds <= 0) {
          sound.play();
          setSeconds(0);
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 1000);
    } else if (!isRunning && seconds <= 0) {
      clearInterval(interval);
    }
    sound.play();
    sound.pause();
    sound.currentTime = 0;
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const toggle = () => {
    sound.pause();
    sound.currentTime = 0;
    setIsRunning(!isRunning);
  };

  const reset = () => {
    sound.pause();
    sound.currentTime = 0;
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      {label && <div>{label}</div>}
      <div className="timer--times">
        {hh >= 0 ? `${hh} h ` : ""}
        {mm >= 0 ? `${mm} m ` : ""}
        {ss >= 0 ? `${ss} s` : ""}
      </div>
      <div>
        <button onClick={toggle}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
