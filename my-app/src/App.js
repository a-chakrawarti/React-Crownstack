import React from "react"; // We import react on every component as React.createElement is used for JSX
import "./App.css";

import Todos from "./components/Todos"; // default export
import { Greet } from "./components/Greet"; // named export

// functional component
function App() {
  return (
    <div className="App">
      <Todos type="Class" />
      <br />
      <Greet name="Functional Class">
        <p>
          <ul>
            <li>
              We can pass `props` as an argument to the function and reuse the
              component by changing the attributes.
            </li>
          </ul>
        </p>
      </Greet>
      <Greet name="Anupam passing props" />
      <Greet name="Value passed from App Component" />
    </div>
  );
}

export default App;
