import React, { useEffect, useState } from "react";

interface foodListProps {
  data?: food;
  setFoods: (foods: Array<food>) => void;
}

interface food {
  _id?: string;
  name: string;
  description: string;
  caloriesPerGram: number;
  proteinPerGram: number;
}

const FoodList: React.FC<foodListProps> = ({ data, setFoods }) => {
  const [foodsData, setFoodsData] = useState<Array<food>>([]);

  const getFoods = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_FOODS_URL);
      const data = await response.json();
      setFoodsData(data.data);
      setFoods(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, [data]);

  const handleDelete = async (id: food["_id"]) => {
    const URL = `${process.env.REACT_APP_FOODS_URL}/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      if (data.success) {
        getFoods();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id: food["_id"], cal: number, prot: number) => {
    const URL = `${process.env.REACT_APP_FOODS_URL}/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caloriesPerGram: cal,
        proteinPerGram: prot,
      }),
    };

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      if (data.success) {
        getFoods();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded border border-l-gray-100 mt-3">
      <ul className="max-w-md divide-y">
        {foodsData?.map((food) => {
          return (
            <li
              className="pb-3 sm:pb-4 hover:bg-gray-100 transition duration-500"
              key={food._id}
            >
              <div className="flex items-center space-x-4 pt-3">
                <div className="flex-1 min-w-0 ml-3">
                  <p className="text-lg font-medium text-gray-700 truncate">
                    {food.name}
                  </p>
                  <p className="text-gray-500">{food.description}</p>
                </div>
                <div className="inline-flex items-center text-gray-700">
                  <p>{food.caloriesPerGram}</p>
                  <p className="text-gray-400 text-sm mr-3 pt-1">Kcal</p>
                  <p className="mr-3">{food.proteinPerGram}g</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FoodList;
