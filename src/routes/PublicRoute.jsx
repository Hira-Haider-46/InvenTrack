import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) return null;

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}

export default PublicRoute;