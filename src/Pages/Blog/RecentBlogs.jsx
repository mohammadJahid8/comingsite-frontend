/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecentBlogs = ({ allBlogs }) => {
  return (
    <>
      <div
        className="my-20  mx-auto max-w-screen-xl"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="flex  gap-1 items-center">
          <h1 className="text-white text-4xl uppercase mt-5 mb-9">
            Recent Published
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:justify-items-end gap-8">
          <div className="lg:col-span-3">
            <Link
              to={`/blog/${allBlogs?.[0]?.coverTitle}/${allBlogs?.[0]._id}`}
            >
              <div className="border border-[#334044] blog-card-bg flex flex-col gap-2 items-center  rounded-lg  cursor-pointer h-[525px] overflow-hidden">
                <img
                  src={allBlogs?.[0]?.coverImage}
                  alt=""
                  className="w-full h-[330px] rounded-lg rounded-b-none object-cover blog-image-transition"
                />
                <div className="p-3">
                  <h3 className="text-white   font-bold text-[22px] mb-2 ">
                    {allBlogs?.[0]?.coverTitle?.length > 120 ? (
                      <span>
                        {allBlogs?.[0]?.coverTitle?.substring(0, 120)}...
                      </span>
                    ) : (
                      <span>{allBlogs?.[0]?.coverTitle}</span>
                    )}
                  </h3>

                  <div className="inline-flex gap-2 items-center mb-1 text-[14px] text-[#fff]">
                    <span className="text-[#A2FF9A]">
                      {allBlogs?.[0]?.coverSubtitle}
                    </span>
                    <span className="text-[20px] mb-2">.</span>

                    <span>
                      {allBlogs?.[0]?.minRead ? allBlogs?.[0]?.minRead : 4} mins
                      read
                    </span>
                  </div>

                  <p className="text-[#FFFFFFB2] text-[16px] md:text-[17px] text-justify">
                    {allBlogs?.[0]?.coverDescription?.length > 210 ? (
                      <span>
                        {allBlogs?.[0]?.coverDescription?.substring(0, 210)}...
                      </span>
                    ) : (
                      <span>{allBlogs?.[0]?.coverDescription}</span>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-2 grid grid-rows-1 lg:grid-rows-3 gap-3 ">
            {allBlogs?.slice(1, 4).map((blog) => (
              <Link to={`/blog/${blog?.coverTitle}/${blog._id}`} key={blog._id}>
                <div className="flex flex-col sm:flex-row lg:justify-between items-center border border-[#334044] blog-card-bg rounded-lg  cursor-pointer">
                  <img
                    src={blog.coverImage}
                    alt=""
                    className="w-full h-[260px] sm:w-[130px] sm:h-[170px] rounded-lg rounded-b-none sm:rounded-b-lg sm:rounded-r-none object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white text-[22px]  font-[800] mb-1">
                      {blog?.coverTitle?.length > 50 ? (
                        <span>{blog?.coverTitle?.substring(0, 50)}...</span>
                      ) : (
                        <span>{blog?.coverTitle}</span>
                      )}
                    </h3>
                    <div className="inline-flex gap-2 items-center mb- text-[14px] text-[#fff]">
                      <span className="text-[#A2FF9A]">
                        {blog.coverSubtitle}
                      </span>
                      <span className="text-[20px] mb-2">.</span>

                      <span>{blog?.minRead ? blog?.minRead : 4} mins read</span>
                    </div>
                    <p className="text-[#FFFFFFB2] text-[16px] md:text-[17px] text-justify">
                      {blog?.coverDescription?.length > 55 ? (
                        <span>
                          {blog?.coverDescription?.substring(0, 55)}...
                        </span>
                      ) : (
                        <span>{blog?.coverDescription}</span>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlogs;
