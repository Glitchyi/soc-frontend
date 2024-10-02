/* eslint-disable no-unused-vars */
import { useState } from "react";


import LinesOfCode from "./components/Linesofcode";
import Stats from "./components/Stats";
import Header from "./components/Header";

function App() {

  const [user,setUser] = useState({
    name: "",
    avatar: "",
    email: "",
    github: "",
    contact: "",
    acsesstoken: ""
  });

  const [stats, setStats] = useState({
    repos:69,
    prs:50,
    contributors:12
  })
  
  return (
    <>
      <div
        className={"bg-custom-gradient h-screen flex flex-col justify-between"}
        id={"background"}
      >
        <div className={"mx-10 mt-10"}>
          <Header
          github={"Glitchyi"} //TODO
          avatar={"https://avatars.githubusercontent.com/u/55801439?v=4"} //TODO
          />
          <LinesOfCode count={"23,520"} />
        </div>

        <div className={"px-10 mb-10 flex justify-between items-end"}>
          <div className={"flex flex-col gap-10"}>
            <button
              className={
                "flex gap-16 items-center w-fit rounded-full p-5 px-10 bg-darkpacha text-4xl font-bold text-white "
              }
            >
              Start Contributing <img src="git-compare.svg" width={48} />
            </button>
            <Stats
              repos={stats.repos}
              prs={stats.prs}
              contributors={stats.contributors}
            />
          </div>
          <div
            className={
              "flex flex-col text-right text-7xl font-bold gap-10 underline underline-offset-[20px] justify-end"
            }
          >
            <h1>About</h1>
            <h1>Maintainers</h1>
            <h1>Repositories</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
