import { FocusableInput } from "./FocusableInput";
import UncontrolledLogin from "./UncrolledLogin";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

export function App() {
  return (
    <StrictMode>
      <UncontrolledLogin />
      <FocusableInput />
    </StrictMode>
  );
}
