import React from "react";

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Simulate a login action
    console.log("User logged in");
  };

  return (
    // TODO: Replace with actual logic later
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;