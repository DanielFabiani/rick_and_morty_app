//*Componente contenedor de todas las Card
import Card from './Card';
import styled from 'styled-components';

	//* Inicio estilos
	const CardContainer = styled.div`
		width: 100%;
		height: 100%;
		background-color: #272B33;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	`;


	//* Fin estilos ------------------------------------------------

const Cards = (props) => {

	return( 
		<CardContainer>
			{
				props.characters.map((character) => {
					return (
						<Card 
							key={character.id}
							id={character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							gender={character.gender}
							origin={character.origin.name}
							image={character.image}
							onClose={() => props.onClose(character.id)}
						/>
						)
				})
			}
		</CardContainer>
	
	)
}

export default Cards;
