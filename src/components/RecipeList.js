import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipeList() {
  const [userForm, setUserForm] = useState([]);

  const deleteRecipe = (_id) => {
    axios
      .delete("http://localhost:4000/students/delete-recipe/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название блюда</th>
            <th scope="col">Калорийность</th>
            <th scope="col">Приготовление</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>@{user.rollno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-student/" + user._id}
                  >
                    Изменить
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteRecipe(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
