import React, { useState } from "react";
import "../HookApp.css";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const initialValue = "";
  const [temptodo, setTempTodo] = useState(initialValue);

  const addTodo = () => {
    if (temptodo !== "") {
      setTodo([
        ...todos,
        {
          id: todos.length,
          value: temptodo,
        },
      ]);
    }
    console.log(todos);
    setTempTodo(initialValue);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event) => setTempTodo(event.target.value)}
          value={temptodo}
        />
        <button className="button" onClick={addTodo}>
          +
        </button>
      </div>

      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
