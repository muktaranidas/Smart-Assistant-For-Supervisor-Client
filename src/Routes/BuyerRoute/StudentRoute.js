import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useStudent from "../../hooks/useStudent";
// import useBuyer from "../../hooks/useStudent";
import Loading from "../../Pages/Shared/Loading/Loading";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, isAdminLoading] = useStudent(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isStudent) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default StudentRoute;
