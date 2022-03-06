import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeUp } from "../redux/actions/actions";

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const tm = useSelector((state) => state.timeUpReducer);

  const dispatch = useDispatch();
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    console.log("timerID : ", timerID);
    if (timerID > 30) {
      dispatch(timeUp(true));
    }
    return () => clearInterval(timerID);
  });

  return (
    <>
      <div className="d-flex justify-content-center">
        &#x278A;&nbsp;
        <p>{`${s.toString().padStart(2, "0")}`}</p>
        {/* ${h.toString().padStart(2, "0")}: */}
        {/* {m.toString().padStart(2, "0")}: */}
      </div>
    </>
  );
};

export default Timer;
