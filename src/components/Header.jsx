// eslint-disable-next-line react/prop-types
export default function Header({ avatar = "", github = "" }) {
  return (
    <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-8"}>
        <img src="/logo.svg" alt="Season of Commits Logo" className={":w-16"} />
        <h1 className={"hidden lg:block text-4xl font-bold"}>
          Season of Commits
        </h1>
      </div>
      <div
        className={
          "flex items-center gap-4 lg:gap-8 bg-green-100 border-2 border-black px-4 py-2 rounded-full"
        }
      >
        <h1 className={"text-xl lg:text-4xl font-bold"}>{github}</h1>
        <img
          src={avatar ? avatar : "/default_user.svg"}
          className={"w-8 lg:w-16 rounded-full"} // Somethings off here. Gotta look into it. Default does not work for some reason
        />
      </div>
    </div>
  );
}
