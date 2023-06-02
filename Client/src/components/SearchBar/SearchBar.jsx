import { useState } from "react";
import styles from './SearchBar.module.css'

const SearchBar = (props) =>{

   const [id, setId] = useState(''); //?Importa y crea un estado local llamado id. Debe inicializarse como un string vacío.

   const handleChange = (event) =>{ //? función handleChange de modo que, cada vez que el usuario escriba algo en el input, este se guarde en el estado local id.
      setId(event.target.value);//? .target le decimos a quien va a ejecutar, a donde esta apuntado
   }
   
   let getRandomId = () => {
      return Math.floor(Math.random() * (827 - 1 + 1) + 1);
   }
   
   return (
      <div className={styles.SearchBarContainer}>
         <input onChange={handleChange} type='search' placeholder="Insert ID"/>
         <button onClick={() => props.onSearch(id)} >Add</button> {/* //?creamos una función para que ejecute cada vez que se hga click ejecute la función onSearch esa reciba el estado id como argumento. */}
         <button onClick={() => props.onSearch(getRandomId())}>Get lucky</button>
      </div>
   );
}

export default SearchBar;