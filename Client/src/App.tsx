import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import FoodPage from "./Pages/FoodPage";

function App() {
  return (
    <div className=" h-screen bg-gray-300 flex py-10 items-center justify-center ">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/foods" element={<FoodPage />} />
      </Routes>
    </div>
  );
}

export default App;
