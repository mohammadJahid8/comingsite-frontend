import { Link } from "react-router-dom";
import logo from "../assets/comingsite2.png";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";

const SITEMAP = [
  {
    title: "Main Pages",
    links: ["Services", "Blogs", "About", "Team", "Portfolio", "Contact Us"],
  },
  {
    title: "Our Services",
    links: [
      "Branding & Designs",
      "Business Strategy",
      "Online Marketing",
      "Website Development",
      "App Development",
      "Game Dev",
    ],
  },
  {
    title: "Inquiries",
    links: ["contact@comingsite.com", "Careers", "job@comingsite.com"],
  },
  // {
  //   title: "Careers",
  //   links: ["job@mocdt.com"],
  // },
];

const scroll = (location) => {
  const section = document.querySelector(location);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer className="bg-[#020e13] ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 px-10 lg:px-6">
        <div className="md:flex md:justify-between  ">
          <div className="mb-6 md:mb-0 max-w-full md:max-w-[250px] lg:max-w-[390px]">
            <Link to="/">
              <div className="flex items-center ml-[-20px]">
                <img
                  src={logo}
                  alt="mocdt"
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
                <div className="mt-1">
                  <p className="text-[7px] sm:text-[9px] text-[#f2f2f2] text-end tracking-widest font-thin">
                    an mocdt company
                  </p>
                  <p className="text-xl  sm:text-2xl text-[#f2f2f2] tracking-widest sm:tracking-[0.2rem] font-thin">
                    COMINGSITE
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-[#d4d6d6] text-sm lg:text-sm xl:text-base mt-3 leading-6 font-thin">
              Amplify Your Digital Presence. Expertise in Web Design,
              Development, SEO, and Marketing. Elevate Your Online Potential
              with Our Innovative Solutions and Proven Strategies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-1 lg:gap-6 sm:grid-cols-3">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <h1 className="mb-4 font-bold text-[#4BFF93] text-[15px] sm:text-[14px] xl:text-lg">
                  {title}
                </h1>
                <ul className="space-y-1">
                  {links.map((link, key) => (
                    <li
                      key={key}
                      className={`${
                        link === "Careers"
                          ? "font-bold text-[#4BFF93] text-[14px]  pt-4  "
                          : "font-normal text-[#cccfd0]"
                      } text-sm sm:text-xs xl:text-[15px]`}
                    >
                      <Link
                        to={
                          link === "Services"
                            ? "/service"
                            : link === "Blogs"
                            ? "/blog"
                            : link === "About"
                            ? "/about"
                            : link === "Team"
                            ? "/team"
                            : link === "Portfolio"
                            ? "/portfolio"
                            : link === "Contact Us"
                            ? "/contact"
                            : ""
                        }
                        onClick={() => {
                          if (title === "Our Services") {
                            if (link === "Branding & Designs") {
                              scroll("#design-branding");
                            } else if (link === "Business Strategy") {
                              scroll("#business-strategy");
                            } else if (link === "Online Marketing") {
                              scroll("#online-marketing");
                            } else if (link === "Website Development") {
                              scroll("#website-development");
                            }
                          }
                        }}
                      >
                        <p
                          className={`${
                            link === "Careers" &&
                            "text-[15px] sm:text-[14px] xl:text-lg"
                          } inline-block py-2 pr-2 transition-transform hover:scale-105`}
                        >
                          {link}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:flex-row sm:items-center sm:justify-between flex flex-col justify-center items-center">
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 sm:mb-0 mb-4">
            <a
              href="https://www.facebook.com/mocdtofficial/"
              target="_blank"
              rel="noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100 text-white text-xs lg:text-sm xl:text-base"
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.youtube.com/c/MocDT"
              target="_blank"
              rel="noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100 text-white text-xs lg:text-sm xl:text-base"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/mocdt/"
              target="_blank"
              rel="noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100 text-white text-xs lg:text-sm xl:text-base"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mocdtofficial/"
              target="_blank"
              rel="noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100 text-white text-xs lg:text-sm xl:text-base"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-[#a6a9ab] text-xs lg:text-sm xl:text-base"
            >
              Policy
            </Link>
            <Link
              to="/terms-and-condition"
              className="text-[#a6a9ab] text-xs lg:text-sm xl:text-base"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
