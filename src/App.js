import React, { useState } from "react";
import { NewTimer } from "./components/NewTimer";
import { Timer } from "./components/Timer";

const App = () => {
  const [timers, setTimers] = useState([]);

  return (
    <React.Fragment>
      <NewTimer />
      {timers.map(timer => (
        <Timer initialSeconds={timer}></Timer>
      ))}
    </React.Fragment>
  );
};

export default App;
