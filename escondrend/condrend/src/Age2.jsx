import { Age3 } from "./age3";

export function Age2({ name, age }) {
  return (
    <>
      {age <= 18 ? <p>You are very young!</p> : <Age3 name={name} age={age} />}
    </>
  );
}
