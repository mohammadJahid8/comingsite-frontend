import { useState } from "react";
import { Modal } from "antd";
import videoBG from "../../assets/video_bg.png";
import "./HomeVideo.css";

const HomeVideo = () => {
  const [open, setOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const showModal = () => {
    setOpen(true);
    setVideoPlaying(true);
  };

  const handleCancel = () => {
    const videoIframe = document.getElementById("videoIframe");
    const videoSrc = videoIframe.src;
    videoIframe.src = videoSrc;
    setOpen(false);
    setVideoPlaying(false);
  };

  return (
    <div className="home-video">
      <div className="mx-auto max-w-screen-md">
        <div className="relative border-2  border-[#98F9FF] rounded">
          <img src={videoBG} alt="mocdt" />

          <div
            onClick={showModal}
            className="cursor-pointer rounded-full p-[26px] bg-gradient-to-r from-[#A2FF9A] to-[#3CEB4E] rounded-[4px] text-[#151A14] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <svg
              width="34"
              height="39"
              viewBox="0 0 34 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_26_39)">
                <path
                  d="M4.02734 38.8072C3.37978 38.806 2.74369 38.6371 2.18163 38.3172C0.916008 37.6037 0.129211 36.2186 0.129211 34.7149V4.28505C0.129211 2.77719 0.916008 1.39631 2.18163 0.682777C2.75707 0.353753 3.41078 0.184551 4.07443 0.192858C4.73809 0.201164 5.38731 0.386674 5.95425 0.729996L32.0947 16.2975C32.6395 16.6374 33.0886 17.1093 33.3999 17.6691C33.7112 18.2289 33.8745 18.8581 33.8745 19.4979C33.8745 20.1376 33.7112 20.7669 33.3999 21.3267C33.0886 21.8865 32.6395 22.3584 32.0947 22.6983L5.95003 38.27C5.36984 38.6189 4.7053 38.8046 4.02734 38.8072Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_26_39">
                  <rect width="34" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <Modal
        className="custom-modal"
        open={open}
        footer={null}
        onCancel={handleCancel}
        afterClose={() => setVideoPlaying(false)}
        closeIcon={false}
      >
        {videoPlaying && (
          <iframe
            id="videoIframe"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/v2lNvVNJmzU"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default HomeVideo;
