import React from "react";
import MealCard from "../MealCard/MealCard";

const Meals = ({ mealsData }) => {
  const meals = mealsData.meals;
  if (meals) {
    return (
      <div className="meals__container p-20 mx-auto grid grid-cols-2 gap-5">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal}></MealCard>
        ))}
      </div>
    );
  } else {
    <div className="meals__container">
      <h2>No data found Relod Again</h2>
    </div>;
  }
};

export default Meals;
