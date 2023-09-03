import axios from "axios";
import { useContext, useState } from "react";
import { AiFillLock, AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AdminContext } from "../../context/AdminContext";

export function AdminLogin() {
  const { setAdminRefetch } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const valueExists = loginData.email && loginData.password ? true : false;

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const validateEmail = loginData?.email?.match(emailRegex);

      if (!validateEmail) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }

      const res = await axios.post(`/api/v1/admin/login`, loginData);

      const data = res.data;

      if (data.statusCode === 200) {
        localStorage.setItem("comingsiteAdmin", data?.data);
        setAdminRefetch((prev) => prev + 1);
        setTimeout(() => {
          swal({
            text: "Login Successfull!",
            icon: "success",
            button: "Ok",
          });

          setLoading(false);
          navigate("/admin");
        }, 2000);
      }
    } catch (err) {
      console.log("catch", err.response);
      setError(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <form
          onSubmit={handleAdminLogin}
          className="flex flex-col bg-[#0a0c0c] p-[12vw] mx-2 sm:p-[7vw] rounded justify-center "
        >
          <h1
            className="text-center text-3xl text-gray-300 font-bold mb-4"
            style={{
              fontFamily: "Poppins",
            }}
          >
            Admin Login
          </h1>
          <div className="relative flex items-center  text-[#4b4b58]  mb-3">
            <AiOutlineMail className="w-5 h-5 ml-3 pointer-events-none absolute" />
            <input
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              type="text"
              required
              className="bg-[#07070a] pl-12 border-none  ring-1 ring-[#26262C] rounded p-3 w-full sm:w-[310px] 2xl:w-[350px] placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
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
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="bg-[#07070a] pl-12 border-none ring-1 ring-[#26262C] rounded p-3 w-full sm:w-[310px] 2xl:w-[350px]  placeholder-[#4B4B58] placeholder:text-sm text-[#4b4b58] "
              placeholder="Password..."
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 font-semibold mb-1 text-start">
              {error}
            </p>
          )}

          <button
            disabled={!valueExists || loading}
            type="submit"
            className="disabled:cursor-not-allowed background-button text-white flex justify-between items-center rounded-lg p-3 w-full sm:w-[310px] 2xl:w-[350px]  shadow-2xl mt-4 "
          >
            <>
              <p className="mx-auto">{loading ? "Logging in...." : "Login"}</p>

              <AiOutlineArrowRight />
            </>
          </button>
        </form>
      </div>
    </div>
  );
}
