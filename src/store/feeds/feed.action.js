import {
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_ERROR,
} from "./feed.type";
import axios from "axios";

export const getFeedsAPI = () => (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  axios
    .get("http://localhost:8080/feeds")
    .then((r) => {
      // console.log("feed action",r.data)
      dispatch({ type: GET_FEEDS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEEDS_ERROR });
    });
};
