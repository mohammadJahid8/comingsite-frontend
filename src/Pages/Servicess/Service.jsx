import frame1 from "../../assets/service/Frame-1.svg";
import frame2 from "../../assets/service/Frame-2.svg";
import frame3 from "../../assets/service/Frame-3.svg";
import frame4 from "../../assets/service/Frame-4.svg";
import "./Service.css";

import PartnerClients from "../../Components/PartnerClients/PartnerClients";
import Faq from "../../Components/FAQ/Faq";

import { useEffect } from "react";
import LetsTalk from "../../Components/LetsTalk";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Services | Comingsite";
  }, []);
  return (
    <>
      <div className="porifolio-bg section-padding">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <h1 className="uppercase section-title_gradient text-capitalize lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold leading-108%">
              A full-service digital <br /> innovation partner
            </h1>
            <p className="text-white text-capitalize text-[19px] md:text-[22px] font-normal leading-8 pt-[30px]">
              Our rich design and technology expertise delivers top brands and
              digital experiences.
            </p>
          </div>

          <div className="service-section md:pt-[140px] pt-[100px]">
            <div
              className="service-section_items md:flex justify-between  items-center gap-8"
              id="business-strategy"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="service-section_left md:w-[65%] md:max-w-lg ">
                <div className="flex items-center gap-4 pb-[35px]">
                  <h3 className="text-white text-capitalize lg:text-5xl md:text-2xl text-2xl font-semibold leading-snug">
                    Business Strategy Development
                  </h3>
                </div>
                <p className="pb-[35px] text-gray-300 text-capitalize md:text-[22px] text-[19px] font-normal leading-8">
                  Our creative services encompass Logo, Brand Identity, and
                  Graphic Design, enhancing Web, UI/UX, and Product Design. We
                  specialize in Interior, Fashion Design, Graphic Art, and
                  Illustration, delivering comprehensive visual solutions.
                </p>
                <ul className="pb-10 md:pb-0">
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize md:text-[20px] text-[19px] font-medium leading-normal services-arrow">
                    Customer experience strategy
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Pricing strategy
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Distribution strategy
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Marketing strategy
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Sales strategy
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Differentiation strategy
                  </li>
                </ul>
              </div>
              <div className="service-section_right md:w-[450px] border border-solid border-[#45767c] py-12 rounded-lg">
                <img src={frame1} alt="mocdt" />
              </div>
            </div>

            <div
              className="service-section_items md:flex justify-between items-center gap-8"
              id="design-brandings"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="service-section_left md:w-[65%] md:max-w-lg ">
                <div className="flex items-center gap-4 pb-[35px]">
                  <h3 className="text-white text-capitalize lg:text-5xl md:text-2xl text-2xl font-semibold leading-snug">
                    Creative Design & Brandings
                  </h3>
                </div>
                <p className="pb-[35px] text-gray-300 text-capitalize md:text-[22px] text-[19px] font-normal leading-8">
                  Our creative services encompass Logo, Brand Identity, and
                  Graphic Design, enhancing Web, UI/UX, and Product Design. We
                  specialize in Interior, Fashion Design, Graphic Art, and
                  Illustration, delivering comprehensive visual solutions.
                </p>
                <ul className="pb-10 md:pb-0">
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize md:text-[20px] text-[19px] font-medium leading-normal services-arrow">
                    Logo design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Brand identity design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Web design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Graphic design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    UI/UX design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Product design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Interior design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Fashion design
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Graphic art
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Illustration
                  </li>
                </ul>
              </div>
              <div className="service-section_right md:w-[450px] border border-solid border-[#45767c] py-12 rounded-lg">
                <img src={frame2} alt="mocdt" />
              </div>
            </div>

            <div
              className="service-section_items md:flex justify-between items-center gap-8"
              id="product-development"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="service-section_left md:w-[65%] md:max-w-lg ">
                <div className="flex items-center gap-4 pb-[35px]">
                  <h3 className="text-white text-capitalize lg:text-5xl md:text-2xl text-2xl font-semibold leading-snug">
                    Digital Product Development
                  </h3>
                </div>
                <p className="pb-[35px] text-gray-300 text-capitalize md:text-[22px] text-[19px] font-normal leading-8">
                  Our creative services encompass Logo, Brand Identity, and
                  Graphic Design, enhancing Web, UI/UX, and Product Design. We
                  specialize in Interior, Fashion Design, Graphic Art, and
                  Illustration, delivering comprehensive visual solutions.
                </p>
                <ul className="pb-10 md:pb-0">
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize md:text-[20px] text-[19px] font-medium leading-normal services-arrow">
                    Software development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Web development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Mobile app development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Game development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Database development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    API development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Embedded systems development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Machine learning development
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Artificial intelligence development
                  </li>
                </ul>
              </div>
              <div className="service-section_right md:w-[450px] border border-solid border-[#45767c] py-12 rounded-lg">
                <img src={frame3} alt="mocdt" />
              </div>
            </div>

            <div
              className="service-section_items md:flex justify-between items-center gap-8"
              id="marketing"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="service-section_left md:w-[65%] md:max-w-lg ">
                <div className="flex items-center gap-4 pb-[35px]">
                  <h3 className="text-white text-capitalize lg:text-5xl md:text-2xl text-2xl font-semibold leading-snug">
                    Social Media & Digital Marketing
                  </h3>
                </div>
                <p className="pb-[35px] text-gray-300 text-capitalize md:text-[22px] text-[19px] font-normal leading-8">
                  Our creative services encompass Logo, Brand Identity, and
                  Graphic Design, enhancing Web, UI/UX, and Product Design. We
                  specialize in Interior, Fashion Design, Graphic Art, and
                  Illustration, delivering comprehensive visual solutions.
                </p>
                <ul className="pb-10 md:pb-0">
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize md:text-[20px] text-[19px] font-medium leading-normal services-arrow">
                    Content marketing
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Search engine optimization (SEO)
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Pay-per-click (PPC) advertising
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Social media marketing
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Email marketing
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Public relations
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Direct marketing
                  </li>
                  <li className="hover:pl-2 transition-all flex gap-3 pb-2 items-center text-white text-capitalize text-[20px] font-medium leading-normal services-arrow">
                    Sales promotion
                  </li>
                </ul>
              </div>
              <div className="service-section_right md:w-[450px] border border-solid border-[#45767c] py-12 rounded-lg">
                <img src={frame4} alt="mocdt" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-3 pt-20 md:pb-[120px] pb-[60px]"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <PartnerClients />
        <Faq />

        <LetsTalk />
      </div>
    </>
  );
};

export default Service;
