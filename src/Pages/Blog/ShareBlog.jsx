/* eslint-disable react/prop-types */
import ShareLinks from "./ShareLinks";
import copy from "../../assets/copy.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Tooltip } from "antd";
const ShareBlog = ({ id }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full sm:w-[580px] sharebox py-8 sm:px-16 px-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="about-text md:text-[22px] text-[19px] text-center">
            Share this blog
          </h1>
          <p className="text-[#EBEBEB] md:text-[17px] text-[15px] tracking-wider text-center">
            If you like this article, you can share it with your friends.
          </p>
          <ShareLinks
            description="Check out this interesting blog! <br/>"
            url={`${window.origin}/blog/${id}`}
          />

          <div className="relative w-full mt-3">
            <input
              type="search"
              id="default-search"
              className="block p-4 w-full h-[42px] text-sm text-[#a9adaf] border-[1.5px] border-[#142b41] rounded-[4px] bg-[#0E1B24] outline-none"
              value={`${window.origin}/blog/${id}`.slice(0, 50) + "..."}
              disabled
            />
            <CopyToClipboard
              text={`${window.origin}/blog/${id}`}
              onCopy={handleCopy}
            >
              <Tooltip title="Copied!" trigger="click" open={copied}>
                <button
                  type="submit"
                  className="rounded text-white h-full absolute right-0 bottom-0 bg-gradient-to-r   p-4 transition duration-300 hover:bg-gradient-to-l from-[#9CFE95] to-[#41EC52] flex items-center"
                >
                  <img src={copy} alt="" />
                </button>
              </Tooltip>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBlog;
