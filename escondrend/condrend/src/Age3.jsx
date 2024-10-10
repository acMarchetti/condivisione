import { Age4 } from "./Age4";

export function Age3({ name, age }) {
  return (
    <>
      {!(age >= 18 && age <= 65) ? (
        <p>You are very old!</p>
      ) : (
        <Age4 name={name} age={age} />
      )}
    </>
  );
}
