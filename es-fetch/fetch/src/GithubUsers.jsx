import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit"></button>
      </form>
      <GithubUser username={name} />
    </>
  );
}
