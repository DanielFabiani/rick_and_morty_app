import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./types";
import axios from "axios";

const ENDPOINT = "http://localhost:3001/rickandmorty/fav";
//actions-creator
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDPOINT, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
        return dispatch({
          type: 'ERROR',
          payload: error.message
        })
    }
  }
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${ENDPOINT}/${id}`)
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
        return dispatch({
          type: 'ERROR',
          payload: error.message
        })
    }
  }
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
