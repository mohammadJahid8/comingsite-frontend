/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";

import swal from "sweetalert";
import axios from "axios";

const EditAdmin = ({
  open,
  setOpen,
  setRefetch,
  refetch,
  editData,
  setData,
  data,
}) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  const valueExists = data.email || data.password || data.name ? true : false;

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      let validateEmail = true;
      if (data?.email) {
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        validateEmail = data?.email?.match(emailRegex);
      }

      if (!validateEmail) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      const res = await axios.patch(
        `/api/v1/admin/update/${editData?._id}`,
        data,
        {
          headers: {
            Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
          },
        }
      );

      const response = res.data;

      if (response.statusCode === 200) {
        setRefetch(!refetch);
        setLoading(false);
        handleCancel();
        swal({
          text: "Admin Updated!",
          icon: "success",
          button: "Ok",
        });
      }
    } catch (err) {
      console.log("catch", err);
      setError(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        title="Edit admin details"
        width={420}
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="bg-red-800 text-white border-none"
          >
            Cancel
          </Button>,

          <Button
            key="submit"
            type="primary"
            className="bg-blue-500"
            disabled={!valueExists}
            loading={loading}
            onClick={handleAddAdmin}
          >
            Update
          </Button>,
        ]}
      >
        <div>
          <form
            onSubmit={handleAddAdmin}
            className="flex flex-col  justify-center "
          >
            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <SiNamecheap className="w-5 h-5 ml-3 pointer-events-none absolute" />
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                required
                className="bg-[#07070a] pl-12 border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Name..."
              />
            </div>

            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <AiOutlineMail className="w-5 h-5 ml-3 pointer-events-none absolute" />
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="text"
                required
                className="bg-[#07070a] pl-12 border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Email..."
              />
            </div>
            <div
              className={`relative flex items-center  text-[#4b4b58] ${
                error && "mb-2"
              }`}
            >
              <AiFillLock className="w-5 h-5 ml-3 pointer-events-none absolute" />
              <input
                type="password"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="bg-[#07070a] pl-12 border-none ring-1 ring-[#26262C] rounded p-3 w-full   placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Password..."
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 font-semibold mb-1 text-start">
                {error}
              </p>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditAdmin;
