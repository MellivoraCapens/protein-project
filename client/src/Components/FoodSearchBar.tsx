import React from "react";

interface foodSearchBarProps {
  foods: Array<food>;
}

interface food {
  _id?: string;
  name: string;
  description: string;
  caloriesPerGram: number;
  proteinPerGram: number;
}

const FoodSearchBar: React.FC<foodSearchBarProps> = ({ foods }) => {
  return (
    <div className="w-full max-w-lg">
      <div className="flex">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
        <button
          className="shadow-md bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 group-invalid:pointer-events-none group-invalid:opacity-30"
          onClick={() => console.log(foods)}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default FoodSearchBar;
