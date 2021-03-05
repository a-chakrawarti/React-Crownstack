import React, { useState } from "react";
import FetchData from "./FetchData";

const Toggle = () => {
  const [display, setDisplay] = useState(true);

  const toggle = () => {
    setDisplay(!display);
  };
  return (
    <>
      <button className="button" onClick={toggle}>
        {display ? "Hide Posts" : "Show Posts"}
      </button>
      {display ? <FetchData /> : null}
    </>
  );
};

export default Toggle;
