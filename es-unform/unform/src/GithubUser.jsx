import React, { useState } from "react";

// GithubUser Component: Fetches and displays a user's name, login, and avatar
export function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch user data when the component mounts or username changes
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    return <li style={{ color: "red" }}>Error: {error}</li>;
  }

  if (!userData) {
    return <li>Loading...</li>;
  }

  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <img
        src={userData.avatar_url}
        alt={`${userData.login} avatar`}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
      <div>
        <strong>{userData.name || "No Name"}</strong> <br />
        <span>{userData.login}</span>
      </div>
    </li>
  );
}
