import { useState } from "react";

function RegistrationForm() {
  // Step 1: Create state variables for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Simulate API call
    console.log("User registered:", { username, email, password });
    alert(`User ${username} registered successfully!`);

    // Clear form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password} // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

