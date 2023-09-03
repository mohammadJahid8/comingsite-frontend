import "./PartnerClients.css";

import partner1 from "../../assets/slider-logos/mux.png";
import partner2 from "../../assets/slider-logos/openai.png";
import partner3 from "../../assets/slider-logos/retool.png";
import partner4 from "../../assets/slider-logos/slite_logo 1.png";
import partner5 from "../../assets/slider-logos/stripe.png";

import partner6 from "../../assets/slider-logos/vs.png";
import partner7 from "../../assets/slider-logos/ycombi.png";
import partner8 from "../../assets/slider-logos/zendesk.png";
import partner9 from "../../assets/slider-logos/aws.png";
import partner10 from "../../assets/slider-logos/Azure.png";

import partner11 from "../../assets/slider-logos/github.png";
import partner12 from "../../assets/slider-logos/googlecloud.png";
import partner13 from "../../assets/slider-logos/intercom.png";
import partner14 from "../../assets/slider-logos/linkedin.png";
import partner15 from "../../assets/slider-logos/mercury.png";

import partner16 from "../../assets/slider-logos/mongodb.png";
import partner17 from "../../assets/slider-logos/ms_startups.png";
import partner18 from "../../assets/slider-logos/microsoft.png";
import partner19 from "../../assets/slider-logos/doola.png";

const PartnerClients = () => {
  return (
    <div className="padding-bottom-120">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-[60px]">
          <h2 className="text-white text-center leading-trim text-capitalize  lg:text-5xl md:text-3xl text-2xl font-bold leading-normal">
            Partners & Clients
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 partner-logo">
          <img src={partner1} alt="mocdt" />
          <img src={partner2} alt="mocdt" />
          <img src={partner3} alt="mocdt" />
          <img src={partner4} alt="mocdt" />
          <img src={partner5} alt="mocdt" />

          <img src={partner6} alt="mocdt" />
          <img src={partner7} alt="mocdt" />
          <img src={partner8} alt="mocdt" />
          <img src={partner9} alt="mocdt" />
          <img src={partner10} alt="mocdt" />

          <img src={partner11} alt="mocdt" />
          <img src={partner12} alt="mocdt" />
          <img src={partner13} alt="mocdt" />
          <img src={partner14} alt="mocdt" />
          <img src={partner15} alt="mocdt" />

          <img src={partner16} alt="mocdt" />
          <img src={partner17} alt="mocdt" />
          <img src={partner18} alt="mocdt" />
          <img src={partner19} alt="mocdt" />
        </div>
      </div>
    </div>
  );
};

export default PartnerClients;
