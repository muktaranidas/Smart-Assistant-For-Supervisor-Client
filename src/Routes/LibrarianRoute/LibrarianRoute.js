import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useLibrarian from "../../hooks/useLibrarian";
import Loading from "../../Pages/Shared/Loading/Loading";

const LibrarianRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isLibrarian, isAdminLoading] = useLibrarian(user?.email);
  console.log(isLibrarian);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isLibrarian) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default LibrarianRoute;
