import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MealCard = ({ meal, handelFavList }) => {
  const { idMeal, strCategory, strInstructions, strMeal, strMealThumb } = meal;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-[40%] h-full">
        <img src={strMealThumb} alt="meals" className="h-full w-full" />
      </figure>
      <div className="card-body w-[60%]">
        <h2 className="card-title">{strMeal}</h2>
        <p>
          <strong>Instructions : </strong>
          {strInstructions.length > 300
            ? strInstructions.slice(0, 300) + "..."
            : strInstructions}
        </p>
        <p>
          <strong>Category : </strong>
          {strCategory}
        </p>
        <div className="card-actions justify-start">
          <button
            className="btn btn-primary"
            onClick={() => handelFavList(meal)}
          >
            Add To List
            <span className="ml-2">
              <FontAwesomeIcon icon={faListCheck} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
