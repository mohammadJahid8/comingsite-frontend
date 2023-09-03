/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Admin.css";
import AddAdminModal from "./AddAdminModal";
import EditAdmin from "./EditAdmin";
import swal from "sweetalert";

/* eslint-disable react/no-unescaped-entities */
const Admins = () => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setopenEditModal] = useState(false);
  const [editData, seteditData] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // for edit purpose
  const [data, setData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const showModal = () => {
    setOpen(true);
  };
  const showEditModal = (data) => {
    setData({
      name: data?.name,
      role: data?.role,
      email: data?.email,
      password: "",
    });

    seteditData(data);

    setopenEditModal(true);
  };

  useEffect(() => {
    const getAdmins = async () => {
      const res = await axios.get("/api/v1/admin/", {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setAdmins(res?.data?.data);
    };
    getAdmins();
  }, [refetch]);

  const handleAdminDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this admin!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/admin/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("mocdtAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Admin Deleted Successfully!",
              icon: "success",
              button: "Ok",
            });
            setRefetch(!refetch);
            setLoading(false);
          }
        } catch (err) {
          console.log("catch", err.response);
          // setError(err?.response?.data?.message);
          swal({
            text: "Something went wrong while deleting admin!",
            icon: "error",
            button: "Ok",
          });
          setLoading(false);
        }
      }
    });
  };

  return (
    <div className="">
      <div className="uppercase flex justify-between items-start">
        <h1
          className="text-white text-xl mb-2"
          style={{
            fontFamily: "Poppins",
          }}
        >
          Admins
        </h1>

        <div>
          <button
            onClick={showModal}
            className="bg-green-800 hover:bg-green-700 text-white rounded py-1 px-1.5 uppercase text-xs  "
          >
            Add new admin
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left   text-gray-400">
          <thead className="text-xs  uppercase  bg-[#141618] text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Admin Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => (
              <tr
                key={admin?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {admin?.name}
                </th>
                <td className="px-6 py-4">{admin?.email}</td>
                <td className="px-6 py-4">
                  {admin?.role === "superAdmin" ? "Super Admin" : "Admin"}
                </td>

                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => showEditModal(admin)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleAdminDelete(admin?._id)}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddAdminModal
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        setRefetch={setRefetch}
      />
      <EditAdmin
        open={openEditModal}
        setOpen={setopenEditModal}
        editData={editData}
        refetch={refetch}
        setRefetch={setRefetch}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Admins;
