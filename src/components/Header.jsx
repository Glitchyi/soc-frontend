// eslint-disable-next-line react/prop-types
export default function Header({ avatar = "", github = "" }) {
  const user = JSON.parse(localStorage.getItem('user')) || {
    login: github,
    id: "id",
    avatar: avatar,
    html_url: "html_url"
  };
  avatar = user.avatar; 
  github = user.login;
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
          "flex items-center gap-4 lg:gap-8 bg-green-100 border-2 border-black px-6 py-3 rounded-full"
        }
      >
        {github && <h1 className={"text-xl lg:text-3xl font-bold"}>{github}</h1>}
        <img
          src={avatar ? avatar : "/user.svg"}
          className={"w-8 lg:w-12 rounded-full object-cover  object-center "} // Somethings off here. Gotta look into it. Default does not work for some reason
        />
      </div>
    </div>
  );
}
