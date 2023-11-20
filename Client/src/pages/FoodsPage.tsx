import { getFoods } from "../api/Foods";
import React, {useState, useEffect} from 'react';
import Food from "../models/food";

const FoodsPage =  ()  => {
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
      <div className='row container-fluid py-3'>{
        foods && foods.map(post => <div className='col-lg-4 mb-3' key={post.id}>
          <div className="card">
            <div className="card-body">
              <div>Post number: {post.id}</div>
              <div className="card-title fs-4 fw-normal">{post.id}</div>
              <div>{post.name}</div>
            </div>
          </div>
        </div>)
      }</div>
    );
  };
  
  export default FoodsPage;