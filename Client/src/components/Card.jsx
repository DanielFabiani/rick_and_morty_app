import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//* Estilos ----------------------------------------------------------------
const MainContainer = styled.article`
	width: 550px;
	height: 220px;

	display: flex;
	flex-direction: row;
	/* overflow: hidden; */
	background: #3c3e44;
	border-radius: 12px;
	margin: 12px;
	padding: 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const CardImg = styled.div`
	margin: 0 ;
	padding: 0;
	> img {
		border-radius: 12px 0 0 12px;
		height: 100%
	}
`;

const CardInfo = styled.div`
	width: 100%;
	margin: 0;
	text-align: center;
	align-items: center;
	color: #fff;
	
	> a {
		cursor: pointer;
		text-decoration: none;
		text-align: center;
	}
	> a h2 {
		color: #84d7c8;
		padding: 8px;
		margin-bottom: 0;
	}
	> p {
		margin-top: 2px;
	}
`;
//* Fin Estilos ----------------------------------------------------------------å
const Card = (props) => {

	return (
		<MainContainer>
			<CardImg>
				<img src={props.image} alt='{props.name}' /> 
				<button onClick={props.onClose}>X</button>
			</CardImg>

			<CardInfo>
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
}

export default Card;
