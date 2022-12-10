import { useState, useEffect } from "react";
import {  Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from './components/favorites/Favorites.jsx'

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const username = "josuecarrera@hotmail.com";
  const password = "josue1234";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contrasenia incorrecta");
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>{location.pathname !== "/" && <NavBar onSearch={onSearch} />}</div>
      
        <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    
     
    </div>
  );
}

export default App;
