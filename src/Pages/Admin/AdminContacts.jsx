/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";

import swal from "sweetalert";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import ViewContacts from "./ViewContacts";

/* eslint-disable react/no-unescaped-entities */
const AdminContacts = () => {
  const [open, setOpen] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { refetch, setRefetch } = useContext(AdminContext);

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const getContacts = async () => {
      const res = await axios.get(`/api/v1/contact`, {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setContacts(res?.data?.data?.data);
    };
    getContacts();
  }, [refetch]);

  const handleContactDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/contact/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Contact Deleted Successfully!",
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
            text: "Something went wrong while deleting Contact!",
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
      <div className="uppercase flex flex-col ">
        <h1
          className="text-white text-xl mb-2 inline"
          style={{
            fontFamily: "Poppins",
          }}
        >
          Contacts
        </h1>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left   text-gray-400">
          <thead className="text-xs  uppercase  bg-[#141618] text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((ct) => (
              <tr
                key={ct?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {ct?.name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {ct?.email}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {ct?.subject.length > 50 ? (
                    <span>{ct?.subject.slice(0, 50)}...</span>
                  ) : (
                    <span>{ct?.subject}</span>
                  )}
                </th>

                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => {
                      showModal();
                      setContact(ct);
                    }}
                    className="font-medium text-green-600 hover:underline"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleContactDelete(ct?._id)}
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

      <ViewContacts
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        setRefetch={setRefetch}
        contact={contact}
      />
    </div>
  );
};

export default AdminContacts;
