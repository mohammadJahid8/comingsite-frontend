import { useEffect, useState } from "react";
import "./Team.css";
import axios from "axios";
import LetsTalk from "../../Components/LetsTalk";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Out Team | Comingsite";
    const getPortfolio = async () => {
      const res = await axios.get("/api/v1/team");
      const data = res.data?.data?.data;
      setTeams(data);
      setloading(false);
    };
    getPortfolio();
  }, []);

  const arr = Array.from(Array(8).keys());

  return (
    <div className="team-bg section-padding">
      <div className="mx-auto max-w-screen-xl">
        <div className="px-5 md:px-20 pb-20">
          <h1 className="uppercase about-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[90px] text-center font-bold">
            Team behind all magic
          </h1>
          <p className="text-white text-center text-[19px] md:text-[22px] font-thin my-5 md:my-10 leading-8">
            Meet the Proficient Minds of Comingsite: A Mocdt Company. Our
            dedicated team, meticulously curated from diverse domains, fuels the
            driving force behind our digital prowess. Discover the experts
            committed to elevating your brand&apos;s journey.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {arr?.map((team) => (
              <div className="" key={team}>
                <div className="flex justify-center">
                  <div className=" bg-gray-700 transition animate-pulse w-52 h-52 rounded-full"></div>
                </div>

                <div className="flex justify-center">
                  <p className="text-white  text-center text-sm bg-gray-700 transition animate-pulse py-1 w-36 mb-2 mt-3 ">
                    {" "}
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-white  text-center text-sm bg-gray-700 transition animate-pulse py-1 w-20">
                    {" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-0 xl:gap-10">
            {teams?.map((team) => (
              <div className="team-items flex justify-center" key={team?._id}>
                <div>
                  <div className="team-items-img flex justify-center">
                    <img src={team.image} alt="mocdt" className="" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-lg"> {team.name} </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-sm"> {team.designation} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-20">
          <LetsTalk />
        </div>
      </div>
    </div>
  );
};

export default Team;
