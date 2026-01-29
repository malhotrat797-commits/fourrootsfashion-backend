import { useState } from "react";
import { apiRequest } from "../utils/api";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await apiRequest("/api/auth/login", "POST", {
        email,
        password
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <hr />
      <GoogleLoginButton />
    </div>
  );
}
