import React from "react";

const SavedItem = ({ meal }) => {
  const { img, name } = meal;
  return (
    <div className="grid grid-cols-5 items-center gap-4 mb-4">
      <div className="">
        <img src={img} className="rounded-lg " alt="" />
      </div>
      <div className="col-span-4">
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default SavedItem;
