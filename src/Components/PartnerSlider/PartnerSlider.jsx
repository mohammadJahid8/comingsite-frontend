import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aws from "../../assets/slider-logos/aws.png";
import Azure from "../../assets/slider-logos/Azure.png";
import github from "../../assets/slider-logos/github.png";
import googlecloud from "../../assets/slider-logos/googlecloud.png";
import intercom from "../../assets/slider-logos/intercom.png";
import linkedin from "../../assets/slider-logos/linkedin.png";
import mercury from "../../assets/slider-logos/mercury.png";
import mongodb from "../../assets/slider-logos/mongodb.png";
import ms_startups from "../../assets/slider-logos/ms_startups.png";
import mux from "../../assets/slider-logos/mux.png";
import openai from "../../assets/slider-logos/openai.png";
import retool from "../../assets/slider-logos/retool.png";
import slite from "../../assets/slider-logos/slite_logo 1.png";
import stripe from "../../assets/slider-logos/stripe.png";
import vs from "../../assets/slider-logos/vs.png";
import ycombi from "../../assets/slider-logos/ycombi.png";
import zendesk from "../../assets/slider-logos/zendesk.png";

const PartnerSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mb-12">
      <h1 className="text-center text-[#979797] text-sm pb-6">
        Trusted by Renowned Brands Across the Globe
      </h1>
      <Slider {...settings}>
        <div className=" px-4">
          <img src={aws} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={Azure} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={github} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={googlecloud} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={intercom} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={linkedin} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={mercury} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={mongodb} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={ms_startups} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={mux} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={openai} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={retool} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={slite} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={stripe} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={vs} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={ycombi} alt="" className="w-[8rem]" />
        </div>
        <div className=" px-4">
          <img src={zendesk} alt="" className="w-[8rem]" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnerSlider;
