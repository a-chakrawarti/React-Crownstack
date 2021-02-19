import React from "react";

export function Greet(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <pre>{props.children}</pre><br />
    </div>
  );
}

// export default Greet;
