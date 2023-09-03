import HomeBanner from "../Components/HomeBanner/HomeBanner";
import HomeVideo from "../Components/HomeVideo/HomeVideo";
import HomeHosting from "../Components/HomeHosting/HomeHosting";
import PartnerSlider from "../Components/PartnerSlider/PartnerSlider";
import HomeService from "../Components/HomeService/HomeService";
import HomeStepper from "../Components/HomeStepper/HomeStepper";

const Home = () => {
  return (
    <>
      <div>
        <div className="home-bg-1">
          <HomeBanner />
          <PartnerSlider />
          <HomeVideo />
        </div>

        <div className="home-bg-2">
          <HomeService />
          <HomeStepper />
        </div>

        <HomeHosting />
      </div>
    </>
  );
};

export default Home;
