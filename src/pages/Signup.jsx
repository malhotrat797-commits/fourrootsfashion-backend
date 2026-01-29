import { useState } from "react";
import { apiRequest } from "../utils/api";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await apiRequest("/api/auth/register", "POST", {
        email,
        password
      });
      alert("Signup successful. Please login.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

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

      <button onClick={handleSignup}>Sign Up</button>

      <hr />
      <GoogleLoginButton />
    </div>
  );
}
