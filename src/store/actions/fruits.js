import api from "../../api";
import * as actions from "./actionTypes";

export function fetchFruits() {
  return (dispatch) => {
    dispatch(fetchFruitsBegin());
    api
      .get("/api/fruits")
      .then((res) => dispatch(fetchFruitsSuccess(res.data)))
      .catch((error) => dispatch(fetchFruitsFail(error)));
  };
}

export const fetchFruitsBegin = () => {
  return {
    type: actions.FETCH_FRUITS_BEGIN,
  };
};

export const fetchFruitsSuccess = (fruits) => {
  return {
    type: actions.FETCH_FRUITS_SUCCESS,
    payload: { fruits },
  };
};

export const fetchFruitsFail = (error) => {
  return {
    type: actions.FETCH_FRUITS_FAIL,
    payload: { error },
  };
};
