import { useState } from "react";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernamesList, setUsernamesList] = useState([]);

  // Add a new username to the list when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && !usernamesList.includes(username.trim())) {
      setUsernamesList([...usernamesList, username.trim()]);
      setUsername("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub Users</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {usernamesList.map((user) => (
          <GithubUser key={user} username={user} />
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
