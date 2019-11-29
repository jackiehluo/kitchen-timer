import React, { useState } from "react";
import { NewTimer } from "./components/NewTimer";
import { Timer } from "./components/Timer";

const App = () => {
  const [timers, setTimers] = useState([]);

  return (
    <div className="container">
      <NewTimer timers={timers} setTimers={setTimers} />
      {timers.map(timer => (
        <Timer initialSeconds={timer}></Timer>
      ))}
    </div>
  );
};

export default App;
