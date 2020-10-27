import React, { useState } from "react";
import Copyright from "./Copyright.jsx";

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  function stopPomodoro() {
    window.location.reload(false);
  }

  function playSeconds() {
    setSeconds((last_second) => {
      while (last_second !== 0) {
        return last_second - 1;
      }
      return 59;
    });
  }

  function playMinutes() {
    setMinutes((last_minute) => {
      while (last_minute !== 0) {
        return last_minute - 1;
      }
      return -1;
    });
  }

  function startPomodoro() {
    setMinutes(minutes - 1);
    setSeconds(59);
    setInterval(playSeconds, 1000);
    setInterval(playMinutes, 60000);
  }

  return (
      <div>
      <h1 className="heading">Pomodoro</h1>
        
        <br />
        {minutes === -1 ? (
          <h2 className="completion-text">Congrats you completed your pomodoro! <br />Click reset for a new timer.</h2>
        ) : (
          
          <h2 className="time">
            {minutes.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
            :
            {seconds.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
          </h2>
          
        )}
               
        <button onClick={startPomodoro}>START</button>
        <br /> <br />
        <button onClick={stopPomodoro}>RESET</button>

        <footer>
          <Copyright />
        </footer>
    </div>
  );
}

export default Pomodoro;