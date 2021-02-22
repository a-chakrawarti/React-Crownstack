import React from "react";

export function Greet({name, action, children}) {
  return (
    <div>
      <h3>{name} {action}</h3>
      <pre>{children}</pre><br />
    </div>
  );
}

// export default Greet;
