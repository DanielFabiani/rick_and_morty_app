import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Detail.module.css";

const Detail = () => {

  //* Hooks -------------------------------------------------------------------
  //? con useParams obtengo el id de la url desestructurado
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      } 
    })
    return setCharacter({});
  }, [id]);
  //* Fin Hooks ----------------------------------------------------------------

  return(
    <div className={styles.mainContainer}>
      { //* Código JS Condicional Ternario
        character.name ? ( //? si character.name ? existe muestra esto
          <>
            <div className={styles.imgContainer}>
              <img src={character.image} alt='{character.name}' /> 
            </div>

            <div className={styles.infoContainer}>
              <h1>{character.name}</h1>
              <p>STATUS | {character.status}</p>
              <p>GENDER | {character.gender}</p>
              <p>SPECIES | {character.species}</p>
              <p>ORIGIN | {character.origin.name}</p> {/* //? aca generalmente da el error cant reed this property, se resuelve con un condicional ternario  */}
            </div>
          </>
        ) : (  //? : sino existe muestra esto
          <img src='https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif' alt='Loading' />
        )
      }
    </div>
  )
}

export default Detail;