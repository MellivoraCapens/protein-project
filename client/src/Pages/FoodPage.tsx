import React, { useState } from "react";
import FoodList from "../Components/FoodList";
import FoodAdd from "../Components/FoodAdd";
import FoodSearchBar from "../Components/FoodSearchBar";

interface food {
  _id?: string;
  name: string;
  description: string;
  caloriesPerGram: number;
  proteinPerGram: number;
}

const FoodPage: React.FC = () => {
  const [data, setData] = useState<food>();
  const [foods, setFoods] = useState<Array<food>>([]);

  return (
    <div>
      <FoodAdd setData={setData} />
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FoodSearchBar foods={foods} />
        <FoodList data={data} setFoods={setFoods} />
      </div>
    </div>
  );
};

export default FoodPage;
