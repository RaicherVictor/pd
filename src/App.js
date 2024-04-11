import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateRecipe from "./components/CreateRecipe";
import EditRecipe from "./components/EditRecipe";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/recipe-list"} className="nav-link">
            Кухни-рецепты
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-recipe"} className="nav-link">
                  Создать Рецепт
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/recipe-list"} className="nav-link">
                  Список рецептов
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-recipe" element={<CreateRecipe />} />
            <Route exact path="/edit-recipe/:id" element={<EditRecipe />} />
            <Route exact path="/recipe-list" element={<RecipeList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
