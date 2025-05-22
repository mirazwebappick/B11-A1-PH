import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRouter;
