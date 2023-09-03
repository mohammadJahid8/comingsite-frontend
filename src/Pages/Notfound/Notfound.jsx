import { Link } from "react-router-dom";
import notfound from "../../assets/notfound.png";
import { BiArrowBack } from "react-icons/bi";

const Notfound = () => {
  return (
    <div className="flex justify-center items-center max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-col justify-center items-center gap-8">
        <img src={notfound} alt="" className="w-[26rem]" />

        <h1 className="font-bold text-xl text-white text-center">
          Oops, The Page You Are Searching for Was Not Found!
        </h1>
        <Link to="/">
          <button className="text-sm px-6 py-4 rounded  bg-gradient-to-r from-[#A2FF9A] to-[#3CEB4E] hover:bg-gradient-to-l from-[#A2FF9A] to-[#3CEB4E] transition shadow-[0px 0px 25px 0px rgba(0, 0, 0, 0.10)] font-semibold ">
            <BiArrowBack className="inline-flex mr-1 text-lg" /> GO BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
