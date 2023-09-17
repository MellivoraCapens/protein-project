import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import FoodsPage from "./pages/FoodsPage";


function App() {
  return (
    <div className="font-OpenSans min-h-screen bg-dark text-light">
      <Router>
        <Routes>
          <Route
            path="/foods"
            element={<FoodsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
