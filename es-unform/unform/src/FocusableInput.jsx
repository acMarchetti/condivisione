import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// FocusableInput Component
export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label>
        Focused Input:{" "}
        <input
          ref={inputRef}
          type="text"
          placeholder="I will be focused automatically"
        />
      </label>
    </div>
  );
}

// Component with StrictMode-safe mount detection
function MountMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component mounted for the first time");
      isMounted.current = true;
    }
  }, []);

  return (
    <div>
      <label>
        Focused Input:{" "}
        <input
          ref={inputRef}
          type="text"
          placeholder="I will be focused automatically"
        />
      </label>
    </div>
  );
}

// Component with StrictMode-safe mount detection
function MountMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component mounted for the first time");
      isMounted.current = true;
    }
  }, []);

  return (
    <div>
      <h3>Check the console for mount message</h3>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <h2>Focusable Input Example</h2>
      <FocusableInput />
      <h2>Mount Detection with StrictMode</h2>
      <MountMessage />
    </div>
  );
}
