
// eslint-disable-next-line react/prop-types
export default function Header({avatar="",github=""}) {
  return (
      <div className={"flex items-center justify-between"}>
          <div className={"flex items-center gap-8"}>
              <img src="/logo.svg" alt="Season of Commits Logo" className={"w-16"}/>
              <h1 className={"text-4xl font-bold"}>Season of Commits</h1>
          </div>
          <div className={"flex items-center gap-8"}>
              <h1 className={"text-4xl font-bold"}>{github}</h1>
              <img src={avatar} className={"w-16 rounded-full"}/>
          </div>
              
      </div>
  );
}
