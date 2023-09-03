/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";

import swal from "sweetalert";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

/* eslint-disable react/no-unescaped-entities */
const AdminPortfolio = () => {
  const [open, setOpen] = useState(false);

  const [portfolios, setPortfolios] = useState([]);
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [endPoint, setEndPoint] = useState("All");
  const { refetch, setRefetch } = useContext(AdminContext);

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const getPortfolio = async () => {
      const res = await axios.get(`/api/v1/portfolio/${endPoint}`, {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setPortfolios(res?.data?.data?.data);
    };
    getPortfolio();
  }, [refetch, endPoint]);

  const handleDeletePortfolio = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this portfolio!",
      icon: "warning",
      buttons: true,
    }).then(async (value) => {
      if (value) {
        try {
          setLoading(true);
          setError("");

          const res = await axios.delete(`/api/v1/portfolio/delete/${id}`, {
            headers: {
              Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
            },
          });

          const data = res.data;

          if (data.statusCode === 200) {
            swal({
              text: "Portfolio Deleted Successfully!",
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
            text: "Something went wrong while deleting Portfolio!",
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
          Portfolios
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
            <Link to="/admin/portfolio/add-portfolio">
              <button
                className={`bg-blue-800 hover:bg-blue-700 text-white rounded py-1 px-1.5 uppercase text-xs `}
              >
                Add new portfolio
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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolios?.map((portfolio) => (
              <tr
                key={portfolio?._id}
                className=" border-b bg-[#1a1a1a] border-gray-700  hover:bg-[#272727]"
              >
                <th
                  scope="row"
                  className="px-6 font-medium text-gray-400 whitespace-nowrap "
                >
                  <img
                    src={portfolio?.coverImage}
                    alt=""
                    className="w-10 rounded"
                  />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
                >
                  {portfolio?.coverTitle.length > 50 ? (
                    <span>{portfolio?.coverTitle.slice(0, 50)}...</span>
                  ) : (
                    <span>{portfolio?.coverTitle}</span>
                  )}
                </th>

                <td className="px-6 py-4 flex gap-4 items-center">
                  <Link
                    to={`/admin/portfolio/edit-portfolio/${portfolio?._id}`}
                  >
                    <button className="font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeletePortfolio(portfolio?._id)}
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
    </div>
  );
};

export default AdminPortfolio;
