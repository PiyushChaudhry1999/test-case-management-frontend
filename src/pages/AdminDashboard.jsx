import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/admin/users")
      .then((res) => setUsers(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <p>User from context:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.email} - {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
