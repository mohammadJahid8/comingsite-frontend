/* eslint-disable react/prop-types */
import linkedin from "../../assets/linkedin.svg";

import facebook from "../../assets/facebook.svg";
import reddit from "../../assets/reddit.svg";
import whatsapp from "../../assets/whatsapp.svg";

const ShareLinks = ({ description, url }) => {
  //   function ShareWebAPI() {
  //     if (navigator.share) {
  //       navigator
  //         .share({
  //           title: description,
  //           url: url,
  //         })
  //         .catch((err) => alert("Error Sharing: " + err));
  //     }
  //   }

  return (
    <div className="flex items-center justify-between pt-2 gap-6">
      <a
        className="social-container"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8 sm:w-full " src={facebook} alt="" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
        target="_blank"
        rel="noreferrer"
        className="social-container"
      >
        <img className="w-8 sm:w-full " src={linkedin} alt="" />
      </a>

      <a
        className="social-container"
        href={`https://www.reddit.com/submit?title=${encodeURI(
          description
        )}&url=${encodeURI(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8 sm:w-full " src={reddit} alt="" />
      </a>
      <a
        className="social-container"
        href={`https://wa.me/?text=${encodeURI(description)}%20${encodeURI(
          url
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8 sm:w-full " src={whatsapp} alt="" />
      </a>
    </div>
  );
};

export default ShareLinks;
