import React from "react";
import "./HookApp.css";

import Counter from "./hook-components/Counter";
import InputName from "./hook-components/InputName";
import Todo from "./hook-components/Todo";
import TitleEffect from "./hook-components/TitleEffect";
import CountDown from "./hook-components/CountDown";

function HookApp() {
  const container = "container";
  return (
    <div>
      <h2 className="header">
        Hook App <CountDown />
      </h2>
      <div className={`${container}`}>
        <InputName />
        <Counter />
        <Todo />
        <TitleEffect />
      </div>
    </div>
  );
}

export default HookApp;
