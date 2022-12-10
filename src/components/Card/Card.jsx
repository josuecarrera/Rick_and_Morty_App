import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions.js";
import styles from "./Card.module.css";
import styled from "styled-components";

const Btn = styled.button`
  width: 20%;
  border-radius: 0.5em;
  margin: 1em;//
  margin-right: 2.5em;//
  margin-left: 2em;// 1.5em
  margin-block: 2.5px;// 2.5px
  padding: 0.3em;// 0.5em
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 1em;
  &:hover {
    background-color: #ffd60a;
    cursor: pointer;
  }
`;

const Btn2 = styled.button`
  width: 20%;
  border-radius: 0.5em;
  margin: 1em;//
  margin-right: 2.5em;//
  margin-left: 2em;// 1.5em
  margin-block: 2.5px;// 2.5px
  padding: 0.35em;// 0.5em
  border: solid #06d6a0;
  color: #370617;
  font-weight: 700;
  font-size: 0.9em;
  &:hover {
    background-color: #ffd60a;
    cursor: pointer;
  }
`;

function Card(props) {
  //desestruring
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id);
    } else {
      setIsFav(true);
      props.addFavorites(props);
    }
  }

  return (
    <div className={styles.div}>
      {isFav ? (
        <Btn2 onClick={handleFavorite}>❤️</Btn2>
      ) : (
        <Btn2 onClick={handleFavorite}>🤍</Btn2>
      )}

      {/* <div className={styles.buttonContainer}> */}
      <Btn onClick={props.onClose}>X</Btn>
      {/* </div> */}

      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.h2_text}>{props.name}</h2>
        <img className={styles.image} src={props.image} alt={props.name} />

        <div className={styles.data}>
          <h2 className={styles.h2_text}>{props.species}</h2>
          <h4 className={styles.h2_text}>{props.gender}</h4>
        </div>
      </Link>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: function (character) {
      dispatch(addFavorites(character));
    },
    deleteFavorites: function (id) {
      dispatch(deleteFavorites(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
