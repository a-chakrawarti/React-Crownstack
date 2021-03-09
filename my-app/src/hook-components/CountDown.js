import React, { useState, useEffect, useCallback, useRef } from "react";

const nextYear = new Date().getFullYear() + 1;
var expiryDate = new Date(`January 01 ${nextYear} 00:00:00`);

const CountDown = () => {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const getDate = (event) => {
    expiryDate = new Date(event.target.value);
    console.log(expiryDate);
  };

  const intervalRef = useRef();

  const getTimeRemaining = useCallback(() => {
    let remainingTime = expiryDate - new Date().getTime();
    if (remainingTime < 0) {
      clearInterval(intervalRef.current);
    }
    return remainingTime;
  }, [expiryDate]);

  useEffect(() => {
    console.log("Day firing!");
    setDay(Math.floor(getTimeRemaining() / 1000 / 60 / 60 / 24));
  }, [hour, getTimeRemaining]);

  useEffect(() => {
    console.log("Hour firing!");
    setHour(Math.floor(getTimeRemaining() / 1000 / 60 / 60) % 24);
  }, [minute, getTimeRemaining]);

  useEffect(() => {
    console.log("Minute firing!");
    setMinute(Math.floor(getTimeRemaining() / 1000 / 60) % 60);
  }, [second, getTimeRemaining]);

  useEffect(() => {
    console.log("Second firing!");
    intervalRef.current = setInterval(() => {
      setSecond(Math.floor(getTimeRemaining() / 1000) % 60);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="countdown">
        <input type="date" onChange={getDate} id="count-table" />
        <br />
        <br />
        <label htmlFor="count-table">
          <table className="count">
            <tbody>
              <tr>
                <td>{day}</td>
                <td>{hour}</td>
                <td>{minute}</td>
                <td>{second}</td>
              </tr>
              <tr>
                <th>DAYS</th>
                <th>HOURS</th>
                <th>MINUTES</th>
                <th>SECONDS</th>
              </tr>
            </tbody>
          </table>
        </label>
      </div>
    </>
  );
};

export default CountDown;
