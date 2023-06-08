import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./types";
import axios from "axios";
//actions-creator
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (genders) => {
  return {
    type: FILTER_CARDS,
    payload: genders,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};
