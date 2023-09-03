/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Slider from "react-slick";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import "./HomeStepper.css";

import animation from "../../assets/animation-bg.png";
import animation2 from "../../assets/animation-bg-2.png";
import animation3 from "../../assets/animation-bg-3.png";
import animation4 from "../../assets/animation-bg-4.png";

const HomeStepper = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
    sliderRef.slickGoTo(stepIndex);
  };

  const handleSlideChange = (currentSlide) => {
    setActiveStep(currentSlide);
  };

  let sliderRef;

  return (
    <div className="stepper-section">
      <div className="mx-auto max-w-screen-xl">
        <div className=" mx-auto mb-5">
          <h4 className="text-center lg:text-5xl md:text-2xl text-xl font-semibold leading-normal pb-5 gradient-text">
            Unveiling Our Methodology: <br /> Crafting Success
          </h4>
        </div>

        <div className="w-full md:px-[120px]">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-white/50"
            activeLineClassName="gradient-white"
          >
            <Step
              className={activeStep === 0 ? "active" : "stepper-icon"}
              onClick={() => handleStepClick(0)}
            >
              <div className="absolute -bottom-[4rem]  text-center text-xs w-[180px] lg:block hidden">
                <Typography variant="h6" className="text-white">
                  Client Engagement and Project Initiation
                </Typography>
              </div>
            </Step>

            <Step
              className={activeStep === 1 ? "active" : "stepper-icon"}
              onClick={() => handleStepClick(1)}
            >
              <div className="absolute -bottom-[2.5rem] w-max text-center text-xs lg:block hidden">
                <Typography variant="h6" className="text-white">
                  Design and Development
                </Typography>
              </div>
            </Step>

            <Step
              className={activeStep === 2 ? "active" : "stepper-icon"}
              onClick={() => handleStepClick(2)}
            >
              <div className="absolute -bottom-[4rem] text-center text-xs w-[180px] lg:block hidden">
                <Typography variant="h6" className="text-white">
                  Testing and Quality Assurance
                </Typography>
              </div>
            </Step>

            <Step
              className={activeStep === 3 ? "active" : "stepper-icon"}
              onClick={() => handleStepClick(3)}
            >
              <div className="absolute -bottom-[4rem] text-center text-xs w-[180px] lg:block hidden">
                <Typography variant="h6" className="text-white">
                  {" "}
                  Deployment, Launch, and Maintenance{" "}
                </Typography>
              </div>
            </Step>
          </Stepper>
        </div>

        <div className="stepper-content lg:mt-[120px] mt-[40px]">
          <Slider
            {...settings}
            ref={(slider) => (sliderRef = slider)}
            afterChange={handleSlideChange}
          >
            <div>
              <div className="lg:flex items-center justify-between">
                <div>
                  <h4 className="text-[#FDFCFF] md:text-3xl sm:text-2xl text-xl font-semibold leading-[1.22] lg:w-[460px] pb-5">
                    Client Engagement and Project Initiation
                  </h4>
                  <p className="text-[#FDFCFF] text-justify text-[17px] font-normal leading-[155%] lg:w-[460px]">
                    Comingsite starts by engaging with clients to understand
                    their software needs and business objectives. During this
                    phase, the agency conducts detailed discussions, gathers
                    requirements, and assesses the project's scope. This step
                    involves identifying the client's target audience, defining
                    features, and setting project goals. Once the project's
                    parameters are clear, Comingsite drafts a project proposal,
                    outlining the project plan, estimated timeline, and budget.
                  </p>
                </div>
                <div>
                  <img src={animation} alt="mocdt" />
                </div>
              </div>
            </div>

            <div>
              <div className="lg:flex items-center justify-between">
                <div>
                  <h4 className="text-[#FDFCFF] md:text-3xl sm:text-2xl text-xl font-semibold leading-[1.22] lg:w-[460px] pb-5">
                    Design and Development
                  </h4>
                  <p className="text-[#FDFCFF] text-justify text-[17px] font-normal leading-[155%] lg:w-[460px]">
                    After receiving approval from the client, Comingsite's
                    design and development teams collaborate to create a
                    blueprint for the software solution. This includes designing
                    user interfaces, creating wireframes, and planning the
                    technical architecture. The development phase follows, where
                    skilled programmers write code, integrate components, and
                    build the software solution. Throughout this step, regular
                    communication is maintained with the client to ensure
                    alignment with their vision and requirements.
                  </p>
                </div>
                <div>
                  <img src={animation2} alt="mocdt" />
                </div>
              </div>
            </div>

            <div>
              <div className="lg:flex items-center justify-between">
                <div>
                  <h4 className="text-[#FDFCFF] md:text-3xl sm:text-2xl text-xl font-semibold leading-[1.22] lg:w-[460px] pb-5">
                    Testing and Quality Assurance
                  </h4>
                  <p className="text-[#FDFCFF] text-justify text-[17px] font-normal leading-[155%] lg:w-[460px]">
                    Comingsite places significant emphasis on quality assurance
                    to deliver robust and reliable software. The testing phase
                    involves various levels of testing, including unit testing
                    to validate individual components, integration testing to
                    ensure smooth interactions between modules, and
                    comprehensive user acceptance testing (UAT) to simulate
                    real-world scenarios. Testing identifies bugs, glitches, and
                    functionality gaps, allowing Comingsite to address them
                    promptly.
                  </p>
                </div>
                <div>
                  <img src={animation3} alt="mocdt" />
                </div>
              </div>
            </div>

            <div>
              <div className="lg:flex items-center justify-between">
                <div>
                  <h4 className="text-[#FDFCFF] md:text-3xl sm:text-2xl text-xl font-semibold leading-[1.22] lg:w-[460px] pb-5">
                    Deployment, Launch, and Maintenance
                  </h4>
                  <p className="text-[#FDFCFF] text-justify text-[17px] font-normal leading-[155%] lg:w-[460px]">
                    With a thoroughly tested software solution, Comingsite
                    assists the client in deploying the software to the target
                    environment. This could involve setting up web servers,
                    launching mobile apps on app stores, or configuring internal
                    networks. Once live, Comingsite continues to provide ongoing
                    maintenance, monitoring the software's performance,
                    addressing any post-launch issues, and releasing updates as
                    needed. This phase ensures the software remains up-to-date,
                    secure, and aligned with evolving user needs.
                  </p>
                </div>
                <div>
                  <img src={animation4} alt="mocdt" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeStepper;
