/* eslint-disable no-unused-vars */
import { useState } from "react";

import LinesOfCode from "./components/Linesofcode";
import Stats from "./components/Stats";
import { Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    name: "",
    avatar: "",
    email: "",
    github: "",
    contact: "",
    acsesstoken: "",
  });

  const [stats, setStats] = useState({
    repos: 69,
    prs: 50,
    contributors: 12,
  });

  return (
    <>

        <LinesOfCode count={"23,520"}/>

        <div className={"px-10 mb-10 flex justify-between items-end absolute bottom-0 w-full"}> 
          <div className={"flex flex-col gap-10"}>
            <Link
              to="/signup"
              className={
                "flex gap-16 items-center w-fit rounded-full p-5 px-10 bg-darkpacha text-4xl font-bold text-white "
              }
            >
              Start Contributing <img src="git-compare.svg" width={48} />
            </Link>
            <Stats
              repos={stats.repos}
              prs={stats.prs}
              contributors={stats.contributors}
            />
          </div>
          <div
            className={
              "flex flex-col text-right text-5xl font-bold gap-6 underline underline-offset-[10px] justify-end"
            }
          >
            <a href="/about">About</a>
            <a href="/guidelines">Guidelines</a>
            <a href="/maintainers">Maintainers</a>
            <a href="/repositories">Repositories</a>
          </div>
        </div>
      
    </>
  );
}

export default App;
