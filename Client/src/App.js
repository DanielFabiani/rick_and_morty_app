import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import axios from 'axios';
import Nav from "./components/Nav.jsx";
import About from "./views/About";
import Cards from "./components/Cards.jsx";
import Detail from "./components/Detail";
import NotFound from "./views/NotFound/NotFound";
import Form from "./views/Form/Form";


function App() {
  //? estado del componente
	const [characters, setCharacters] = useState([]);

	const onSearch = (id) => {
		const parseId = parseInt(id);
		if (isNaN(parseId) || parseId < 1 || parseId > 826) {
			alert("El ID del personaje debe ser un número entre 1 y 826.");
      return;
			//? en caso q la condición se cumpla detengo la función con el return.
		}
		
		axios(`http://localhost:3001/rickandmorty/character/${id}`)
			.then(({ data }) => {
				if (data.name) { //? aca compruebo si existe el personaje que estoy solicitando, el .name también puede ser cualquier propiedad, solo comprueba que exista el objeto con la información
					const existingCharacter = characters.find(character => character.id === data.id);
          if (existingCharacter) {
            alert(`El personaje con ID ${data.id} ya existe.`);
          } else { setCharacters((character) => [...character, data])} //* aca llamo a la función que modifica el estado, que recibe una CB, donde recibe el valor que ya tenia y el valor nuevo
				}
			}) 
	}

	const onClose = (id) => { //? recibe el id del personaje
		setCharacters(
			characters.filter(character => character.id !== parseInt(id))
			); //*filtra y dice que el personaje con su id sea distinto al id
			//* si la condición se cumple pasa el filtro sino no pasa
			//* filter retorna un array nuevo donde el personaje con ese id ya no esta, y por eso ya no muestra ese personaje
			//! todo lo que sea distinto sale del array y al salir del array modifica el estado y no se muestra mas ese personaje y su card
	};

	//* estado para el acceso
	const navigate = useNavigate();
	const [access, setAccess] = useState(false);
	const email = 'daniel@email.com';
	const password = 'password1';

	const login = (userData)=> {
		if (userData.email === email && userData.password === password) {
			setAccess(true);
			navigate('/home');
		}
	}
	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	
	//const location = useLocation();
	//? Render
  return (
    <div className="App">
			{/* //? opción para que no muestre la barra de navegación:
			{location.pathname !== '/' && <Nav onSearch={ onSearch }/>} */}
			<Nav onSearch={ onSearch }/>
			<Routes>
				<Route path='/' element={<Form login={ login }/>} />
				<Route path="/home" element={ 
					<Cards characters={ characters } onClose={ onClose }/> 
				}/> 

				<Route path="/about" element={<About />}/>
			{/* //? el id traído desde el link en card queda guardado en params al hacer en el path /:id */}
				<Route path="/detail/:id" element={<Detail />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>

      
    </div>
  );
}

export default App;
