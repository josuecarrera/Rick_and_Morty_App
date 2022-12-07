import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../Nav/NavBar.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.nav}>
      <Link to="/home" className={styles.nav_link}>Home</Link>
      <Link to="/about"className={styles.nav_link}>About</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
