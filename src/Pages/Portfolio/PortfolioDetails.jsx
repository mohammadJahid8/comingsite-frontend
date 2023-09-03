import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";
import { antIcon } from "../../utils/Loader";

const PortfolioDetails = () => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState({});

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${portfolio?.coverTitle || "Portfolio"} | Comingsite`;
    const getDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/v1/portfolio/single/${id}`);
        const data = res.data;
        setPortfolio(data.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getDetails();
  }, [id]);

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
        <h1 className="lg:text-5xl md:text-3xl text-[24px] font-bold text-white ">
          {portfolio.coverTitle}
        </h1>
        <p className="text-[#A2FF9A] mt-5 text-[16px] max-w-2xl">
          {portfolio.coverSubtitle}
        </p>

        <img
          src={portfolio.coverImage}
          alt=""
          className="h-96 w-full mt-6 mb-10 object-cover rounded"
        />

        <p className="text-[#fff] my-16 md:text-[22px] text-[19px] leading-8 text-justify">
          {portfolio?.coverDescription}
        </p>

        <div className="blog-details pt-10">
          {portfolio?.portfolioBody?.map((item, index) => (
            <div
              className="md:flex items-center gap-7 mt-10 pb-24 blog-details_items"
              key={index}
            >
              <div className="md:w-[50%] pb-5 text">
                <p className="text-[#fff] md:text-[22px] text-[19px] leading-8 text-justify">
                  {item.description}
                </p>
              </div>
              <div className="md:w-[50%] image">
                <img
                  src={item.image}
                  alt={`Item ${index}`}
                  className="w-full rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 md:mt-20 mb-[120px] text-[#fff] font-thin md:text-[22px] text-[19px] leading-8 text-justify">
          {portfolio?.conclusion}
        </p>
      </div>
    </div>
  );
};

export default PortfolioDetails;
