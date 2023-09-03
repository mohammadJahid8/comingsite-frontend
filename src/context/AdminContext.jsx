/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const [adminRefetch, setAdminRefetch] = useState(1);
  const [refetch, setRefetch] = useState(1);
  const [adminLoading, setAdminLoading] = useState(false);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        setAdminLoading(true);

        const res = await axios.get(`/api/v1/admin/profile`, {
          headers: {
            Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
          },
        });

        const data = res?.data;

        if (data?.statusCode === 200) {
          setAdmin(data?.data);

          setAdminLoading(false);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setAdminLoading(false);
      }
    };

    getAdmin();
  }, [adminRefetch]);

  const logoutAdmin = () => {
    localStorage.removeItem("mocdtAdmin");
    setAdmin(null);
  };

  const adminInfo = {
    admin,
    adminLoading,
    setAdmin,
    setAdminLoading,
    setAdminRefetch,
    adminRefetch,
    logoutAdmin,
    refetch,
    setRefetch,
  };
  return (
    <AdminContext.Provider value={adminInfo}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
