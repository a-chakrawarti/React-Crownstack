import React from "react"; // We import react on every component as React.createElement is used for JSX
import "./App.css";

import Todos from "./components/Todos"; // default export
import { Greet } from "./components/Greet"; // named export
import Counter from './components/Counter';

// functional component
function App() {
  return (
    <div className="App">
      <Todos type="Class" />
      <br />
      <Greet name="Functional Class">
          <ul>
            <li>
              We can pass `props` as an argument to the function and reuse the
              component by changing the attributes.
            </li>
          </ul>
      </Greet>
      <Greet name="Anupam passing props" action="by destructing them in the parameter" />
      <Greet name="Value passed from App Component" />
      <Counter />
    </div>
  );
}

export default App;
