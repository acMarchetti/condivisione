import { Age1 } from "./Age1";

export function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}</p>
      <Age1 name={name} age={age} />
    </>
  );
}
