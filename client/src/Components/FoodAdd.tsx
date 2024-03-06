import React, { useState } from "react";

interface foodAddProps {
  setData: (data: newFood) => void;
}

interface newFood {
  name: string;
  description: string;
  caloriesPerGram: number;
  proteinPerGram: number;
}

const FoodAdd: React.FC<foodAddProps> = ({ setData }) => {
  const initialNewFood = {
    name: "",
    description: "",
    caloriesPerGram: 0,
    proteinPerGram: 0,
  };
  const [newFood, setNewFood] = useState<newFood>(initialNewFood);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewFood((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    };
    const addFoodToDatabase = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_FOODS_URL, options);
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    addFoodToDatabase();
    setNewFood({
      name: "",
      description: "",
      caloriesPerGram: 0,
      proteinPerGram: 0,
    });
  };

  return (
    <div className="w-full max-w-lg">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 group"
        onSubmit={handleSubmit}
      >
        <label className="my-5" htmlFor="food">
          <span className="text-gray-700 text-sm font-bold mb-2 whitespace-nowrap">
            Food Name
          </span>
          <input
            value={newFood.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
            name="name"
            type="text"
          />
        </label>
        <label className="mb-10" htmlFor="description">
          <span className="text-gray-700 text-sm font-bold mb-2">
            Description
          </span>
          <input
            value={newFood.description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
            name="description"
            type="text"
          />
        </label>
        <label className="my-5" htmlFor="calories">
          <span className="text-gray-700 text-sm font-bold mb-2 flex">
            Calories
            <p className="text-gray-400 font-normal text-sm">/100g</p>
          </span>
          <input
            value={newFood.caloriesPerGram}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
            name="caloriesPerGram"
            type="number"
          />
        </label>
        <label className="my-5" htmlFor="protein">
          <span className="text-gray-700 text-sm font-bold mb-2 flex">
            Protein
            <p className="text-gray-400 font-normal text-sm">/100g</p>
          </span>
          <input
            value={newFood.proteinPerGram}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
            name="proteinPerGram"
            type="number"
          />
        </label>
        <button
          className="shadow-md bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 group-invalid:pointer-events-none group-invalid:opacity-30 mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodAdd;
