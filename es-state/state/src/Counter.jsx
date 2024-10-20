import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
export function Counter(props) {
  const [value, setValue] = useState(props.counter);
  return (
    <>
      <CounterDisplay aggiornato={value} />
      <button onClick={() => setValue(value + props.increment)}>Premimi</button>
      <button onClick={() => setValue(value - props.increment)}>
        Non premermi
      </button>
      <button onClick={() => setValue(props.counter)}>Ricominciamo?</button>
    </>
  );
}
