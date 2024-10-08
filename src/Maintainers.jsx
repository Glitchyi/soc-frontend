import Header from "./components/Header";
import MaintainerTag from "./components/MaintainerTag";

const Maintainers = () => {
  const data = [
    {
      github: "Advaith Narayanan",
      avatar: "https://avatars.githubusercontent.com/u/55801439?v=4",
      link: "https://github.com/Glitchyi"
    },
    {
        github: "Rohit Babu George",
        avatar: "https://avatars.githubusercontent.com/u/86565903?v=4",
        link: "https://github.com/Xrg360"
      },
      {
        github: "Rovan Thomas John",
        avatar: "https://avatars.githubusercontent.com/u/128726991?v=4",
        link: "https://github.com/rovxn"
      },
      {
        github: "Adrin Jose C T",
        avatar: "https://avatars.githubusercontent.com/u/112411286?v=4",
        link: "https://github.com/Adrin7113"
      },
      {
          github: "Bhavan S",
          avatar: "https://avatars.githubusercontent.com/u/109290304?v=4",
          link: "https://github.com/parzi-al"
        },
        {
          github: "Joshua Varghese",
          avatar: "https://avatars.githubusercontent.com/u/69136448?v=4",
          link: "https://github.com/infinitytmbots"
        },
        {
            github: "Vyshnav D Kumar",
            avatar: "https://avatars.githubusercontent.com/u/107564336?v=4",
            link: "https://github.com/vyshnvdkmr"
          },
        {
            github: "Vaishakh S Nair",
            avatar: "https://avatars.githubusercontent.com/u/36193436?v=4",
            link: "https://github.com/vaishakhsnair"
          },
            {
              github: "Amalekh Biju",
              avatar: "https://avatars.githubusercontent.com/u/97168630?v=4",
              link: "https://github.com/Amalekh-Biju"
            },
  ];

  return (
    <div
      className="bg-custom-gradient h-screen flex flex-col justify-between"
      id="background"
    >
      <div className="mx-10 mt-10 gap-10 flex flex-col">
        <Header />
        <h1 className="text-6xl underline underline-offset-4 font-bold text-darkpacha">
          Maintainers
        </h1>
                <div className="px-10 flex justify-center">
          <div className="grid grid-cols-3 gap-10">
            {data.map((maintainer, index) => (
              <MaintainerTag
                key={index}
                github={maintainer.github}
                avatar={maintainer.avatar}
                link={maintainer.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintainers;