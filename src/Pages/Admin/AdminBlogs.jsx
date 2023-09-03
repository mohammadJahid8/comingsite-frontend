/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";

import swal from "sweetalert";

import ViewBlog from "./ViewBlog";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

/* eslint-disable react/no-unescaped-entities */
const AdminBlogs = () => {
  const [open, setOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [endPoint, setEndPoint] = useState("All");
  const { refetch, setRefetch } = useContext(AdminContext);

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const getblogs = async () => {
      const res = await axios.get(`/api/v1/blog/${endPoint}`, {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setBlogs(res?.data?.data?.data);
    };
    getblogs();
  }, [refetch, endPoint]);

  const handleBlogDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this blog!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/blog/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Blog Deleted Successfully!",
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
            text: "Something went wrong while deleting Blog!",
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
          Blogs
        </h1>

        <div className="flex justify-between items-center  mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEndPoint("All")}
              className={`${
                endPoint === "All"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              All
            </button>
            <button
              onClick={() => setEndPoint("Design")}
              className={`${
                endPoint === "Design"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              Design
            </button>
            <button
              onClick={() => setEndPoint("Marketing")}
              className={`${
                endPoint === "Marketing"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              Marketing
            </button>
            <button
              onClick={() => setEndPoint("Networking")}
              className={`${
                endPoint === "Networking"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              Networking
            </button>
            <button
              onClick={() => setEndPoint("Development")}
              className={`${
                endPoint === "Development"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              Development
            </button>
            <button
              onClick={() => setEndPoint("Others")}
              className={`${
                endPoint === "Others"
                  ? "bg-blue-800 hover:bg-blue-700"
                  : "bg-green-800 hover:bg-green-700"
              }  text-white rounded py-1 px-1.5 uppercase text-xs `}
            >
              Others
            </button>
          </div>
          <div className="flex gap-2">
            <Link to="/admin/blogs/add-blog">
              <button
                className={`bg-blue-800 hover:bg-blue-700 text-white rounded py-1 px-1.5 uppercase text-xs `}
              >
                Add new blog
              </button>
            </Link>
          </div>
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
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Total Readings
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => (
              <tr
                key={blog?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 font-medium text-gray-400 whitespace-nowrap "
                >
                  <img src={blog?.coverImage} alt="" className="w-10 rounded" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {blog?.coverTitle.length > 50 ? (
                    <span>{blog?.coverTitle.slice(0, 50)}...</span>
                  ) : (
                    <span>{blog?.coverTitle}</span>
                  )}
                </th>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {blog?.views}
                </th>

                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => {
                      showModal();
                      setBlog(blog);
                    }}
                    className="font-medium text-green-600 hover:underline"
                  >
                    View
                  </button>
                  <Link to={`/admin/blogs/edit-blog/${blog?._id}`}>
                    <button className="font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleBlogDelete(blog?._id)}
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

      <ViewBlog
        open={open}
        setOpen={setOpen}
        refetch={refetch}
        setRefetch={setRefetch}
        blog={blog}
      />
    </div>
  );
};

export default AdminBlogs;
