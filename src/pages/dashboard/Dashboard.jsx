import Contributed_Repos from "./Contributed_Repos";
import Pull_Requests from "./Pull_Requests";

const Dashboard = () => {
  return (
    <div className="p-12 h-screen">
      <div className="w-full h-[95%] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:h-[85%] overflow-hidden">
          <h1 className="text-4xl lg:text-6xl font-bold mt-10 lg:mt-20 mb-5 lg:mb-10">
            Contributed Repos
          </h1>
          <div className="w-full h-full overflow-scroll p-2 scroll-hide">
            <Contributed_Repos />
          </div>
        </div>
        <div className="w-full h-1/2 lg:w-1/2 lg:h-[85%] overflow-hidden">
          <h1 className="text-4xl lg:text-6xl font-bold mt-10 mb-10 lg:mt-20 lg:mb-10">
            Pull Requests
          </h1>
          <div className="w-full h-full overflow-scroll p-2 scroll-hide">
            <Pull_Requests />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
