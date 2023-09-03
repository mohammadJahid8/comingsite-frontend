/* eslint-disable react/prop-types */

import { Modal } from "antd";
const ViewContacts = ({ open, setOpen, contact }) => {
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
          <h1 className="text-gray-200 text-base  pb-2">
            Name: {contact?.name}
          </h1>
          <h1 className="text-gray-200 text-base  pb-2">
            Email: {contact?.email}
          </h1>
          <h1 className="text-gray-200 text-base  pb-2">
            Subject: {contact?.subject}
          </h1>
          <p className="text-gray-400 text-base">{contact?.message}</p>
        </div>
      </Modal>
    </>
  );
};

export default ViewContacts;
