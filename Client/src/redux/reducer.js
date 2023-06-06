import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./actions/types";


const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }
    }
    case REMOVE_FAV: {
      const filteredCharacters = state.myFavorites.filter(character => character.id !== action.payload)
      return {
        ...state,
        myFavorites: filteredCharacters
      }
    }
    case FILTER_CARDS: {
      const filteredCharacter = state.allCharacters.filter(character => character.gender === action.payload)
      return {
        ...state,
        myFavorites: 
          action.payload === 'allCharacters'
          ? [...state.allCharacters]
          : filteredCharacter
      }
    }
    case ORDER_CARDS: {
      const orderCharacterCopy = [...state.allCharacters]
      return {
        ...state,
        myFavorites:
          action.payload === 'Ascendente'
          ? orderCharacterCopy.sort((a, b) => a.id - b.id)
          : orderCharacterCopy.sort((a, b) => b.id - a.id)
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default reducer;