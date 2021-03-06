import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeUp } from "../redux/actions/actions";

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const tm = useSelector((state) => state.timeUpReducer);
  const tst = false;

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
    console.log("reset");
    setTime([parseInt(0), parseInt(0), parseInt(0)]);
    setPaused(true);
    setOver(true);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    console.log("timerID : ", timerID);
    if (timerID === 10 && timerID <= 10) {
      dispatch(timeUp(true));
      reset();
    }
    return () => clearInterval(timerID);
  });

  useEffect(() => {}, [tm]);

  return (
    <>
      <div className="d-flex justify-content-center">
      <span className="clock-icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span>
        <p>{`${s.toString().padStart(2, "0")}`}</p>
        {/* ${h.toString().padStart(2, "0")}: */}
        {/* {m.toString().padStart(2, "0")}: */}
      </div>
    </>
  );
};

export default Timer;
