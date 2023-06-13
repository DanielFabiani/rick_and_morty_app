/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

//* Estilos ----------------------------------------------------------------
const MainContainer = styled.article`
  width: 550px;
  height: 230px;
  display: flex;
  flex-direction: row;
  /* overflow: hidden; */
  background: #3c3e44;
  border-radius: 12px;
  margin: 12px;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const CardImg = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  > img {
    border-radius: 12px 0 0 12px;
    height: 100%;
  }
  > button {
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: rgb(244, 244, 244, 0.6);
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }
  > button:hover {
    background-color: rgb(249, 110, 77, 0.6)
  }
`;

const CardInfo = styled.div`
  width: 100%;
  margin: 0;
  text-align: center;
  align-items: center;
  color: #fff;
  padding: 0;
  position: relative;

  > a {
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
  > a h2 {
    margin-top: 8px;
    color: #84d7c8;
    padding: 6px;
    margin-bottom: 12px;
  }
  > a h2:hover {
    color: #f96e4d;
  }
  > p {
    margin-top: 2px;
  }
  > button {
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
`;
//* Fin Estilos ----------------------------------------------------------------
const Card = (props) => {

	const { myFavorites, addFav, removeFav } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

	useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const location = useLocation()
  return (
    <MainContainer>
      <CardImg>
        <img src={props.image} alt="{props.name}" />
      {location.pathname !== '/favorites' && <button onClick={props.onClose}>X</button>}
        {/* <button onClick={props.onClose}>X</button> */}
      </CardImg>

      <CardInfo>
        { isFav 
        ? ( <button onClick={handleFavorite}>❤️</button> ) 
        : ( <button onClick={handleFavorite}>🤍</button> )
        }
        {/* //? acá tomo el id del personaje y cuando hago click el path q esta en App me lleva el componente Detail */}
        <NavLink to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </NavLink>

        <p>{props.status}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <p>{props.origin}</p>
      </CardInfo>
    </MainContainer>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
