import React from "react";
import Pull_Request_Item from "./Pull_Request_Item";

const tempPRs = [
  {
    id: 1, // TODO
    prLink: "https://github.com/subsurface/libdc/pull/69",
    ghLink: "Adrin7113/College_List",
    status: "Merged",
  },
  {
    id: 2,
    prLink: "https://github.com/subsurface/libdc/pull/69",
    ghLink: "Glitchyi/spotpapers",
    status: "Open",
  },
  {
    id: 3,
    prLink: "https://github.com/subsurface/libdc/pull/69",
    ghLink: "Adrin7113/College_List",
    status: "Merged",
  },
  {
    id: 4,
    prLink: "https://github.com/subsurface/libdc/pull/69",
    ghLink: "Glitchyi/spotpapers",
    status: "Open",
  },
];

const Pull_Requests = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-10 ">
        {tempPRs.map((repo) => (
          <Pull_Request_Item
            key={repo.id}
            ghLink={repo.ghLink}
            status={repo.status}
            prLink={repo.prLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Pull_Requests;
