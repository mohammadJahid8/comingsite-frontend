import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const scroll = () => {
    const section = document.querySelector("#service-section");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="home-banner-bg section-padding">
      <div className="mx-auto max-w-screen-xl">
        <div className="lg:flex items-center">
          <h1 className="home-banner leading-trim text-edge-cap md:text-8xl sm:text-5xl text-2xl font-Poppins  leading-[108%]">
            UNLEASHING MAGIC IN CREATION
          </h1>

          <div>
            <p className="text-white leading-8">
              Amplify Your Digital Presence. Expertise in Web Design,
              Development, SEO, and Marketing. Elevate Your Online Potential
              with Our Innovative Solutions and Proven Strategies.
            </p>
            <div className="flex gap-4 mt-6">
              {/* <ScrollLink to="service-section" smooth={true} duration={500} > */}
              <Link
                to="/contact"
                className="py-[12px] sm:py-[16px] px-[22px] bg-gradient-to-r from-[#A2FF9A] to-[#3CEB4E] rounded-[4px] text-[#151A14] inline-block hover:bg-gradient-to-l transition text-sm sm:text-base font-bold"
              >
                Get Started
              </Link>

              <button
                onClick={scroll}
                className="py-[12px] sm:py-[16px] px-[22px] bg-[#FDFCFF] rounded-[4px] text-[#151A14] inline-block text-sm sm:text-base font-bold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
