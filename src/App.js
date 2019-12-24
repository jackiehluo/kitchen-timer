import React, { useState } from "react";
import { NewTimer } from "./components/NewTimer";
import { Timer } from "./components/Timer";

const sound = new Audio(
  "https://cdn.glitch.com/ea7d6161-2ddf-493f-8b97-eb0e841775e3%2Fanalog-watch-alarm_daniel-simion.mp3?v=1575000876129"
);

const App = () => {
  const [timers, setTimers] = useState([]);

  return (
    <div className="container">
      <NewTimer sound={sound} timers={timers} setTimers={setTimers} />
      {timers.map((timer, idx) => (
        <Timer
          key={`${timer.label}-${timer.seconds}`}
          sound={sound}
          cancel={() => {
            const newTimers = [...timers];
            newTimers.splice(idx, 1);
            setTimers(newTimers);
          }}
          {...timer}
        />
      ))}
    </div>
  );
};

export default App;
