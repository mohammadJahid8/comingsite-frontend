/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import aboutbanner from "../../assets/about.png";

import cofounders from "../../assets/cofounders.png";
import collab from "../../assets/collab.png";
import tomorrow from "../../assets/tomorrow.png";

import PartnerClients from "../../Components/PartnerClients/PartnerClients";
import { useEffect } from "react";
import LetsTalk from "../../Components/LetsTalk";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Comingsite";
  }, []);
  return (
    <div className="about-bg section-padding">
      <div className="">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="uppercase about-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90px] text-center font-bold">
            Elevating Brands in the <br /> Digital Sphere
          </h1>

          <div className="relative  rounded mt-14">
            <img
              src={aboutbanner}
              alt="mocdt"
              className="w-full h-auto md:h-[530px] rounded object-cover"
            />
          </div>

          <div className="about-discuss-bg py-5 md:py-12 flex justify-around items-center rounded-[25px] my-10 md:my-[90px] ">
            <div className="text-center text-black">
              <h1 className="text-2xl md:text-6xl font-extrabold">5+</h1>
              <p className="text-xs md:text-lg px-2">Years of experience</p>
            </div>
            <div className="text-center text-black">
              {" "}
              <h1 className="text-2xl md:text-6xl font-extrabold">200+</h1>
              <p className="text-xs md:text-lg px-2">Completed Projects</p>
            </div>
            <div className="text-center text-black">
              {" "}
              <h1 className="text-2xl md:text-6xl font-extrabold ">25+</h1>
              <p className="text-xs md:text-lg px-2">Satisfied Clients</p>
            </div>
          </div>
        </div>

        <div className="about-middle-bg">
          <div
            className="mx-auto max-w-screen-xl"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <p className="my-2 md:my-5 text-gray-200 text-[19px] md:text-[22px]  text-justify leading-8 text-edge-cap font-thin">
              Step right into the vibrant world of Comingsite, a trailblazing
              agency under the prestigious MocDT banner. Together, we weave
              astonishing digital tapestries tailored to captivate and impress.
              Fueled by unwavering dedication to innovation and customer
              delight, we meld artistry and technology to craft solutions that
              truly reverberate.
            </p>

            <p className="my-2 md:mb-5 text-gray-200 text-[19px] md:text-[22px]  text-justify leading-8 text-edge-cap font-thin">
              At Comingsite, we're acutely aware of the power of smooth,
              immersive customer journeys. Our passionate team works in harmony
              to devise strategies that shatter the confines of convention. From
              user-focused designs to pioneering technologies, your adventure
              with us will be etched with brilliance.
            </p>

            <p className="my-2 md:mb-5 text-gray-200 text-[19px] md:text-[22px]  text-justify leading-8 text-edge-cap font-thin">
              As an esteemed member of the MocDT clan, we champion their
              principles of honesty, synergy, and progressive-thinking.
              Arm-in-arm, let's journey together to morph potential into
              actuality. Embark with us at Comingsite, and together we'll sculpt
              a mesmerizing digital landscape that leaves all in awe.
            </p>

            <div>
              <h1 className="text-white text-center lg:text-5xl md:text-3xl text-2xl mt-14  md:mt-24 font-bold ">
                We Take Care of
              </h1>

              <div
                className="flex justify-between flex-col-reverse md:flex-row items-center gap-8 my-14 md:my-36  "
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="flex  items-start gap-3 ">
                  <div className="max-w-xl">
                    <h3 className="text-white text-[21px] md:text-[22px] font-bold">
                      Guided by Visionary Co-Founders:
                    </h3>
                    <p className=" text-[#FFFFFF99] text-[18px] md:text-[19px] mt-2">
                      In a landscape where larger agencies delegate to junior
                      staff, Comingsite embraces a different paradigm. Our
                      co-founders lead proficient, senior-level teams spanning
                      diverse disciplines, ensuring unwavering project success.
                    </p>
                  </div>
                </div>

                <img
                  src={cofounders}
                  alt=""
                  className="w-96 aboutimg rounded-lg"
                />
              </div>

              <div
                className="flex justify-between flex-col md:flex-row items-center gap-8 my-14 md:my-36"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img
                  src={collab}
                  alt=""
                  className="w-96 aboutimg rounded-lg aboutimg"
                />

                <div className="flex  items-start gap-3">
                  <div className="max-w-xl">
                    <h3 className="text-white text-[21px] md:text-[22px] font-bold">
                      Collaboration Amplified:
                    </h3>
                    <p className=" text-[#FFFFFF99] text-[18px] md:text-[19px] mt-2">
                      At Comingsite, collaboration isn't just a value—it's our
                      core. We cultivate transparent communication, offering an
                      elevated client experience from project inception to
                      culmination. Our startup agility coupled with enterprise
                      acumen has sculpted a refined project management approach.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-between flex-col-reverse md:flex-row items-center gap-8 mt-14 md:mt-36  md:mb-10"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="flex items-start gap-3">
                  <div className="max-w-xl">
                    <h3 className="text-white text-[21px] md:text-[22px] font-bold">
                      Designs for Tomorrow, Today:
                    </h3>
                    <p className=" text-[#FFFFFF99] text-[18px] md:text-[19px] mt-2">
                      Our designs aren't fleeting trends; they're blueprints for
                      sustained success. The Comingsite portfolio proudly
                      showcases websites and products that have thrived
                      unchanged, underlining our commitment to crafting work
                      that endures. In the realm where leadership ignites,
                      collaboration blooms, and foresight is key, Comingsite
                      beckons. We aren't just crafting solutions; we're
                      architects of enduring legacies. Embark with Comingsite
                      and journey toward a horizon where excellence takes on new
                      dimensions.
                    </p>
                  </div>
                </div>

                <img
                  src={tomorrow}
                  alt=""
                  className="w-96 aboutimg rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-3 pt-20 md:pt-36">
            <div
              className="mx-auto max-w-screen-xl"
              data-aos="fade-up "
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <PartnerClients />
              <LetsTalk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
