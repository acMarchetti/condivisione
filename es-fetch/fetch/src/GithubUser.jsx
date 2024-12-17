import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState({});
  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userid = await response.json();
      setUser(userid);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  if (user) {
    return (
      <>
        <p>{user.name}</p>
        <p>{user.login}</p>
        <img src={user.avatar_url} alt="avatar" />
      </>
    );
  }
}
