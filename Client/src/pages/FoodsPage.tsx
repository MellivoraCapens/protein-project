import { getFoods } from "../api/Foods";

const FoodsPage = async () => {
    const result = await getFoods();
    console.log(result);
    return (
      <div>
        <h1 className="text-4xl text-secondary">(result)</h1>
      </div>
    );
  };
  
  export default FoodsPage;