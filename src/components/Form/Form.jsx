import React from "react";
import { validation } from "./validation.js";
import styled from "./Form.module.css";
//rfc
export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [erros, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <div className={styled.container}>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "white" }} htmlFor="username">
          UserName:{" "}
        </label>
        <input
          className={styled.label_box}
          id="username"
          name="username"
          placeholder="Ingrese el usuario..."
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{erros.username}</p>
        <label style={{ color: "white" }} htmlFor="password">
          Password:{" "}
        </label>
        <input
          className={styled.label_box}
          id="password"
          name="password"
          type="password"
          placeholder="Ingrese la contrasenia..."
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{erros.password}</p>
        <input  type="submit" className={styled.btn_borde} />
        {/* el type se comporta como un boton */}
      </form>
    </div>
  );
}
