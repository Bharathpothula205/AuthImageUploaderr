import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect if no token
    }
  }, [token, navigate]);

  return token ? <Outlet /> : null;
};

export default ProtectedRoute;
