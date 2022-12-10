import React from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

function handleOrder(e){
  dispatch(orderCards(e.target.value))
}

  return (
    <div>
      <div>

        <select name="order" onChange={handleOrder} className={styles.optiones}>
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>

        <select className={styles.optiones}  name="filter" onChange={(e) => {dispatch(filterCards(e.target.value))}}>
          <option value='All'>Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites?.map((char) => (
        <div key={char.id} className={styles.div}>
          <h2 className={styles.h2_text}>{char.name} - {char.id}</h2>
          <img src={char.image} alt={char.name} className={styles.image}/>
          <h2 className={styles.h2_text}>{char.gender}</h2>
        </div>
      ))}
    </div>
  );
}

function mapStateProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateProps, null)(Favorites);
