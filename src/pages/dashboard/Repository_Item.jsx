import React from "react";

const Repository_Item = ({ ghLink, author, authorImg }) => {
  return (
    <div className="border-4 border-black rounded-2xl w-full lg:w-3/4 min-h-28 lg:min-h-36 flex bg-green-100">
      <div className="w-1/4 flex items-center justify-center">
        <img
          src={authorImg}
          alt="Author Image"
          className="rounded-full h-12 lg:h-20 w-12 lg:w-20"
        />
      </div>
      <div className="w-3/4 flex flex-col justify-center">
        <h1 className="text-xl lg:text-4xl font-bold">{author}</h1>
        <a
          href={`https://${ghLink}`}
          className="text-lg lg:text-2xl underline font-bold"
        >
          {ghLink}
        </a>
      </div>
    </div>
  );
};

export default Repository_Item;
