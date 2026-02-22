import { useAuth } from "../context/useAuth";
import "../styles/Dashboard.css";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {user && (
        <>
          <p>
            Welcome, <strong>{user.email}</strong> 🎉
          </p>
          <p>This is your protected dashboard area.</p>

          <button onClick={logout} className="dashboard-btn">
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
