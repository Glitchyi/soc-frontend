import moment from "moment-timezone";
import { useState, useEffect } from "react";

const ComingSoon = () => {
  const targetDateIST = "2025-01-06T10:10:10"; //change the target date here in the format "YYYY-MM-DDTHH:MM:SS"
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  function getTimeDifference(targetDateIST) {
    const now = moment().tz("Asia/Kolkata");
    const target = moment.tz(targetDateIST, "Asia/Kolkata");
    const duration = moment.duration(target.diff(now));
    console.log(duration);
    return {
      days: Math.floor(duration.asDays()).toString(),
      hours: duration.hours().toString().padStart(2, "0"),
      minutes: duration.minutes().toString().padStart(2, "0"),
      seconds: duration.seconds().toString().padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeDifference(targetDateIST));
    }, 1000);
    setTime(getTimeDifference(targetDateIST));
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={" min-h-screen flex flex-col justify-between"}
      id="background"
    >
      <h1 className={"lg:text-3xl text-xl p-4 text-center font-bold text-lightgray"}>
        MITS FOSS | GDG MITS | Tinkerhub MITS{" "}
      </h1>
      <img
        src="/logo.svg"
        alt="Season of Commits Logo"
        className={"lg:h-[30vh] h-[20vh] mx-auto z-10"}
      ></img>
      <h1 className={"text-4xl text-center font-bold z-10 text-lightgray"}>
        Season of Commits
      </h1>

      <div
        className={
          "justify-center gap-[8vw] lg:px-20 py-10 px-7 rounded-[20px] bg-[#11111140] mx-auto flex flex-column z-10 lg:[&>div>h2]:text-8xl lg:[&>div>h2]:w-24 [&>div>h2]:text-4xl"
        }
      >
        {/* Added the styles for H1 and H2 in the div above */}
        <div>
          <h2 className={" text-white text-center"}>{time.days}</h2>
          <h1 className={" text-white text-center"}>DAYS</h1>
        </div>
        <div>
          <h2 className={" text-white text-center"}>{time.hours}</h2>
          <h1 className={"text-white text-center"}>HOURS</h1>
        </div>
        <div>
          <h2 className={" text-white text-center"}>{time.minutes}</h2>
          <h1 className={"text-white text-center"}>MINUTES</h1>
        </div>
        <div>
          <h2 className={"  text-white text-center"}>{time.seconds}</h2>
          <h1 className={"text-white text-center"}>SECONDS</h1>
        </div>
      </div>
      <h1 className={"text-xl lg:text-4xl text-center p-5 text-lightgray font-bold"}>
        Coming Soon...
      </h1>
    </div>
  );
};

export default ComingSoon;
