
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import logo from "../assets/rickAndMortyLogo.png";
import SearchBar from './SearchBar/SearchBar.jsx';
import { NavLink, useLocation } from 'react-router-dom';

//* Inicio estilos --------------------------------

  const NavContainer = styled.div`
		width: 100%;
		height: 120px;
		background-color: #f9f9f9;
    display: flex;
		justify-content: space-between;
		align-items: center;
	`;

  const LogoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
  }`;
  const LogoContainer = styled.div`
    margin: 0 100px 0 30px;
    > img {
        width: 70px;
        height: 70px;
        animation: ${LogoSpin} 5s infinite linear;
      }
  `;
  
  const SearchBarContainer = styled.div`
    margin: 0;
	`;

  const LinksContainer = styled.div`
    margin: 0 30px;

    > button {
      background-color: #3c3e44;
      border: 0;
      padding: 11px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-weight: 800;
      margin: 6px;
      width: 100px;

      > a {
        text-decoration: none;
        color: #fff;
      }

      > .active {
        color: #f96e4d;
      }
      
    }
  `;

  //* Fin estilos ------------------------------------------------

const Nav = (props) => {
  //? useLocation devuelve un objeto, tiene la propiedad pathname que devuelve la ruta donde estamos
  //? si la ruta donde estamos es igual a '/' retorna null, no muestra el componente ya que frena la función
  const location = useLocation(); 
  /* if (location.pathname === '/') {
    return null;
  } */

  return location.pathname === '/' ? null : (
    <NavContainer>

      <LogoContainer>
        <img src={logo} alt="Rick and Morty Logo" />
      </LogoContainer>

      <SearchBarContainer>
        {/* //?Componente */}
        <SearchBar onSearch={ props.onSearch } />
      </SearchBarContainer>

      <LinksContainer>
        <button>
          <NavLink to="/home">Home</NavLink>
        </button>
        <button>
          <NavLink to="/about">About me</NavLink>
        </button>
      </LinksContainer>

    </NavContainer>
  )
}

export default Nav;