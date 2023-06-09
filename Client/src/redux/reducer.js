import {
  ADD_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  REMOVE_FAV,
} from "./actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV: {
      return { 
        ...state, 
        myFavorites: action.payload, 
        allCharacters: action.payload,
        errors: false
      };
    }
    case REMOVE_FAV: {
      return { 
        ...state, 
        myFavorites: action.payload,
        allCharacters: action.payload,
        errors: false
      };
    }
    case 'ERROR':
      return { 
        ...state, 
        errors: action.payload
      }
    case FILTER_CARDS: {
      const filteredCharacter = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : filteredCharacter,
      };
    }
    case ORDER_CARDS: {
      const orderCharacterCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? orderCharacterCopy.sort((a, b) => a.id - b.id)
            : orderCharacterCopy.sort((a, b) => b.id - a.id),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
