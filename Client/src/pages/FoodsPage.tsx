import { getFoods } from "../api/Foods";
import React, {useState, useEffect} from 'react';
import Food from "../models/food";
import {
  Collapse,
  Ripple,
  Input,
  initTE,
} from "tw-elements";

const FoodsPage =  ()  => {
  initTE({ Collapse, Ripple, Input });

    const [foods, setFoods] = useState<Food[]>([]);
    

    useEffect(() => {
      async function getFoodsAndSetFoods(){
        const result = await getFoods();
        console.log(result);
        if (result)
        setFoods(result);
      }
      getFoodsAndSetFoods();
      console.log(foods);
    }, []);


    return (
    <div>{
      foods && foods.map(food =>
        <div>
          <button
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
            {food.name}
          </button>
          <div id="collapseExample" data-te-collapse-item>
            <table className="block rounded-lg px-6 pb-2 pt-2.5 bg-slate-400 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(15,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
              <tr>
                <td>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="description"
                      value={food.description}
                      placeholder="description" />
                    <label
                      htmlFor="description"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Description
                    </label>
                  </div>
                </td>
                <td>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="caloriesPerGram"
                      value={food.caloriesPerGram}
                      placeholder="caloriesPerGram" />
                    <label
                      htmlFor="caloriesPerGram"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Calories Per Gram
                    </label>
                  </div>
                </td>
                <td>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="proteinPerGram"
                      value={food.proteinPerGram}
                      placeholder="proteinPerGram" />
                    <label
                      htmlFor="proteinPerGram"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Protein Per Gram
                    </label>
                  </div>
                </td>
              </tr>
            </table>
              {/* Description : {food.description}
              Calories Per Gram : {food.caloriesPerGram}
              Protein Per Gram : {food.proteinPerGram}
              Created At: {food.createdAt.toString()} */}
          </div>
        </div> )
    }</div>
    );
  };
  
  export default FoodsPage;