import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // State to hold the list of todos
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  // Handler for adding a todo item
  const addTodo = () => {
    if (inputValue.trim()) {
      // Prevent adding empty todos
      setTodos([...todos, inputValue.trim()]);
      setInputValue(""); // Clear input after adding
    }
  };

  // Handler for removing a specific todo item
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Handler for resetting the entire todo list
  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Input field and Add button */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Reset button */}
      <button onClick={resetTodos} style={{ marginTop: "10px" }}>
        Reset
      </button>

      {/* List of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
