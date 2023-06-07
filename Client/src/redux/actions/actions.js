import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./types";

//actions-creator
export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character
  }
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id
  }
};

export const filterCards = (genders) => {
  return {
    type: FILTER_CARDS,
    payload: genders
  }
};

export const orderCards =  (order) => {
  return {
    type: ORDER_CARDS,
    payload: order
  }
}