function Login() {
  const [password, setPassword] = useState("");

  // Determine button background color
  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green", // Red if < 8, green otherwise
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}
