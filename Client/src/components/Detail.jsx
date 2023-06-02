import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//* Estilos ----------------------------------------------------------------

const MainContainer = styled.div`
  height: 100%;
  display: inline-block;
  width: fit-content;
  margin-top: 26px;
  padding: 32px;
  border-radius: 50px;
  background-image: linear-gradient(to right top, #5a886d, #417671, #3c626b, #3f4e5a, #3b3c43);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px;
  > img {
    border-radius: 40px;
    width: 300px;
  }
`;

const ImgContainer = styled.div`
  display: inline-block;

  > img {
    border-radius: 25%;
  }
`;

const InfoContainer = styled.div`

  > h1 {
      color: #84d7c8;
  }
  > p {
    color: #fff;
    font-size: 18px;
  }
`;

//* Fin Estilos ----------------------------------------------------------------

//? Component
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
    <MainContainer>
      {/* //? al cambiar el estado renderiza nuevamente */}
      { //* Código JS Condicional Ternario
        character.name ? ( //? si character.name ? existe muestra esto
          <>
            <ImgContainer>
              <img src={character.image} alt='{character.name}' /> 
            </ImgContainer>

            <InfoContainer>
              <h1>{character.name}</h1>
              <p>STATUS | {character.status}</p>
              <p>GENDER | {character.gender}</p>
              <p>SPECIES | {character.species}</p>
              <p>ORIGIN | {character.origin.name}</p> {/* //? aca generalmente da el error cant reed this property, se resuelve con un condicional ternario  */}
            </InfoContainer>
          </>
        ) : (  //? : sino existe muestra esto
          <img src='https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif' alt='Loading' />
        )
      }
    </MainContainer>
  )
}

export default Detail;