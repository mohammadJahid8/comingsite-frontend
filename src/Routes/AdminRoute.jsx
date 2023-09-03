/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

export default function AdminRoute({ children }) {
  const { admin, adminLoading } = useContext(AdminContext);
  const { pathname } = useLocation();

  const adminToken = localStorage.getItem("comingsiteAdmin");

  if (admin || adminToken) {
    return children;
  }

  return <Navigate to="/admin-login" state={{ path: pathname }} />;
}
