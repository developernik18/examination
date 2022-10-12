import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExamDurationById } from "../../data/allExamData";
import "./timer.css";

const millisecondsToSeconds = 1000;
const secondsToMinutes = 60;
const minutesToHours = 60;

export default function Timer() {
  const params = useParams();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const totalTimeInSeconds = getExamDurationById(params.id);
  const deadline = new Date().getTime() + totalTimeInSeconds * millisecondsToSeconds;
  
  const getTime = (deadline) => {
    const time = deadline - Date.now();

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
