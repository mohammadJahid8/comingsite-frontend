/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  return (
    <Link
      to={`/blog/${blog?.coverTitle}/${blog._id}`}
      key={blog._id}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center border  border-[#334044] blog-card-bg rounded-lg  my-2 cursor-pointer overflow-hidden">
        <img
          src={blog?.coverImage}
          alt=""
          className="w-full h-[260px]  sm:w-[150px] sm:h-[170px] rounded-lg rounded-b-none sm:rounded-b-lg sm:rounded-r-none blog-image-transition object-cover"
        />
        <div className="p-4">
          <h3 className="text-white text-[22px] font-[800] mb-1">
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
          <p className="text-[#FFFFFFB2] text-[17px] text-justify">
            {blog?.coverDescription?.length > 80 ? (
              <span>{blog?.coverDescription?.substring(0, 80)}...</span>
            ) : (
              <span>{blog?.coverDescription}</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
