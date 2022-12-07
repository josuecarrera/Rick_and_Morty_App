import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setCharacter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter(value);
  };

  return (
    <div className={style.container}>
      <input type="search" name="search " id="" onChange={handleChange} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
      <button onClick={() => props.onSearch(Math.floor(Math.random() * 826))}>
        Agregar Personaje
      </button>
    </div>
  );
}
