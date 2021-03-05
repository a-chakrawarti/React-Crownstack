import React, { useState, useEffect } from "react";

const nextYear = new Date().getFullYear() + 1;
var expiryDate = new Date(`January 01 ${nextYear} 00:00:00`);

const CountDown = () => {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const getDate = (event) => {
    expiryDate = new Date(event.target.value);
    // console.log(expiryDate);
  };

  const getTimeRemaining = () => {
    // console.log(expiryDate);
    return expiryDate - new Date().getTime();
  };

  useEffect(() => {
    // console.log("Day firing!");
    setDay(Math.floor(getTimeRemaining() / 1000 / 60 / 60 / 24));
  }, [hour, getTimeRemaining]);

  useEffect(() => {
    // console.log("Hour firing!");
    setHour(Math.floor(getTimeRemaining() / 1000 / 60 / 60) % 24);
  }, [minute]);

  useEffect(() => {
    // console.log("Minute firing!");
    setMinute(Math.floor(getTimeRemaining() / 1000 / 60) % 60);
  }, [second]);

  useEffect(() => {
    // console.log("Second firing!");
    setInterval(() => {
      setSecond(Math.floor(getTimeRemaining() / 1000) % 60);
    }, 1000);
  }, []);

  return (
    <>
      <div className="countdown">
        <input type="date" onChange={getDate} />
        <br />
        <br />
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
      </div>
    </>
  );
};

export default CountDown;
