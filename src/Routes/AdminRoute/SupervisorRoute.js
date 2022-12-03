import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useSupervisor from "../../hooks/useSupervisor";
import useAdmin from "../../hooks/useSupervisor";
import Loading from "../../Pages/Shared/Loading/Loading";

const SupervisorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSupervisor, isAdminLoading] = useSupervisor(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isSupervisor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default SupervisorRoute;
