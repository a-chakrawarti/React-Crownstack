import React from "react";

// event handling in functional components
function FunctionClick(props) {
  function clickHandler() {
    console.log("Function component event fired!");
  }

  return (
    <div>
      Event Handling in functional component:
      <button onClick={clickHandler}>Click Event Function</button>
      <div>
        Method as props: <button onClick={ () => props.greetHandler('FunctionClick')}>Click Me</button>
      </div>
    </div>
  );
}

export default FunctionClick;
