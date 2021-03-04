import React, { useState } from "react";
import "../HookApp.css";

const InputName = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let welcomeMessage = null;

  if (name.firstName.length === 0 && name.lastName.length === 0) {
    welcomeMessage = "guest";
  } else {
    welcomeMessage = `${capitalize(name.firstName)} ${capitalize(
      name.lastName
    )}`;
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="firstname"
        value={name.firstName}
        onChange={(event) =>
          setName({ ...name, firstName: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="lastname"
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      ></input>
      <h3>
        Welcome<span className="greet"> {welcomeMessage}</span>
      </h3>
    </div>
  );
};

export default InputName;
