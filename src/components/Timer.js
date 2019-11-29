import React, { useState, useEffect } from "react";

const audio = new AudioContext();

const beep = () => {
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = 600;
  oscillator.type = "sine";
  gain.connect(audio.destination);
  gain.gain.value = 0.1;
  oscillator.start(audio.currentTime);
  oscillator.stop(audio.currentTime + 1);
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
    <div className="timer">
      <div>
        {hh >= 0 ? `${hh} h ` : ""}
        {mm >= 0 ? `${mm} m ` : ""}
        {ss >= 0 ? `${ss} s` : ""}
      </div>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
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
