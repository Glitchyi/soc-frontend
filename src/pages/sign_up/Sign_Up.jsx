import React from "react";
import Header from "../../components/Header";

const Sign_Up = () => {
  return (
    <div className="p-12 h-screen">
      <Header
        github={"Glitchyi"} //TODO
        avatar={"https://avatars.githubusercontent.com/u/55801439?v=4"} //TODO
      />

      <div className=" h-full flex items-center">
        <div className="w-1/2 h-[80%] border-r-2 border-black/60 flex flex-col items-center justify-center gap-2">
          <button className="font-bold text-2xl text-white bg-black py-4 px-6 rounded-full hover:scale-105 transition-all ease-in-out">
            Register with Github
          </button>
          <span>
            or <span className="underline cursor-pointer">sign back in</span>
          </span>
        </div>
        <div className="w-1/2 h-[80%]"></div>
      </div>
    </div>
  );
};

export default Sign_Up;
