import { FocusableInput } from "./FocusableInput";
import UncontrolledLogin from "./UncrolledLogin";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Colors } from "./Colors";
import TodoList from "./TodoList";

const colorList = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Green" },
  { id: 4, name: "Yellow" },
  { id: 5, name: "Purple" },
];

export default App;

export function App() {
  return (
    <StrictMode>
      <div>
        <h1>Colors List</h1>
        <Colors colors={colorList} />
      </div>
      <UncontrolledLogin />
      <TodoList />
      <FocusableInput />
    </StrictMode>
  );
}
