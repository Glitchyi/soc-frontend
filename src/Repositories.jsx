

const Repositories = () => {
  const data = [
    {
      link: "https://github.com/Glitchyi/Introduction-to-Rust",
      ready: true,
    },
    {
      link: "https://github.com/Glitchyi/jabac",
      ready: false,
    },
    {
      link: "https://github.com/The-Capstone-Project/Clearch",
      ready: false,
    },
    {
      link: "https://github.com/Glitchyi/MITS-Mini-Project-Latex",
      ready: true,
    },
    {
      link: "https://github.com/Cloud-Tech-Team/open-elective",
      ready: true,
    },
    {
      link: "https://github.com/Cloud-Tech-Team/open-electve-backend",
      ready: true,
    },
    {
      link: "https://github.com/parzi-al/mcscanner",
      ready: false,
    },
    {
      link: "https://github.com/Xrg360/MITS_Report_Latex",
      ready: false,
    },
    {
      link: "https://github.com/Xrg360/MITS_Report_Latex"
    },
    {
      link: "https://github.com/Xrg360/datastructures",
    },
    {
      link: "https://github.com/Xrg360/ssmp-lab",
    },
    {
      link: "https://github.com/Xrg360/networkLabS6",
    },
    {
      link: "https://github.com/rovxn/KTU-Lab",
    },
    {
      link: "https://github.com/rovxn/certificate_generation",
    },
    {
      link: "https://github.com/vaishakhsnair/weathergoround",
    },
    {
      link: "https://github.com/MITS-Dev-Team/CanteenApp",
    },
  ];

  return (
    <div className=" flex flex-col justify-between">
      <div className="mx-10 mt-10 gap-10 flex flex-col">

        <h1 className="text-6xl underline underline-offset-4 font-bold text-darkpacha">
          Repositories
        </h1>
        <div className="px-10 py-10">
          <div className="flex flex-col gap-8">
            {data.map((repos, index) => (
              <a
                key={index}
                href={repos.link}
                className=" underline underline-offset-4 text-3xl font-bold"
              >
                {repos.link.replace("https://", "")}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
