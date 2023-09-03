/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import swal from "sweetalert";
import AddCategory from "./AddCategory";

/* eslint-disable react/no-unescaped-entities */
const BlogsCategory = () => {
  const [open, setOpen] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/v1/category/", {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setCategories(res?.data?.data);
    };
    getCategories();
  }, [refetch]);

  const handleCategoryDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/category/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Category Deleted Successfully!",
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
            text: "Something went wrong while deleting Category!",
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
          Categories
        </h1>

        <div>
          <button
            onClick={showModal}
            className="bg-green-800 hover:bg-green-700 text-white rounded py-1 px-1.5 uppercase text-xs  "
          >
            Add new Category
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left   text-gray-400">
          <thead className="text-xs  uppercase  bg-[#141618] text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category) => (
              <tr
                key={category?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {category?.categoryName}
                </th>

                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => handleCategoryDelete(category?._id)}
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

      <AddCategory
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        setRefetch={setRefetch}
      />
    </div>
  );
};

export default BlogsCategory;
