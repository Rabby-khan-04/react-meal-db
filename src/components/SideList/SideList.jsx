import React from "react";
import SavedItem from "../SavedItem/SavedItem";

const SideList = ({ mealList, removeItme }) => {
  return (
    <div className="sticky top-10">
      <h2 className="text-2xl font-semibold text-center mb-8">
        List Your Favourite Foods{" "}
      </h2>
      <div>
        {mealList.map((meal) => (
          <SavedItem
            key={meal.id}
            meal={meal}
            removeItme={removeItme}
          ></SavedItem>
        ))}
      </div>
    </div>
  );
};

export default SideList;
