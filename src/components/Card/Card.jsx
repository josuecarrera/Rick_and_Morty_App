import styles from "./Card.module.css";
import { Link } from "react-router-dom";
//name, species, image, gender, onClose
export default function Card(props) {
  //desestruring
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <Link to={`/detail/${props.detailId}`}>
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
