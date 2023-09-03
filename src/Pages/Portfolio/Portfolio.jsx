import { useEffect, useState } from "react";
import "./Portfolio.css";

import axios from "axios";
import { Spin } from "antd";
import { antIcon } from "../../utils/Loader";
import CategoryBar from "../../Components/CategoryBar";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [allPortfolio, setallPortfolio] = useState([]);

  const [category, setCategory] = useState("All");

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [totalPortfolio, setTotalPortfolio] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio | Comingsite";
    const getPortfolio = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `/api/v1/portfolio/${category}?page=${page}&limit=5`
        );

        if (res?.data?.statusCode === 200) {
          const { data, meta } = res.data.data;

          setallPortfolio(data);

          setTotalPortfolio(meta.total);

          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error fetching profile:", error);
      }
    };
    getPortfolio();
  }, [category]);

  const loadMore = async () => {
    setPage((prev) => prev + 1);
    try {
      setLoadingMore(true);
      const res = await axios.get(
        `/api/v1/portfolio/${category}?page=${page + 1}&limit=5`
      );

      if (res?.data?.statusCode === 200) {
        const { data } = res.data.data;

        setallPortfolio((prev) => [...prev, ...data]);
        setLoadingMore(false);
      }
    } catch (error) {
      setLoadingMore(false);
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div className="porifolio-bg section-padding">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="uppercase text-center section-title_gradient text-capitalize lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold leading-108%">
          Portfolio Showcase: <br /> From Concept to Creation
        </h1>

        <div>
          <CategoryBar category={category} setCategory={setCategory} />

          {loading ? (
            <div className="flex items-center justify-center h-40">
              <Spin indicator={antIcon} />
            </div>
          ) : (
            <>
              {allPortfolio?.length === 0 ? (
                <div className="flex items-center justify-center text-red-500 text-xl h-40">
                  No portfolio Found!
                </div>
              ) : (
                <>
                  <div className="sm:flex flex-wrap justify-center filter-content">
                    {allPortfolio?.map((item, index) => (
                      <div
                        key={item._id}
                        className="portfolio-image hover:cursor-pointer"
                        onClick={() => navigate(`/portfolio/${item._id}`)}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <img
                          src={item.coverImage}
                          alt="mocdt"
                          className="rounded-lg object-cover"
                        />
                        <div className="py-[15px]">
                          <h5 className="text-capitalize font-semibold text-white text-[22px]">
                            {item.coverTitle}
                          </h5>
                          <small className="text-capitalize font-medium text-green-300 text-sm">
                            {item.category}
                          </small>
                          <p className="text-gray-200 text-capitalize text-[17px] font-thin">
                            {item.coverDescription?.length > 30 ? (
                              <span>
                                {item.coverDescription?.substring(0, 30)}...
                              </span>
                            ) : (
                              <span>{item.coverDescription}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalPortfolio !== allPortfolio.length && (
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
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
