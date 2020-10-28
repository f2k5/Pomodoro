import React, { useState } from "react";
import Copyright from "./Copyright.jsx";

const ONE_SECOND = 1000;
const SET_TO_59_SECONDS = 59;
const SET_TO_24_MINUTES = 1;

function Pomodoro() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  var player;

  function stopPomodoro() {
    window.location.reload(false);
  }

  function playSeconds() {
    setSeconds((last_second) => {
      while (last_second !== 0) {
        return last_second - 1;
      }
      playMinutes();
      return SET_TO_59_SECONDS;
    });
  }

  function playMinutes() {
    setMinutes((last_minute) => {
      while (last_minute !== 0) {
        return last_minute - 1;
      }
      clearInterval(player);
      return -1;
    });
  }

  function startPomodoro() {
    setMinutes(SET_TO_24_MINUTES);
    setSeconds(SET_TO_59_SECONDS);
    player = setInterval(playSeconds, ONE_SECOND);
  }

  return (
      <div>
        <h1 className="heading">Pomodoro Timer</h1>
        
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