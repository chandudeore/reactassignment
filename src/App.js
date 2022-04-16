import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { City } from "./components/City";
import { Country } from "./components/Country";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/add-country">Add-Country</Link>
          <Link to="/add-city">Add-City</Link>
        </div>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/add-country"} element={<Country />}></Route>
          <Route path={"/add-city"} element={<City />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
