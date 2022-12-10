import styles from "../Detail/Detail.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 0.5em;
  margin-left: 0.5em;
  padding: 0.5em;
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 1em;
  &:hover {
    background-color: #ffd60a;
    cursor: pointer;
  }
`;

export default function Detail(props) {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      {/* <Link to="/home">
                <button>Go Back</button>
            </Link>
            <h2 className={styles.h2_name}>{character.name}</h2>
            <img src={character.image} alt={character.image}/>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Specie: {character.specie}</h3>
            <h3>Gender: {character.gender}</h3> */}
      <Link to="/home">
        <Btn onClick={handleClick} >Go Back</Btn>
      </Link>
      {character ? (
        <div>
          <div>
            <h2 className={styles.h2_name}>{character.name}</h2>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
          </div>
          <div>
            <img src={character.image} alt={character.image} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
