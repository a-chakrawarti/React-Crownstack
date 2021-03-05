import React from "react";
import "./HookApp.css";

import Counter from "./hook-components/Counter";
import InputName from "./hook-components/InputName";
import Todo from "./hook-components/Todo";
import TitleEffect from "./hook-components/TitleEffect";
import CountDown from "./hook-components/CountDown";
import Toggle from "./hook-components/Toggle";
import ContextRender from "./hook-components/ContextRender";

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
        <Toggle />
        <FirstNameContext.Provider value="Anupam">
          <LastNameContext.Provider value="Chakrawarti">
            <ContextRender />
          </LastNameContext.Provider>
        </FirstNameContext.Provider>
      </div>
    </div>
  );
}

export default HookApp;
export const FirstNameContext = React.createContext();
export const LastNameContext = React.createContext();
