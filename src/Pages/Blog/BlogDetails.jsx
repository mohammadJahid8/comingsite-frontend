import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";
import { antIcon } from "../../utils/Loader";
import ShareBlog from "./ShareBlog";

export function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const BlogDetails = () => {
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState({});

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${blog?.coverTitle || "Blogs"} | Comingsite`;
    const updateViews = async () => {
      await axios.patch(`/api/v1/blog/views/${id}`);
    };

    const getDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/blog/single/${id}`);
        const data = res.data;
        setBlog(data.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    updateViews();
    getDetails();
  }, [id]);

  let createdAt;
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  if (blog?.createdAt) {
    createdAt = new Date(blog?.createdAt);
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    createdAt
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return (
    <div className="blog-bg pt-[60px] md:pt-[120px] min-h-screen">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="lg:text-5xl md:text-3xl text-[24px] font-bold text-white">
          {blog.coverTitle}
        </h1>
        <div className="inline-flex gap-2 items-center mb-1 mt-5 md:text-[17px] text-[14px] text-[#fff]">
          <span className="text-[#A2FF9A]">{blog.coverSubtitle}</span>
          <span className="text-[20px] mb-2">.</span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {formattedDate}
          </span>
          <span className="text-[20px] mb-2">.</span>
          <span>{blog?.minRead ? blog?.minRead : 4} mins read</span>
        </div>

        <img
          src={blog.coverImage}
          alt=""
          className="h-96 w-full mt-5 mb-10 object-cover rounded"
        />

        <p className="text-[#fff] my-16 md:text-[22px] text-[19px] leading-8 text-justify">
          {blog.coverDescription}
        </p>
        <div className="pt-10">
          {blog?.blogBody?.map((body) => (
            <div key={body._id} className="pb-24">
              <div className="flex justify-center my-10">
                <img
                  src={body.image}
                  alt=""
                  className="h-96 w-full md:w-[50%] object-cover  rounded "
                />
              </div>
              <p className="text-[#fff] mt-5 md:text-[22px] text-[19px] text-justify">
                {body.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[#fff] mt-10 mb-12 md:text-[22px] text-[19px] text-justify">
          {blog.conclusion}
        </p>

        <div className="sm:mx-10 mb-10">
          <hr className="border-[#192229] border-[1px]" />

          <ShareBlog id={id} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
