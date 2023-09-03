/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";

import BlogImageUpload from "./BlogImageUpload";
import swal from "sweetalert";
import axios from "axios";

const EditTeamMember = ({
  open,
  setOpen,
  setRefetch,
  refetch,
  editData,
  setData,
  data,
}) => {
  const [loading, setLoading] = useState(false);
  const [memberImage, setmemberImage] = useState(data?.image);
  const [base64, setBase64] = useState(data?.image);
  const [error, setError] = useState("");

  useEffect(() => {
    setmemberImage(data?.image);
    setBase64(data?.image);
  }, [data?.image]);

  const handleCancel = () => {
    setmemberImage("");
    setBase64("");

    setOpen(false);
  };

  const valueExists =
    data?.email || data?.designation || data?.name || memberImage
      ? true
      : false;

  const handleAddMember = async (e) => {
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

      data.image = memberImage;

      const res = await axios.patch(
        `/api/v1/team/update/${editData?._id}`,
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
          text: "Team Member Updated!",
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
        title="Edit member details"
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
            onClick={handleAddMember}
          >
            Update
          </Button>,
        ]}
      >
        <div>
          <BlogImageUpload
            value={memberImage}
            disabled={loading}
            onChange={(image) => setmemberImage(image)}
            label="Upolad Member Image"
            setBase64={setBase64}
            base64={base64}
          />
          <form
            onSubmit={handleAddMember}
            className="flex flex-col  justify-center mt-3"
          >
            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <input
                value={data?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                required
                className="bg-[#07070a] border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Name..."
              />
            </div>

            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <input
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="text"
                required
                className="bg-[#07070a]  border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Email..."
              />
            </div>

            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <input
                value={data?.designation}
                onChange={(e) =>
                  setData({ ...data, designation: e.target.value })
                }
                type="text"
                required
                className="bg-[#07070a] border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Designation..."
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

export default EditTeamMember;
