import { useTheme } from "../context/useTheme";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "../styles/Header.css";

function Header() {
  const { user, logout } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">IKEMEFUNA</div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/projects">Projects</NavLink>

        {!user && <NavLink to="/login">Login</NavLink>}

        {user && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>

            <span className="welcome">{user.email}</span>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
