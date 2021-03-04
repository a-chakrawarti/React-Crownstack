import React, { useState, useEffect } from "react";

const TitleEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <>
      <button
        className="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Clicked {count} times
      </button>
    </>
  );
};

export default TitleEffect;
