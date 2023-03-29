const addToDB = (meal) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  const storedList = getItemFromDB();
  const exist = storedList.find((storedItem) => storedItem.id === idMeal);
  if (exist) {
    alert("Item already added");
  } else {
    storedList.push({ id: idMeal, name: strMeal, img: strMealThumb });
  }

  localStorage.setItem("favourit-list", JSON.stringify(storedList));
};

const getItemFromDB = () => {
  let favouriteList;
  const storedList = JSON.parse(localStorage.getItem("favourit-list"));
  if (storedList) {
    favouriteList = storedList;
  } else {
    favouriteList = [];
  }

  return favouriteList;
};

export { addToDB, getItemFromDB };
