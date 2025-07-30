// src/UserContext.js
// src/UserContext.js
// src/UserContext.js
import { createContext } from "react";

// Create context with better type hints and documentation
const UserContext = createContext({
  name: '',
  email: '',
  // Add other user properties here if needed
});

// Optional: Add display name for better debugging
UserContext.displayName = "UserContext";

export default UserContext;
