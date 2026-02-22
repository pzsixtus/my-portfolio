import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError(false);

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      setError(true);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email.");
      setError(true);
      return;
    }

    // Simulated login success
    setMessage("Login successful! Redirecting...");
    setError(false);

    setTimeout(() => {
      login(email);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        {message && (
          <p style={{ color: error ? "red" : "green", marginTop: "10px" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#0d1b2a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
