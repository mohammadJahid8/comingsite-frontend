/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "antd";

import { BiCategoryAlt } from "react-icons/bi";
import swal from "sweetalert";
import axios from "axios";

const AddCategory = ({ open, setOpen, setRefetch, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `/api/v1/category`,
        { categoryName: data },
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
          text: "New Category Added!",
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
        title="Add new admin"
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
            disabled={!data}
            loading={loading}
            onClick={handleAddCategory}
          >
            Add
          </Button>,
        ]}
      >
        <div>
          <form
            onSubmit={handleAddCategory}
            className="flex flex-col  justify-center "
          >
            <div className="relative flex items-center  text-[#4b4b58]  mb-3">
              <BiCategoryAlt className="w-5 h-5 ml-3 pointer-events-none absolute" />
              <input
                value={data}
                onChange={(e) => setData(e.target.value)}
                type="text"
                required
                className="bg-[#07070a] pl-12 border-none  ring-1 ring-[#26262C] rounded p-3 w-full  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
                placeholder="Category Name..."
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

export default AddCategory;
