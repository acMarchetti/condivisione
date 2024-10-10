export function Age4({ name, age }) {
  return (
    <>
      {age >= 18 && name == "John" ? (
        <p>
          You are {name}, {age} years old, Hi!
        </p>
      ) : null}
    </>
  );
}
