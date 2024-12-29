import React from "react";

const Repository_Item = ({ ghLink, author, authorImg }) => {
  return (
    <div className="border-4 border-black rounded-2xl w-3/4 min-h-36 flex">
      <div className="w-1/4 flex items-center justify-center">
        <img
          src={authorImg}
          alt="Author Image"
          className="rounded-full h-20 w-20"
        />
      </div>
      <div className="w-3/4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">{author}</h1>
        <a href={`https://${ghLink}`} className="text-2xl underline font-bold">
          {ghLink}
        </a>
      </div>
    </div>
  );
};

export default Repository_Item;
