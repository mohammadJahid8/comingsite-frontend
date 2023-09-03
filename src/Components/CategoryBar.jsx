/* eslint-disable react/prop-types */

const CategoryBar = ({ category, setCategory }) => {
  return (
    <div className="filter-item mx-auto max-w-screen-xl pb-[70px]">
      <ul className="flex flex-wrap text-black font-normal gap-2 md:gap-6 justify-center py-[30px]  text-[14px]">
        <li
          className={`  px-8 rounded-3xl cursor-pointer  py-1 ${
            category === "All"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("All");
          }}
        >
          All
        </li>
        <li
          className={`   px-8 rounded-3xl cursor-pointer py-1 ${
            category === "Design"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("Design");
          }}
        >
          Design
        </li>
        <li
          className={`   px-8 rounded-3xl cursor-pointer py-1 ${
            category === "Marketing"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("Marketing");
          }}
        >
          Marketing
        </li>
        <li
          className={`   px-8 rounded-3xl cursor-pointer py-1 ${
            category === "Networking"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("Networking");
          }}
        >
          Networking
        </li>
        <li
          className={`   px-8 rounded-3xl cursor-pointer py-1 ${
            category === "Development"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("Development");
          }}
        >
          Development
        </li>
        <li
          className={`   px-8 rounded-3xl cursor-pointer py-1 ${
            category === "Others"
              ? "bg-[#3bca49]"
              : "bg-gradient-to-r from-[#9CFE95] to-[#4BFF93] transition duration-300 hover:bg-gradient-to-l"
          }`}
          onClick={() => {
            setCategory("Others");
          }}
        >
          Others
        </li>
      </ul>
    </div>
  );
};

export default CategoryBar;
