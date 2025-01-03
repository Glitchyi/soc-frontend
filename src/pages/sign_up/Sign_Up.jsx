import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Header from "../../components/Header";
import { use } from "react";

const fetchData = async () => {
  const response = await axios.get("http://127.0.0.1:5000/login");
  return response.data;
};

const Sign_Up = () => {
  const { data, error, isLoading, refetch } = useQuery("fetchData", fetchData, {
    enabled: false, // Disable automatic query execution
  });
  const handleClick = () => {
    refetch();
  };
  useEffect(() => {
    if (data) {
        
    }
  }, [data]);
  return (
    <div className="p-12 h-screen">
      <Header
        github={"Glitchyi"} //TODO
        avatar={"https://avatars.githubusercontent.com/u/55801439?v=4"} //TODO
      />

      <div className=" h-full flex items-center">
        <div className="w-1/2 h-[80%] border-r-2 border-black/60 flex flex-col items-center justify-center gap-2">
          <button
            onClick={handleClick}
            className="font-bold text-2xl text-white bg-black py-4 px-6 rounded-full hover:scale-105 transition-all ease-in-out"
          >
            {isLoading ? "Loading..." : "Register with Github"}
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
