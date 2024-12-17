import React from "react";

function UncontrolledLogin() {
  const formRef = React.useRef(null); // Ref to access the form

  // Handler to print values using the DOM API (event.target)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target; // Reference to the form
    const username = form.username.value; // Access input values
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Login with DOM API:");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  // Handler to print values using FormData API
  const handleLoginWithFormData = () => {
    const form = formRef.current; // Access the form using the ref
    const formData = new FormData(form); // Create FormData object

    console.log("Login with FormData API:");
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember me:", formData.get("remember") ? "true" : "false");
  };

  return (
    <form ref={formRef} onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter password" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
      <div>
        {/* Button to submit the form and handle login using event.target */}
        <button type="submit">Login</button>

        {/* Button to handle login using FormData API */}
        <button type="button" onClick={handleLoginWithFormData}>
          Login with FormData
        </button>
      </div>
    </form>
  );
}

export default UncontrolledLogin;
