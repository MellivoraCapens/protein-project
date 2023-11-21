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
            {/* <table className="block rounded-lg bg-slate-400 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(15,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
              <tr>
                <td>
                  
                </td>
              </tr>
            </table> */}
              Description : {food.description}
              Calories Per Gram : {food.caloriesPerGram}
              Protein Per Gram : {food.proteinPerGram}
              Created At: {food.createdAt.toString()}
          </div>
        </div> )
    }</div>

      // <div className='row container-fluid py-3'>{
      //   foods && foods.map(post => <div className='col-lg-4 mb-3' key={post.id}>
      //     <div className="card">
      //       <div className="card-body">
      //         <div>Post number: {post.id}</div>
      //         <div className="card-title fs-4 fw-normal">{post.id}</div>
      //         <div>{post.name}</div>
      //       </div>
      //     </div>
      //   </div>)
      // }</div>
    );
  };
  
  export default FoodsPage;