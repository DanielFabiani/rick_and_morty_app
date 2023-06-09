import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import About from "./views/About";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail";
import NotFound from "./views/NotFound/NotFound";
import Form from "./views/Form/Form";
import Favorites from "./views/Favorites/Favorites";

function App() {
  //? estado del componente
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      const parseId = parseInt(id);
      if (isNaN(parseId) || parseId < 1 || parseId > 826) {
        alert("El ID del personaje debe ser un número entre 1 y 826.");
        return;
        // en caso q la condición se cumpla detengo la función con el return.
      }
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        // compruebo si existe el personaje que estoy solicitando, el .name puede ser cualquier propiedad, comprueba que exista el objeto con la información
        const existingCharacter = characters.find(
          (character) => character.id === data.id
        );
        if (existingCharacter) {
          alert(`El personaje con ID ${data.id} ya existe.`);
        } else {
          setCharacters((character) => [...character, data]);
        } // llamo a la función que modifica el estado, que recibe una CB, donde recibe el valor que ya tenia y el valor nuevo
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClose = (id) => {
    //? recibe el id del personaje
    setCharacters(
      characters.filter((character) => character.id !== id)
    );
    //* filtra todo lo que sea distinto sale del array y al salir del array modifica el estado y no se muestra mas ese personaje y su card
  };

  //* estado para el acceso
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
    //                                        response
      const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        {/* //? el id traído desde el link en card queda guardado en params al hacer en el path /:id */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
