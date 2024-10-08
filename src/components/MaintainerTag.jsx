// eslint-disable-next-line react/prop-types
export default function MaintainerTag({ avatar = "", github = "", link = "" }) {
  return (
    <div className={"pt-sans flex items-center justify-between flex-wrap border-4 border-darkpacha/80 px-4 py-4 rounded-lg"}>
      <div className={"flex items-center gap-8"}>
        <img src={avatar} className={"w-20 rounded-full"} />
        <div className="flex flex-col gap-2">
          <h1 className={"text-4xl font-bold whitespace-nowrap"}>{github}</h1>
          <a href={link} className="text-lg font-bold ">
            {link.replace("https://", "")}
          </a>
        </div>
      </div>
    </div>
  );
}
