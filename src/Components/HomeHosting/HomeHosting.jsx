import "./HomeHosting.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeHosting = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      const res = await axios.get("/api/v1/portfolio/design");
      const data = res.data?.data?.data;
      setPortfolio(data);
      console.log(data);
    };
    getPortfolio();
  }, []);

  return (
    <div className="hosting-section">
      <div className="mx-auto max-w-screen-xl">
        <div className="section-padding">
          <div className="md:w-[760px] mx-auto mb-5">
            <h4 className="text-center md:text-5xl text-2xl font-semibold leading-normal pb-5 gradient-text">
              Portfolio Gallery: Highlighting Our Remarkable Works
            </h4>
          </div>

          <div className="md:flex items-center gap-8">
            <div className="md:w-[45%]">
              <span className="text-[#A2FF9A] text-center py-2 px-4 rounded-[58px] bg-[#1A1A1A] text-xs font-medium mb-[20px] table">
                Our Works
              </span>
              <h3 className="text-white text-edge-cap md:text-5xl sm:text-2xl text-xl font-bold leading-[1.25] mb-5">
                Discover Our Portfolio
              </h3>
              <p className="text-[rgba(255,255,255,0.70)] text-justify leading-[normal] text-edge-cap text-[17px] font-normal">
                Step into a realm of captivating design, cutting-edge
                development, and impactful marketing. Explore our diverse
                portfolio showcasing breakthroughs in branding, web solutions,
                app development, and more. Witness firsthand how We transforms
                visions into triumphs. Join us on a journey where every project
                reflects our commitment to excellence.
              </p>
            </div>
            <div className="md:w-[35%] py-[20px] hosting-section_middle">
              <Link
                to={`/portfolio/${portfolio?.[0]?._id}`}
                key={portfolio?.[0]?._id}
              >
                <img
                  src={portfolio?.[0]?.coverImage}
                  // src={JobLinker}
                  alt="mocdt"
                  className="rounded h-[511px] object-cover"
                />
              </Link>
            </div>
            <div className="md:w-[20%] hosting-section_last">
              {portfolio?.slice(1, 4).map((item, index) => (
                <Link to={`/portfolio/${item._id}`} key={item._id}>
                  <div
                    className={`rounded-md border border-solid border-white py-4 px-4 ${
                      index !== 2 && "mb-6"
                    } home-portfolio-box flex items-end`}
                    style={{
                      backgroundImage: `url(${item?.coverImage}),linear-gradient(0deg, #010B12 0%, rgba(2, 11, 19, 0.00) 100%)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "150px",
                    }}
                  >
                    <h6 className="text-white leading-[normal] text-base font-semibold">
                      {" "}
                      {item?.coverSubtitle}{" "}
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-[40px] text-center">
            <Link
              to="/portfolio"
              className="inline-block text-[#A2FF9A]  text-edge-cap text-sm sm:text-base py-[14px] px-[18px] border border-solid border-[#A2FF9A] rounded-md transition duration-500 hover:text-[#151A14] hover:bg-[#41EC52]"
            >
              VIEW ALL WORKS
            </Link>
          </div>
        </div>

        <div className="padding-bottom-100">
          <div className="py-8 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-around px-4 items-center rounded-[25px] discuss-bg">
            <h4 className="text-[#000B12] text-center text-[16.5px]  sm:text-start md:text-4xl sm:text-2xl font-bold leading-[125%] w-[310px]">
              Let’s Discuss For a Cool Project!
            </h4>

            <Link
              to="/contact"
              className="sm:py-[16px] sm:px-[20px] md:px-[50px] px-3 py-2 rounded-[4px] bg-[#FDFCFF] shadow-[0px 0px 25px 0px rgba(0, 0, 0, 0.10)] font-bold"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHosting;
