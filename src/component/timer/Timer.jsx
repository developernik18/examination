import { useEffect, useState } from "react";
import "./timer.css";

const millisecondsToSeconds = 1000;
const secondsToMinutes = 60;
const minutesToHours = 60;
const totalTimeInSeconds = 7200;
const deadline =
  new Date().getTime() + totalTimeInSeconds * millisecondsToSeconds;

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline) => {
    const time = deadline - Date.now();
    console.log(time);
    setHours(
      Math.floor(
        time / (millisecondsToSeconds * secondsToMinutes * minutesToHours)
      )
    );
    setMinutes(
      Math.floor(
        (time / (millisecondsToSeconds * secondsToMinutes)) % minutesToHours
      )
    );
    setSeconds(Math.floor((time / millisecondsToSeconds) % secondsToMinutes));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Exam ends in {hours.toString().length < 2 ? `0${hours}` : hours} 
      : {minutes.toString().length < 2 ? `0${minutes}` : minutes} 
      : {seconds.toString().length < 2 ? `0${seconds}` : seconds}
    </div>
  );
}
