import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SavedItem = ({ meal, removeItme }) => {
  const { img, name, id } = meal;
  return (
    <div className="grid grid-cols-5 items-center gap-4 mb-4">
      <div className="">
        <img src={img} className="rounded-lg " alt="" />
      </div>
      <div className="col-span-3">
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <div className="justify-self-end">
        <button
          className="btn btn-primary rounded-full"
          onClick={() => removeItme(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default SavedItem;
