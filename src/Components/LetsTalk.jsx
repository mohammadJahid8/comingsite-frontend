import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <div className="mx-auto max-w-screen-xl  pt-10">
      <div className="sm:flex items-center justify-between">
        <h3 className="sm:w-[460px] text-capitalize lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[60px] md:leading-[50px] sm:leading-[40px] leading-[40px] font-semibold  section-title_gradient text-center sm:text-start">
          Let’s Work On Cool Project Together
        </h3>
        <Link
          to=""
          className="sm:w-[300px] w-[100%] mt-4 sm:mt-0 table text-center rounded-md bg-gradient-to-r from-[#9CFE95] to-[#41EC52] p-4 transition duration-300 hover:bg-gradient-to-l font-bold"
        >
          {" "}
          Let’s Talk{" "}
        </Link>
      </div>
    </div>
  );
};

export default LetsTalk;
