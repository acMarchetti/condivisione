import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });
  function handleInput2(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function reset() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }
  function onLogin() {
    console.log(data);
  }
  return (
    <>
      <input name="username" value={data.username} onChange={handleInput2} />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInput2}
      />
      <form>
        <label>
          Remember for next time?
          <input
            type="checkbox"
            name="session"
            id="session"
            checked={data.session}
            onChange={handleInput2}
          />
        </label>
      </form>
      <button disabled={!data.username || !data.password} onClick={onLogin}>
        login
      </button>
      <button onClick={reset}>reset</button>
    </>
  );
}
