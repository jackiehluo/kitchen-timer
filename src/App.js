import React, { useState } from "react";
import { Timer } from "./components/Timer";

const App = () => {
  const [timers, setTimers] = useState([]);

  return (
    <React.Fragment>
      {timers.map(timer => (
        <Timer initialSeconds={timer}></Timer>
      ))}
    </React.Fragment>
  );
};

export default App;
