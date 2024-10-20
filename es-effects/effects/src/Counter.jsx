import { useEffect, useState } from "react";

export function Counter(props) {
  const [counter, incrementCounter] = useState(props.initialValue);
  const augment = () => {
    incrementCounter(counter + props.increment);
  };
  useEffect(() => {
    console.log(`il counter è ${counter}`);
  }, [counter]);
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={augment}>press this</button>
    </>
  );
}
