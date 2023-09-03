import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TopBlogs = ({ topBlogs }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 justify-items-center gap-6 mx-auto max-w-screen-xl "
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {topBlogs?.map((blog) => (
        <Link to={`/blog/${blog?.coverTitle}/${blog._id}`} key={blog._id}>
          <div
            key={blog._id}
            className="border border-[#334044] flex flex-col  items-center  rounded-lg cursor-pointer blog-card-bg overflow-hidden"
          >
            <img
              src={blog.coverImage}
              alt=""
              className="w-full h-[260px] rounded-t-lg blog-image-transition object-cover"
            />
            <div className="p-4">
              <h3 className="text-white  font-bold mb-1 text-[22px]">
                {blog?.coverTitle?.length > 50 ? (
                  <span>{blog?.coverTitle?.substring(0, 50)}...</span>
                ) : (
                  <span>{blog?.coverTitle}</span>
                )}
              </h3>

              <div className="inline-flex gap-2 items-center mb-1 text-[14px] text-[#fff]">
                <span className="text-[#A2FF9A]">{blog.coverSubtitle}</span>
                <span className="text-[20px] mb-2">.</span>

                <span>{blog?.minRead ? blog?.minRead : 4} mins read</span>
              </div>

              <p className="text-[#FFFFFFB2] text-[16px] md:text-[17px] text-justify ">
                {blog?.coverDescription?.length > 100 ? (
                  <span>{blog?.coverDescription?.substring(0, 100)}...</span>
                ) : (
                  <span>{blog?.coverDescription}</span>
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopBlogs;
