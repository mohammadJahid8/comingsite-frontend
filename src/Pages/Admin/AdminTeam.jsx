/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";

import swal from "sweetalert";

import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import AddTeamMember from "./AddTeamMember";
import EditTeamMember from "./EditTeamMember";

/* eslint-disable react/no-unescaped-entities */
const AdminTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editData, seteditData] = useState({});
  const [openEditModal, setopenEditModal] = useState(false);
  const { refetch, setRefetch } = useContext(AdminContext);

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
      designation: data?.designation,
      email: data?.email,
      image: data?.image,
    });

    seteditData(data);

    setopenEditModal(true);
  };

  useEffect(() => {
    const getTeamMembers = async () => {
      const res = await axios.get(`/api/v1/team/`, {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setTeamMembers(res?.data?.data?.data);
    };
    getTeamMembers();
  }, [refetch]);

  const handleDeleteTeamMember = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this team member!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/team/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Team Member Deleted Successfully!",
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
            text: "Something went wrong while deleting Team Member!",
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
          Team
        </h1>

        <div>
          <button
            onClick={showModal}
            className="bg-green-800 hover:bg-green-700 text-white rounded py-1 px-1.5 uppercase text-xs  "
          >
            Add new member
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left   text-gray-400">
          <thead className="text-xs  uppercase  bg-[#141618] text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {teamMembers?.map((member) => (
              <tr
                key={member?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 font-medium text-gray-400 whitespace-nowrap "
                >
                  <img src={member?.image} alt="" className="w-10 rounded" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {member.name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {member?.email}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {member?.designation}
                </th>

                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => showEditModal(member)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteTeamMember(member?._id)}
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

      <AddTeamMember
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        setRefetch={setRefetch}
      />

      <EditTeamMember
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

export default AdminTeam;
