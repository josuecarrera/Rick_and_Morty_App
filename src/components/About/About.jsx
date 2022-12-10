import React from "react";
import styles from "../About/About.module.css";

export default function About(props){
    return(
        <div>
            <h1 className={styles.h1}>La app de Rick and Morty en un reto para los futuros de Dev que consite en lograr repasar los temas que se vienron en el M2, que consta de React una libreria diseniada por facebook y otros entornos que le dan vida a la aplicacion</h1>
            <h2 className={styles.h1}>About me: Me llamo Josue Carrera, actualmente estudiente de ingenieria en Electronica y Telecomunicaciones y futuro desarrolador, me encanta la programacion es un universo de informacion y oportunidades que te da para mejorar en el mundo laboral son grandes por eso estoy aqui para lograr un dia conseguir un buen trabajo y estalibilad laboral en este tiempo.</h2>
        </div>
    );
}