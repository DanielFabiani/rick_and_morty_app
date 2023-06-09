import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {

  const [id, setId] = useState("");

  const handleChange = (event) => {
    // .target le decimos a quien va a ejecutar, a donde esta apuntado
    setId(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(id);
    setId('');
  };

  let getRandomId = () => {
    return Math.floor(Math.random() * (827 - 1 + 1) + 1);
  };

  return (
    <div className={styles.SearchBarContainer}>
      <input onChange={handleChange} type="search" placeholder="Insert ID" />
      <button onClick={handleSearch} >Add</button>{" "}
      {/* //?creamos una función para que ejecute cada vez que se hga click ejecute la función onSearch esa reciba el estado id como argumento. */}
      <button onClick={() => props.onSearch(getRandomId())}>Get lucky</button>
    </div>
  );
};

export default SearchBar;
