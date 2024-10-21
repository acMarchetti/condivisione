import { useState } from "react";

export function InteractiveWelcome() {
  const [name, setName] = useState("");
  function handleInput(event) {
    setName(event.target.value);
  }
  return (
    <>
      <input type="text" onChange={handleInput} />
      <p>Welcome {name}!</p>
    </>
  );
}
