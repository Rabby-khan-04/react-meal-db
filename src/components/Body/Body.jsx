import React, { useEffect, useState } from "react";
import { addToDB, getItemFromDB } from "../../utilitites/HandelBD";
import Hero from "../Hero/Hero";
import Meals from "../Meals/Meals";
import SideList from "../SideList/SideList";

const Body = () => {
  const [meals, setMeals] = useState({});
  const [searchText, setSearchText] = useState("a");
  const [mealList, setMealList] = useState([]);

  const handelSearch = (text) => {
    setSearchText(text);
  };

  const handelFavList = (meal) => {
    addToDB(meal);
    const storedItem = getItemFromDB("favourit-list");
    setMealList(storedItem);
  };

  useEffect(() => {
    const storedItem = getItemFromDB("favourit-list");
    setMealList(storedItem);
  }, [meals]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, [searchText]);

  return (
    <main>
      <Hero handelSearch={handelSearch}></Hero>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <Meals mealsData={meals} handelFavList={handelFavList}></Meals>
        </div>
        <div className="bg-secondary py-20 px-10">
          <SideList mealList={mealList}></SideList>
        </div>
      </div>
    </main>
  );
};

export default Body;

//https://www.themealdb.com/api/json/v1/1/lookup.php?i=
