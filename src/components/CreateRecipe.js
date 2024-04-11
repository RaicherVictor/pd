import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
let config = require("../config");
let localConfig = {};
try {
  localConfig = require("../local-config");
} catch (error) {/**/}
config = _.merge(config, localConfig);

 function CreateRecipe() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${config.backend.url}/students/create-student`, userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Название</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Калорийность</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Приготовление</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Создать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
