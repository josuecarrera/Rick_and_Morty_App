import React from "react";
import { validation } from "./validation.js";
import style from "./Form.module.css";
import styled from "styled-components";
//rfc

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 0.7em;
  border: 2px solid palevioletred;
  border-radius: 5px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Input2 = styled.input.attrs((props) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 0.7em;
  border: 2px solid palevioletred;
  border-radius: 5px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #06d6a0;
`;

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
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "white" }} htmlFor="username">
          <Title>UserName: </Title>
        </label>
        <Input
          id="username"
          name="username"
          placeholder="Ingrese el usuario..."
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p style={{ color: 'Chartreuse' }}>{erros.username}</p>
        <label style={{ color: "white" }} htmlFor="password">
          <Title>Password:</Title>
          {/* Password:{""} */}
        </label>
        <Input2
          id="password"
          name="password"
          type="password"
          placeholder="Ingrese la contrasenia..."
          value={userData.password}
          onChange={handleInputChange}
        />
        <p style={{ color: 'Chartreuse' }}>{erros.password}</p>
        <input type="submit" className={style.btn_borde} />
        {/* el type se comporta como un boton */}
      </form>
    </div>
  );
}
