import "./Blog.css";

import BlogCard from "../../Components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

import { Spin } from "antd";
import { antIcon } from "../../utils/Loader";
import RecentBlogs from "./RecentBlogs";
import TopBlogs from "./TopBlogs";
import CategoryBar from "../../Components/CategoryBar";

const Blog = () => {
  const [allBlogs, setallBlogs] = useState([]);
  const [topBlogs, setTopBlogs] = useState([]);

  const [category, setCategory] = useState("All");

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blogs | Comingsite";
    const getTopBlogs = async () => {
      setLoading(true);
      const res = await axios.get(`/api/v1/blog/top-blogs/${category}`);
      const data = res.data?.data;
      setTopBlogs(data);

      try {
        const res = await axios.get(
          `/api/v1/blog/${category}?page=${page}&limit=8`
        );

        if (res?.data?.statusCode === 200) {
          const { data, meta } = res.data.data;

          setallBlogs(data);

          setTotalBlogs(meta.total);

          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error fetching profile:", error);
      }
    };
    getTopBlogs();
  }, [category]);

  const loadMore = async () => {
    setPage((prev) => prev + 1);
    try {
      setLoadingMore(true);
      const res = await axios.get(
        `/api/v1/blog/${category}?page=${page + 1}&limit=2`
      );

      if (res?.data?.statusCode === 200) {
        const { data } = res.data.data;

        setallBlogs((prev) => [...prev, ...data]);
        setLoadingMore(false);
      }
    } catch (error) {
      setLoadingMore(false);
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div className="blog-bg pt-[60px] md:pt-[120px] ">
      <div className="">
        <h1 className="uppercase text-center section-title_gradient text-capitalize lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold pb-4">
          Blog Corner: <br />
          Insights, Ideas, and Inspiration
        </h1>
        <CategoryBar category={category} setCategory={setCategory} />
        {loading ? (
          <div className="flex items-center justify-center h-40 pt-20 pb-40">
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <>
            {allBlogs?.length === 0 ? (
              <div className="flex items-center justify-center text-red-500 text-xl h-40">
                No Blogs Found!
              </div>
            ) : (
              <>
                <TopBlogs topBlogs={topBlogs} />
                <RecentBlogs allBlogs={allBlogs} />

                <div
                  className="mt-20 home-bg-2 pb-[60px] md:pb-[120px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="mx-auto max-w-screen-xl ">
                    <div className="flex  gap-1 items-center">
                      <h1 className="text-white text-4xl uppercase mt-5 mb-9">
                        All blogs
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-6 mx-auto">
                      {allBlogs?.map((blog, index) => (
                        <BlogCard key={blog._id} blog={blog} index={index} />
                      ))}
                    </div>
                    {totalBlogs !== allBlogs.length && (
                      <div className="pt-[50px] text-center">
                        <button
                          onClick={loadMore}
                          disabled={loadingMore}
                          className="inline-block text-[#A2FF9A] text-sm sm:text-base py-[14px] px-[35px] rounded-md border border-solid border-green-300 transition duration-500 hover:text-[#151A14] hover:bg-[#41EC52]"
                        >
                          {loadingMore ? "Loading..." : "Load More"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
