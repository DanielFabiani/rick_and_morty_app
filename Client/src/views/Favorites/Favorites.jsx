import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards, removeFav } from "../../redux/actions/actions";
import { useState } from "react";



const Favorites = (props) => {

  const { removeFav } = props;
  const favorites = useSelector(state => state.myFavorites)


  const [aux, setAux] = useState(false);

  const onClose = (id) => { 
      removeFav(id)
    }

  const dispatch = useDispatch();

  const handleOrder = (event)=> {
    const order = event.target.value;
    dispatch(orderCards(order));
    setAux(!aux);
  }

  const handleFilter = (event)=> {
    const order = event.target.value;
    dispatch(filterCards(order));
  }

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>
      {
        favorites.map((favorite) => {
          return (
            <Card 
                key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                status={favorite.status}
                species={favorite.species}
                gender={favorite.gender}
                origin={favorite.origin}
                image={favorite.image}
                onClose={() => onClose(favorite.id)}
              />
          )
        })
      }
    </div>
  )
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    removeFav: (id) => dispatch(removeFav(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
