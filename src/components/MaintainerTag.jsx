// eslint-disable-next-line react/prop-types
export default function MaintainerTag({ avatar = "", github = "", link = "" }) {
  return (
    <div className={"pt-sans flex items-center justify-between flex-wrap border-4 border-darkpacha/80 px-4 py-4 rounded-xl bg-green-100"}>
      <div className={"flex items-center gap-8"}>
        <img src={avatar} className={"w-16 rounded-full"} />
        <div className="flex flex-col gap-1">
          <h1 className={"lg:text-3xl text-xl font-bold whitespace-nowrap"}>{github}</h1>
          <a href={link} className="lg:text-lg font-medium">
            {link.replace("https://", "")}
          </a>
        </div>
      </div>
    </div>
  );
}
