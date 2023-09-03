/* eslint-disable react/prop-types */

import { Modal, Typography } from "antd";
const ViewBlog = ({ open, setOpen, blog }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title=""
        width={420}
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
        <div
          className="px-4 my-5 max-h-[20rem] md:max-h-[27rem]   overflow-x-auto blog-scrollbar"
          style={{
            fontFamily: "Poppins",
          }}
        >
          <div>
            <img src={blog?.coverImage} alt="" className="rounded w-full" />
          </div>
          <Typography
            variant="small"
            className="flex items-center gap-1 text-sm text-[#A2FF9A] py-2"
          >
            {blog?.coverSubtitle}
          </Typography>
          <h1 className="text-gray-200 text-2xl font-semibold pb-2">
            {blog?.coverTitle}
          </h1>
          <p className="text-gray-400 text-base">{blog?.coverDescription}</p>
        </div>
      </Modal>
    </>
  );
};

export default ViewBlog;
