import { LoadingOutlined } from "@ant-design/icons";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-ping rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900">
        <img
          src="https://res.cloudinary.com/dbpog1ckt/image/upload/v1691940522/qmm5dnocgv3wpejd8afg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      color: "#4afc91",
    }}
    spin
  />
);