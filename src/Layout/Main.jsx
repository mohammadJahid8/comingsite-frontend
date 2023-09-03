import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen background">
      {/* <div className=""> */}
      <Navbar />
      {/* </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
