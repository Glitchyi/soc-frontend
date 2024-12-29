import React from "react";
import Repository_Item from "./Repository_Item";

const tempRepos = [
  {
    id: 1, // TODO
    ghLink: "github.com/Adrin7113/College_List",
    author: "Adrin Jose C T",
    authorImg: "https://avatars.githubusercontent.com/u/112411286?v=4",
  },
  {
    id: 2,
    ghLink: "github.com/Glitchyi/spotpapers",
    author: "Advaith Narayanan",
    authorImg: "https://avatars.githubusercontent.com/u/55801439?v=4",
  },
];

const Contributed_Repos = (
  { repositories } //TODO
) => {
  return (
    <div>
      <h1 className="text-6xl font-bold mt-20 mb-10">Contributed Repos</h1>
      <div className="flex flex-col gap-10">
        {tempRepos.map((repo) => (
          <Repository_Item
            key={repo.id}
            ghLink={repo.ghLink}
            author={repo.author}
            authorImg={repo.authorImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Contributed_Repos;
