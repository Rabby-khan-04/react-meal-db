import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import Meals from "../Meals/Meals";
import SideList from "../SideList/SideList";

const Body = () => {
  const [meals, setMeals] = useState({});
  const [searchText, setSearchText] = useState("fish");

  const handelSearch = (text) => {
    setSearchText(text);
  };

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
          <Meals mealsData={meals}></Meals>
        </div>
        <div className="bg-secondary py-20 px-10">
          <SideList></SideList>
        </div>
      </div>
    </main>
  );
};

export default Body;
