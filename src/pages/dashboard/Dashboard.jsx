import React from "react";
import Header from "../../components/Header";
import Contributed_Repos from "./Contributed_Repos";
import Pull_Requests from "./Pull_Requests";

const Dashboard = () => {
  return (
    <div className="p-10 h-screen">
      <Header
        github={"Glitchyi"} //TODO
        avatar={"https://avatars.githubusercontent.com/u/55801439?v=4"} //TODO
      />
      <div className="w-full flex">
        <div className="w-1/2 h-full">
          <Contributed_Repos />
        </div>
        <div className="w-1/2 h-full">
          <Pull_Requests />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
