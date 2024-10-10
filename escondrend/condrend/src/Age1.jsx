import { Age2 } from "./Age2";

export function Age1({ name, age }) {
  return (
    <>{!age ? <p>What's your age?</p> : <Age2 name={name} age={age} />} </>
  );
}
